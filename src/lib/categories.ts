export interface CategoryDef {
  slug: string;
  label: string;
}

// Single source of truth for product categories — the `slug` is what's stored on
// Product.category and what appears in the /products/[category]/[slug] URL.
export const CATEGORIES: CategoryDef[] = [
  { slug: 'combi-ovens', label: 'Combi Ovens' },
  { slug: 'cooking-ranges', label: 'Cooking Ranges' },
  { slug: 'bakery-equipment', label: 'Bakery Equipment' },
  { slug: 'refrigeration', label: 'Refrigeration' },
  { slug: 'blast-chillers', label: 'Blast Chillers' },
  { slug: 'preparation-equipment', label: 'Preparation Equipment' },
  { slug: 'multifunctional-cooking', label: 'Multifunctional Cooking' },
  { slug: 'exhaust-ventilation', label: 'Exhaust & Ventilation' },
  { slug: 'custom-fabrication', label: 'Custom Fabrication' },
  { slug: 'dishwashers', label: 'Dishwashers' },
  { slug: 'international-brands', label: 'International Brands' },
];

export const CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  CATEGORIES.map(c => [c.slug, c.label])
);

export function categoryLabel(slug: string): string {
  return CATEGORY_LABELS[slug] ?? slug;
}
