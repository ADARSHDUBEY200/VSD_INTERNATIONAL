import mongoose, { Schema, Document } from 'mongoose';

export interface IFaq {
  question: string;
  answer: string;
}

export interface IRecommendation {
  image: string;
  title: string;
  url: string;
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;

  // Answer-first summary shown near the top of the post.
  quickAnswer: string;

  // Bulleted highlights shown near the top of the post.
  keyTakeaways: string[];

  // Single hero image + its alt text.
  mainImage: string;
  mainImageAlt: string;

  // Dynamic FAQ list — rendered on the post and emitted as FAQPage JSON-LD.
  faqs: IFaq[];

  // "Our Recommendations" product cards shown after the content.
  recommendations: IRecommendation[];

  // SEO — controls <title>/<meta description> and OpenGraph
  metaTitle: string;
  metaDescription: string;

  // Schema.org JSON-LD overrides — falls back to title/excerpt when empty
  schemaTitle: string;
  schemaDescription: string;

  author: string;
  status: 'draft' | 'published';
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const FaqSchema = new Schema<IFaq>(
  {
    question: { type: String, trim: true, default: '' },
    answer:   { type: String, trim: true, default: '' },
  },
  { _id: false }
);

const RecommendationSchema = new Schema<IRecommendation>(
  {
    image: { type: String, trim: true, default: '' },
    title: { type: String, trim: true, default: '' },
    url:   { type: String, trim: true, default: '' },
  },
  { _id: false }
);

const BlogSchema = new Schema<IBlog>(
  {
    title:    { type: String, required: true, trim: true },
    slug:     { type: String, required: true, unique: true, trim: true, lowercase: true },
    category: { type: String, required: true, trim: true },
    excerpt:  { type: String, required: true, trim: true },
    content:  { type: String, required: true },

    quickAnswer:  { type: String, default: '' },
    keyTakeaways: { type: [String], default: [] },

    mainImage:    { type: String, default: '' },
    mainImageAlt: { type: String, trim: true, default: '' },

    faqs:            { type: [FaqSchema], default: [] },
    recommendations: { type: [RecommendationSchema], default: [] },

    metaTitle:       { type: String, trim: true, default: '' },
    metaDescription: { type: String, trim: true, default: '' },
    schemaTitle:       { type: String, trim: true, default: '' },
    schemaDescription: { type: String, trim: true, default: '' },

    author:      { type: String, default: 'VSD International', trim: true },
    status:      { type: String, enum: ['draft', 'published'], default: 'draft' },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

BlogSchema.index({ slug: 1 });
BlogSchema.index({ status: 1, publishedAt: -1 });

const Blog = mongoose.models.Blog ?? mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
