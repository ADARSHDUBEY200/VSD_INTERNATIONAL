'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import {
  Bold, Italic, Underline, Heading2, Heading3,
  List, ListOrdered, Link2, Image as ImageIcon,
  AlignLeft, Quote, Eye, EyeOff,
} from 'lucide-react';
import { cleanPastedHtml } from '@/lib/sanitizeWordHtml';

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  minHeight?: number;
}

type ToolbarBtn = {
  icon: React.ReactNode;
  title: string;
  action: () => void;
};

export default function RichEditor({ value, onChange, placeholder = 'Start writing…', minHeight = 420 }: Props) {
  const editorRef = useRef<HTMLDivElement>(null);
  const skipSync = useRef(false); // true when the latest `value` came from our own edit
  const [preview, setPreview] = useState(false);

  // Keep the editable DOM in sync with `value` for EXTERNAL changes — draft
  // restore/discard, or returning from preview. Changes originating from the
  // user's own typing/toolbar/paste set `skipSync`, so we don't rewrite the DOM
  // (which would reset the caret or drop the freshest keystrokes mid-typing).
  useEffect(() => {
    if (preview) return;
    if (skipSync.current) { skipSync.current = false; return; }
    const el = editorRef.current;
    if (el && el.innerHTML !== (value || '')) {
      el.innerHTML = value || '';
    }
  }, [value, preview]);

  const emitChange = useCallback(() => {
    skipSync.current = true;
    onChange(editorRef.current?.innerHTML ?? '');
  }, [onChange]);

  const exec = useCallback((cmd: string, val?: string) => {
    if (preview) return;
    editorRef.current?.focus();
    document.execCommand(cmd, false, val ?? undefined);
    emitChange();
  }, [emitChange, preview]);

  const insertHTML = useCallback((html: string) => {
    if (preview) return;
    editorRef.current?.focus();
    document.execCommand('insertHTML', false, html);
    emitChange();
  }, [emitChange, preview]);

  const promptLink = useCallback(() => {
    const url = window.prompt('Enter URL:', 'https://');
    if (url) exec('createLink', url);
  }, [exec]);

  const promptImage = useCallback(() => {
    const url = window.prompt('Enter image URL:');
    if (url) insertHTML(`<img src="${url}" alt="" style="max-width:100%;border-radius:8px;margin:0.5rem 0;" />`);
  }, [insertHTML]);

  const BtnStyle = (active?: boolean): React.CSSProperties => ({
    background: active ? '#DBEAFE' : 'transparent',
    border: 'none',
    borderRadius: 6,
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: active ? '#1D4ED8' : '#475569',
    transition: 'background 0.1s',
  });

  const tools: ToolbarBtn[] = [
    { icon: <Bold size={15} />,         title: 'Bold',            action: () => exec('bold') },
    { icon: <Italic size={15} />,       title: 'Italic',          action: () => exec('italic') },
    { icon: <Underline size={15} />,    title: 'Underline',       action: () => exec('underline') },
    { icon: <Heading2 size={15} />,     title: 'Heading 2',       action: () => exec('formatBlock', 'h2') },
    { icon: <Heading3 size={15} />,     title: 'Heading 3',       action: () => exec('formatBlock', 'h3') },
    { icon: <AlignLeft size={15} />,    title: 'Paragraph',       action: () => exec('formatBlock', 'p') },
    { icon: <Quote size={15} />,        title: 'Blockquote',      action: () => exec('formatBlock', 'blockquote') },
    { icon: <List size={15} />,         title: 'Bullet List',     action: () => exec('insertUnorderedList') },
    { icon: <ListOrdered size={15} />,  title: 'Numbered List',   action: () => exec('insertOrderedList') },
    { icon: <Link2 size={15} />,        title: 'Insert Link',     action: promptLink },
    { icon: <ImageIcon size={15} />,    title: 'Insert Image URL',action: promptImage },
  ];

  return (
    <div style={{ border: '1px solid #CBD5E1', borderRadius: 10, overflow: 'hidden', background: 'white' }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 2,
        padding: '0.5rem 0.625rem',
        borderBottom: '1px solid #E2E8F0',
        background: '#F8FAFC',
        flexWrap: 'wrap',
      }}>
        {tools.map((t, i) => (
          <button
            key={i}
            type="button"
            title={t.title}
            onMouseDown={e => { e.preventDefault(); t.action(); }}
            style={BtnStyle()}
          >
            {t.icon}
          </button>
        ))}

        <div style={{ marginLeft: 'auto' }}>
          <button
            type="button"
            title={preview ? 'Back to editor' : 'Preview'}
            onClick={() => setPreview(p => !p)}
            style={BtnStyle(preview)}
          >
            {preview ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        </div>
      </div>

      {/* Editor / Preview */}
      {preview ? (
        <div
          style={{ minHeight, padding: '1rem 1.25rem', lineHeight: 1.75, color: '#1E293B', fontSize: 14 }}
          dangerouslySetInnerHTML={{ __html: value || '<p style="color:#94A3B8">Nothing to preview yet.</p>' }}
          className="rich-preview"
        />
      ) : (
        <div
          ref={editorRef}
          className="rich-editor-area"
          contentEditable
          suppressContentEditableWarning
          onInput={emitChange}
          onPaste={e => {
            e.preventDefault();
            const html = e.clipboardData.getData('text/html');
            const cleaned = html ? cleanPastedHtml(html) : '';
            if (cleaned) {
              document.execCommand('insertHTML', false, cleaned);
            } else {
              // No rich clipboard data — fall back to plain text.
              document.execCommand('insertText', false, e.clipboardData.getData('text/plain'));
            }
            emitChange();
          }}
          data-placeholder={placeholder}
          style={{
            minHeight,
            padding: '1rem 1.25rem',
            outline: 'none',
            lineHeight: 1.75,
            color: '#1E293B',
            fontSize: 14,
            wordBreak: 'break-word',
          }}
        />
      )}

      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #94A3B8;
          pointer-events: none;
        }
        .rich-editor-area h1 { font-size: 1.5rem; font-weight: 700; margin: 1rem 0 0.5rem; }
        .rich-editor-area h2 { font-size: 1.375rem; font-weight: 700; margin: 1rem 0 0.5rem; }
        .rich-editor-area h3 { font-size: 1.125rem; font-weight: 700; margin: 0.875rem 0 0.375rem; }
        .rich-editor-area h4, .rich-editor-area h5, .rich-editor-area h6 { font-size: 1rem; font-weight: 700; margin: 0.75rem 0 0.375rem; }
        .rich-editor-area ul { list-style: disc; padding-left: 1.5rem; margin: 0.5rem 0; }
        .rich-editor-area ol { list-style: decimal; padding-left: 1.5rem; margin: 0.5rem 0; }
        .rich-editor-area blockquote { border-left: 3px solid #2563EB; padding-left: 1rem; color: #475569; font-style: italic; margin: 0.75rem 0; }
        .rich-editor-area a { color: #2563EB; text-decoration: underline; }
        .rich-editor-area img { max-width: 100%; border-radius: 8px; margin: 0.5rem 0; }
        .rich-editor-area table, .rich-preview table { border-collapse: collapse; width: 100%; margin: 0.75rem 0; font-size: 13px; }
        .rich-editor-area th, .rich-editor-area td, .rich-preview th, .rich-preview td { border: 1px solid #CBD5E1; padding: 0.4rem 0.6rem; text-align: left; vertical-align: top; }
        .rich-editor-area th, .rich-preview th { background: #F1F5F9; font-weight: 700; }
        .rich-preview h1 { font-size: 1.5rem; font-weight: 700; margin: 1rem 0 0.5rem; }
        .rich-preview h2 { font-size: 1.375rem; font-weight: 700; margin: 1rem 0 0.5rem; }
        .rich-preview h3 { font-size: 1.125rem; font-weight: 700; margin: 0.875rem 0 0.375rem; }
        .rich-preview p  { margin: 0.5rem 0; }
        .rich-preview ul { list-style: disc; padding-left: 1.5rem; margin: 0.5rem 0; }
        .rich-preview ol { list-style: decimal; padding-left: 1.5rem; margin: 0.5rem 0; }
        .rich-preview blockquote {
          border-left: 3px solid #2563EB; padding-left: 1rem;
          color: #475569; font-style: italic; margin: 0.75rem 0;
        }
        .rich-preview a { color: #2563EB; text-decoration: underline; }
        .rich-preview strong { font-weight: 700; }
        .rich-preview em { font-style: italic; }
      `}</style>
    </div>
  );
}
