export interface Author {
  id: string;
  name: string;
  jobTitle: string;
  bio: string;
  credentials: string;
  photo: string;
  linkedIn: string;
  authorPage: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  categoryLabel: string;
  pillarPage: string;
  pillarLabel: string;
  title: string;
  headline: string;         // ≤60 chars for <title>
  metaDescription: string;  // ≤155 chars
  excerpt: string;
  readTime: string;
  wordCount: number;
  datePublished: string;
  dateModified: string;
  author: Author;
  featuredImage: string;
  featuredImageAlt: string;
  featuredImageWidth: number;
  featuredImageHeight: number;
  keywords: string[];
  tags: string[];
}

export const AUTHORS: Record<string, Author> = {
  rajesh_kumar: {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    jobTitle: 'Founder & Commercial Kitchen Consultant, VSD International',
    bio: 'Rajesh Kumar founded VSD International in 2019 and has since designed and installed commercial kitchens for over 400 projects across India, including Hyatt, Radisson, ITC Hotels, and NABH-accredited hospitals. With 7+ years in commercial kitchen planning, he brings first-hand knowledge of equipment selection, layout optimisation, and compliance requirements.',
    credentials: 'B.E. Mechanical Engineering · 7+ years in commercial kitchen design · 400+ projects delivered',
    photo: '/images/authors/rajesh-kumar.webp',
    linkedIn: 'https://www.linkedin.com/in/rajesh-kumar-vsd-international',
    authorPage: 'https://vsdinternational.com/about/our-team/#rajesh-kumar',
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cloud-kitchen-setup-cost-india-2026',
    category: 'cloud-kitchen',
    categoryLabel: 'Cloud Kitchen',
    pillarPage: '/services/cloud-kitchen-setup/',
    pillarLabel: 'Cloud Kitchen Setup & Equipment',
    title: 'Cloud Kitchen Setup Cost in India (2026): Real Price Breakdown',
    headline: 'Cloud Kitchen Setup Cost India 2026 | VSD International',
    metaDescription: 'Real cloud kitchen setup cost in India 2026: ₹5L–₹45L. Equipment list, civil work, licensing, and VSD project figures for Zomato & Swiggy operators.',
    excerpt: 'Setting up a cloud kitchen in India costs ₹5–₹45 lakhs depending on brand count, order volume, and cuisine type. This guide breaks down every cost component with real project figures from VSD International installations.',
    readTime: '11 min read',
    wordCount: 2800,
    datePublished: '2026-06-01',
    dateModified: '2026-06-07',
    author: AUTHORS.rajesh_kumar,
    featuredImage: '/images/blog/cloud-kitchen-cost-india-2026.webp',
    featuredImageAlt: 'Commercial cloud kitchen setup with stainless steel cooking equipment — VSD International installation, Delhi NCR, 2026',
    featuredImageWidth: 1200,
    featuredImageHeight: 630,
    keywords: [
      'cloud kitchen setup cost India',
      'cloud kitchen equipment cost 2026',
      'how much does cloud kitchen cost India',
      'ghost kitchen setup budget India',
      'dark kitchen equipment price list',
    ],
    tags: ['cloud kitchen', 'cost guide', 'equipment list', 'Zomato', 'Swiggy'],
  },
  {
    slug: 'cloud-kitchen-equipment-checklist-india',
    category: 'cloud-kitchen',
    categoryLabel: 'Cloud Kitchen',
    pillarPage: '/services/cloud-kitchen-setup/',
    pillarLabel: 'Cloud Kitchen Setup & Equipment',
    title: 'Cloud Kitchen Equipment Checklist India (2026): What You Actually Need',
    headline: 'Cloud Kitchen Equipment Checklist India 2026',
    metaDescription: 'Complete cloud kitchen equipment checklist for India: cooking, refrigeration, food prep, exhaust & packaging. Download VSD\'s free PDF for Zomato/Swiggy compliance.',
    excerpt: 'Starting a cloud kitchen? This checklist covers every piece of equipment you need — from commercial burners to label printers — with cost estimates and brand recommendations.',
    readTime: '8 min read',
    wordCount: 1900,
    datePublished: '2026-05-10',
    dateModified: '2026-06-01',
    author: AUTHORS.rajesh_kumar,
    featuredImage: '/images/blog/cloud-kitchen-equipment-checklist.webp',
    featuredImageAlt: 'Cloud kitchen equipment checklist — cooking range, refrigerator, exhaust hood arranged in an operational cloud kitchen in Delhi',
    featuredImageWidth: 1200,
    featuredImageHeight: 630,
    keywords: ['cloud kitchen equipment checklist', 'cloud kitchen equipment list India'],
    tags: ['cloud kitchen', 'equipment checklist', 'buying guide'],
  },
  {
    slug: 'fssai-licence-cloud-kitchen-india',
    category: 'cloud-kitchen',
    categoryLabel: 'Cloud Kitchen',
    pillarPage: '/services/cloud-kitchen-setup/',
    pillarLabel: 'Cloud Kitchen Setup & Equipment',
    title: 'FSSAI Licence for Cloud Kitchen India: Step-by-Step 2026 Guide',
    headline: 'FSSAI Licence for Cloud Kitchen India 2026 Guide',
    metaDescription: 'FSSAI licence for cloud kitchen in India: which type you need, documents, fees, and timeline. Plus Zomato/Swiggy kitchen inspection checklist.',
    excerpt: 'Every cloud kitchen in India requires FSSAI registration or state licence. Here\'s exactly which licence you need, the documents required, fees, and how to pass the Zomato/Swiggy inspection.',
    readTime: '7 min read',
    wordCount: 1700,
    datePublished: '2026-04-15',
    dateModified: '2026-05-20',
    author: AUTHORS.rajesh_kumar,
    featuredImage: '/images/blog/fssai-cloud-kitchen-licence.webp',
    featuredImageAlt: 'FSSAI licence documents for a cloud kitchen in India — compliance guide by VSD International',
    featuredImageWidth: 1200,
    featuredImageHeight: 630,
    keywords: ['FSSAI licence cloud kitchen India', 'cloud kitchen licence India'],
    tags: ['cloud kitchen', 'compliance', 'FSSAI', 'licensing'],
  },
  {
    slug: 'hotel-kitchen-equipment-guide-india-2026',
    category: 'hotel-kitchen',
    categoryLabel: 'Hotel Kitchen',
    pillarPage: '/services/hotel-kitchen-equipment/',
    pillarLabel: 'Hotel Kitchen Equipment',
    title: 'Hotel Commercial Kitchen Equipment Guide India (2026)',
    headline: 'Hotel Kitchen Equipment Guide India 2026 | VSD',
    metaDescription: 'Complete hotel kitchen equipment guide for India: categories, brands, 5-star vs boutique requirements, and VSD International project costs from ₹18L–₹2Cr.',
    excerpt: 'Planning a hotel kitchen in India? This guide covers every equipment category, brand recommendations, typical budgets, and what separates 5-star from boutique hotel kitchen setups.',
    readTime: '12 min read',
    wordCount: 3100,
    datePublished: '2026-05-20',
    dateModified: '2026-06-01',
    author: AUTHORS.rajesh_kumar,
    featuredImage: '/images/blog/hotel-kitchen-equipment-guide.webp',
    featuredImageAlt: '5-star hotel commercial kitchen with Rational combi ovens and VSD stainless steel fabrication — Hyatt project, Delhi NCR',
    featuredImageWidth: 1200,
    featuredImageHeight: 630,
    keywords: ['hotel kitchen equipment India', 'commercial kitchen for hotels India'],
    tags: ['hotel kitchen', 'equipment guide', '5-star', 'buying guide'],
  },
  {
    slug: 'hospital-kitchen-nabh-compliance-india',
    category: 'hospital-kitchen',
    categoryLabel: 'Hospital Kitchen',
    pillarPage: '/services/hospital-kitchen-equipment/',
    pillarLabel: 'Hospital Kitchen Equipment',
    title: 'NABH-Compliant Hospital Kitchen Equipment India (2026)',
    headline: 'NABH Hospital Kitchen Equipment India 2026',
    metaDescription: 'NABH-compliant hospital kitchen equipment requirements for India: mandatory items, food safety standards, dietary separation, and VSD project costs from ₹25L–₹1.5Cr.',
    excerpt: 'NABH-accredited hospitals require specific kitchen equipment standards. Here\'s the complete guide to hospital kitchen equipment, NABH food safety requirements, and what VSD International installs.',
    readTime: '10 min read',
    wordCount: 2500,
    datePublished: '2026-04-01',
    dateModified: '2026-05-15',
    author: AUTHORS.rajesh_kumar,
    featuredImage: '/images/blog/nabh-hospital-kitchen-equipment.webp',
    featuredImageAlt: 'NABH-compliant hospital kitchen with stainless steel dietary equipment — VSD International installation, multi-specialty hospital, Delhi NCR',
    featuredImageWidth: 1200,
    featuredImageHeight: 630,
    keywords: ['NABH hospital kitchen equipment', 'hospital kitchen equipment India'],
    tags: ['hospital kitchen', 'NABH', 'compliance', 'healthcare'],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export const CATEGORIES: Record<string, { label: string; description: string; pillarPage: string; pillarLabel: string; intro: string }> = {
  'cloud-kitchen': {
    label: 'Cloud Kitchen Guides',
    description: 'Setup costs, equipment checklists, licensing, and operations for cloud kitchens, dark kitchens, and ghost kitchens in India.',
    pillarPage: '/services/cloud-kitchen-setup/',
    pillarLabel: 'Cloud Kitchen Setup & Equipment →',
    intro: `India's cloud kitchen market crossed ₹40,000 crore in 2025 and is growing at 12% annually — driven by Zomato and Swiggy's expansion into Tier 2 cities and the rise of multi-brand delivery operators. Setting up a cloud kitchen correctly from day one is the difference between a profitable operation and a costly restart. These guides are written from 15+ years of real cloud kitchen installations across Delhi NCR, Mumbai, and Bengaluru — not theory. Whether you need to know the exact equipment list, the current FSSAI licensing rules, or the realistic cost to set up a 3-brand ghost kitchen, you'll find figures and facts here that no competitor's blog carries. Every article links back to VSD International's cloud kitchen setup service for operators ready to move from research to installation.`,
  },
  'hotel-kitchen': {
    label: 'Hotel Kitchen Guides',
    description: 'Equipment selection, 5-star to boutique hotel kitchen planning, Rational combi ovens, and turnkey kitchen project guides for Indian hotels.',
    pillarPage: '/services/hotel-kitchen-equipment/',
    pillarLabel: 'Hotel Kitchen Equipment & Setup →',
    intro: `Hotel kitchen planning in India operates in a unique environment — FSSAI compliance, FIRE NOC requirements, 24-hour operation demands, and guest expectations that vary wildly between a 5-star and a boutique property. VSD International has delivered hotel kitchen projects for Hyatt Regency, Radisson Blu, Crowne Plaza, and ITC Hotels — and the insights in these guides come directly from those installs, not from manufacturer brochures. Expect specific equipment recommendations, actual project budgets (from ₹18 lakhs for a 20-room boutique to ₹2 crore for a full-service 5-star kitchen), and the decision frameworks procurement teams actually use when evaluating proposals.`,
  },
  'hospital-kitchen': {
    label: 'Hospital Kitchen Guides',
    description: 'NABH-compliant hospital kitchen equipment, dietary standards, FSSAI rules for healthcare, and turnkey hospital kitchen project guides.',
    pillarPage: '/services/hospital-kitchen-equipment/',
    pillarLabel: 'Hospital Kitchen Equipment →',
    intro: `Hospital kitchen compliance in India is among the most complex of any food service environment — NABH accreditation standards, FSSAI food safety requirements, dietary separation for therapeutic diets, HACCP protocols, and infection control standards all intersect in the kitchen. VSD International has equipped hospital kitchens for multi-specialty hospitals, NABH-accredited surgical centres, and corporate hospital chains in Delhi, Gurugram, and Noida. These guides translate complex compliance requirements into practical equipment specifications, giving hospital procurement teams and kitchen managers the exact information they need to plan, specify, and install a compliant facility.`,
  },
};
