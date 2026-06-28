import Link from 'next/link';
import type { Product } from '@/types/product';
import { categoryLabel as getCategoryLabel } from '@/lib/categories';

interface BreadcrumbProps {
  product: Pick<Product, 'fullName' | 'category'>;
}

export default function Breadcrumb({ product }: BreadcrumbProps) {
  const categoryLabel = getCategoryLabel(product.category);

  return (
    <nav aria-label="Breadcrumb" className="bc-nav">
      <div className="container">
        <ol
          className="bc-list"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {/* Home — icon only */}
          <li
            className="bc-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content="1" />
            <Link href="/" itemProp="item" className="bc-link bc-home-link" aria-label="Home">
              <svg
                width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span itemProp="name" className="sr-only">Home</span>
            </Link>
          </li>

          <Slash />

          <li
            className="bc-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content="2" />
            <Link href="/products/" itemProp="item" className="bc-link">
              <span itemProp="name">Products</span>
            </Link>
          </li>

          <Slash />

          <li
            className="bc-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content="3" />
            <Link href={`/products/${product.category}/`} itemProp="item" className="bc-link">
              <span itemProp="name">{categoryLabel}</span>
            </Link>
          </li>

          <Slash />

          {/* Current page — truncated */}
          <li
            className="bc-item bc-current"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            aria-current="page"
          >
            <meta itemProp="position" content="4" />
            <span itemProp="name" className="bc-current-name" title={product.fullName}>
              {product.fullName}
            </span>
          </li>
        </ol>
      </div>

      <style>{`
        .bc-nav {
          padding: 0.5rem 0;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
        }

        .bc-list {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          overflow: hidden;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0;
        }

        .bc-item {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .bc-current {
          flex-shrink: 1;
          overflow: hidden;
          min-width: 0;
        }

        .bc-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-muted);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.15s ease;
        }
        .bc-link:hover { color: var(--gold-deep); }

        .bc-home-link {
          color: var(--text-muted);
          padding: 0.125rem;
        }
        .bc-home-link:hover { color: var(--gold); }

        .bc-slash {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.6875rem;
          color: var(--border);
          padding: 0 0.4rem;
          flex-shrink: 0;
          user-select: none;
          line-height: 1;
        }

        .bc-current-name {
          font-family: var(--font-inter), Inter, ui-sans-serif, sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        /* Visually hidden but accessible */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </nav>
  );
}

function Slash() {
  return (
    <li aria-hidden="true" className="bc-slash">/</li>
  );
}
