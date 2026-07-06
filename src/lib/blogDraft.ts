/**
 * Local Storage draft persistence for the Blog CMS editor.
 *
 * Keys: `blog-create-draft` for a new post, `blog-edit-{id}` per existing post
 * so drafts for different blogs never collide. All access is wrapped in
 * try/catch so a disabled/full localStorage degrades gracefully.
 */

export interface StoredDraft<T> {
  data: T;
  savedAt: number;
}

export function blogDraftKey(id?: string): string {
  return id ? `blog-edit-${id}` : 'blog-create-draft';
}

export function loadDraft<T>(key: string): StoredDraft<T> | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && 'data' in parsed) {
      return parsed as StoredDraft<T>;
    }
    return null;
  } catch {
    return null;
  }
}

/** Returns false if the write failed (e.g. quota exceeded / storage disabled). */
export function saveDraft<T>(key: string, data: T): boolean {
  if (typeof window === 'undefined') return false;
  try {
    window.localStorage.setItem(key, JSON.stringify({ data, savedAt: Date.now() } satisfies StoredDraft<T>));
    return true;
  } catch {
    return false;
  }
}

export function clearDraft(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}
