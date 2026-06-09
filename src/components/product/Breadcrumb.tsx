import Link from 'next/link';
import type { Product } from '@/types/product';

interface BreadcrumbProps {
  product: Pick<Product, 'fullName' | 'category'>;
}

const CATEGORY_LABELS: Record<string, string> = {
  'combi-ovens': 'Combi Ovens',
  'blast-chillers': 'Blast Chillers',
  'dishwashers': 'Dishwashers',
  'multifunctional-cooking': 'Multifunctional Cooking',
  'refrigeration': 'Refrigeration',
  'fabrication': 'SS Fabrication',
};

export default function Breadcrumb({ product }: BreadcrumbProps) {
  const categoryLabel = CATEGORY_LABELS[product.category] ?? product.category;

  return (
    <nav
      aria-label="breadcrumb"
      style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}
    >
      <div className="container">
        <ol
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.25rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <BreadcrumbItem position={1} name="Home" href="/" />
          <BreadcrumbSeparator />
          <BreadcrumbItem position={2} name="Products" href="/products/" />
          <BreadcrumbSeparator />
          <BreadcrumbItem
            position={3}
            name={categoryLabel}
            href={`/products/${product.category}/`}
          />
          <BreadcrumbSeparator />
          <li
            style={{
              fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
              fontSize: '0.8125rem',
              color: 'var(--text-dark)',
              fontWeight: 500,
            }}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            aria-current="page"
          >
            <meta itemProp="position" content="4" />
            <span itemProp="name">{product.fullName}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

function BreadcrumbItem({
  position,
  name,
  href,
}: {
  position: number;
  name: string;
  href: string;
}) {
  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <meta itemProp="position" content={String(position)} />
      <Link
        href={href}
        itemProp="item"
        style={{
          fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
          fontSize: '0.8125rem',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          transition: 'color 0.15s ease',
        }}
        className="link-hover-gold"
      >
        <span itemProp="name">{name}</span>
      </Link>
    </li>
  );
}

function BreadcrumbSeparator() {
  return (
    <li aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '0.75rem', lineHeight: 1 }}>
      ›
    </li>
  );
}
