/**
 * Clean HTML pasted from Microsoft Word / Google Docs / web pages into
 * lean, semantic HTML that our contentEditable editor and the public blog
 * renderer can trust.
 *
 * Browser-only (uses DOMParser / document). Call it inside a paste handler.
 *
 * What it preserves: headings (H1–H6, incl. Word "MsoHeadingN" paragraphs),
 * paragraphs, bold/italic/underline/strike (real tags *and* styled spans),
 * links, ordered/unordered/nested lists, blockquotes, tables, images,
 * sub/sup, code, line breaks.
 *
 * What it drops: Word cruft (mso-* styles, <o:p>, <xml>, conditional
 * comments), <style>/<script>/<meta>, class/style/lang attributes, and any
 * unknown tag (unwrapped, keeping its children) — plus javascript: URLs.
 */

const ALLOWED_TAGS = new Set([
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'BR', 'HR',
  'STRONG', 'EM', 'U', 'S', 'SUB', 'SUP', 'A', 'CODE', 'PRE',
  'UL', 'OL', 'LI', 'BLOCKQUOTE',
  'TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TR', 'TD', 'TH', 'CAPTION', 'COLGROUP', 'COL',
  'IMG', 'FIGURE', 'FIGCAPTION',
]);

const ATTR_WHITELIST: Record<string, string[]> = {
  A: ['href', 'title', 'target', 'rel'],
  IMG: ['src', 'alt', 'title', 'width', 'height'],
  TD: ['colspan', 'rowspan'],
  TH: ['colspan', 'rowspan', 'scope'],
  COL: ['span'],
  COLGROUP: ['span'],
};

const isBold = (style: string, tag: string) =>
  tag === 'B' || /font-weight\s*:\s*(bold|bolder|[6-9]00)/i.test(style);
const isItalic = (style: string, tag: string) =>
  tag === 'I' || /font-style\s*:\s*italic/i.test(style);
const isUnderline = (style: string) => /text-decoration[^;]*underline/i.test(style);

/** Move `nodes` into a fresh `tagName` element and return it. */
function wrap(nodes: Node[], tagName: string): HTMLElement {
  const el = document.createElement(tagName);
  nodes.forEach((n) => el.appendChild(n));
  return el;
}

/** Apply bold/italic/underline wrappers (from inline styles) around `nodes`. */
function applyInlineFormatting(nodes: Node[], style: string, tag: string): Node[] {
  let out = nodes;
  if (isUnderline(style)) out = [wrap(out, 'U')];
  if (isItalic(style, tag)) out = [wrap(out, 'EM')];
  if (isBold(style, tag)) out = [wrap(out, 'STRONG')];
  return out;
}

/** Recursively transform a source node into an array of clean nodes. */
function transformNode(node: Node): Node[] {
  if (node.nodeType === Node.TEXT_NODE) {
    return [document.createTextNode(node.textContent ?? '')];
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return []; // comments, etc.

  const el = node as HTMLElement;
  let tag = el.tagName.toUpperCase();

  // Drop these elements and everything inside them.
  if (['STYLE', 'SCRIPT', 'META', 'LINK', 'TITLE', 'HEAD'].includes(tag)) return [];

  const style = el.getAttribute('style') ?? '';
  const cls = el.getAttribute('class') ?? '';

  // Transform children first (post-order) so nested formatting resolves.
  const childNodes: Node[] = [];
  el.childNodes.forEach((c) => childNodes.push(...transformNode(c)));

  // Word represents headings as <p class="MsoHeadingN"> / <p class="MsoTitle">.
  const headingMatch = cls.match(/Mso(?:Heading|Title)\s*([1-6])?/i);
  if (tag === 'P' && headingMatch) {
    tag = headingMatch[1] ? `H${headingMatch[1]}` : 'H1';
  }

  // Normalise semantic aliases.
  if (tag === 'B') tag = 'STRONG';
  else if (tag === 'I') tag = 'EM';
  else if (tag === 'STRIKE' || tag === 'DEL') tag = 'S';
  else if (tag === 'FONT') tag = 'SPAN';

  // Spans/divs carry no semantics of their own — unwrap them, but keep any
  // bold/italic/underline they expressed through inline styles.
  if (tag === 'SPAN' || tag === 'DIV') {
    return applyInlineFormatting(childNodes, style, tag);
  }

  // Any tag not on the allow-list is unwrapped (children kept).
  if (!ALLOWED_TAGS.has(tag)) return childNodes;

  // Rebuild a clean element with only whitelisted attributes.
  const out = document.createElement(tag);
  for (const name of ATTR_WHITELIST[tag] ?? []) {
    const v = el.getAttribute(name);
    if (v == null) continue;
    if ((name === 'href' || name === 'src') && /^\s*(javascript|vbscript|data:text\/html)/i.test(v)) continue;
    out.setAttribute(name, v);
  }

  // Links can themselves be bold/italic/underlined via style.
  const inner = tag === 'A' ? applyInlineFormatting(childNodes, style, tag) : childNodes;
  inner.forEach((n) => out.appendChild(n));
  return [out];
}

/** Remove empty inline wrappers left behind after cleaning. */
function stripEmptyInlines(container: HTMLElement): void {
  container.querySelectorAll('strong, em, u, s, a, sub, sup, code').forEach((el) => {
    if (!el.textContent?.trim() && !el.querySelector('img, br')) el.remove();
  });
}

export function cleanPastedHtml(html: string): string {
  if (!html) return '';

  // String-level pre-clean: comments (incl. Word conditional blocks), XML
  // islands, style/script blocks, and namespaced tags like <o:p>.
  const pre = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<xml[\s\S]*?<\/xml>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<\/?[a-z]+:[^>]*>/gi, '');

  const doc = new DOMParser().parseFromString(pre, 'text/html');
  const container = document.createElement('div');
  doc.body.childNodes.forEach((n) => transformNode(n).forEach((c) => container.appendChild(c)));

  stripEmptyInlines(container);
  return container.innerHTML.trim();
}
