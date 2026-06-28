import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;

  // Images — 1 main + up to 4 child/gallery images
  mainImage: string;
  childImages: string[];

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

const BlogSchema = new Schema<IBlog>(
  {
    title:    { type: String, required: true, trim: true },
    slug:     { type: String, required: true, unique: true, trim: true, lowercase: true },
    category: { type: String, required: true, trim: true },
    excerpt:  { type: String, required: true, trim: true },
    content:  { type: String, required: true },

    mainImage:   { type: String, default: '' },
    childImages: {
      type: [String],
      default: [],
      validate: {
        validator: (v: string[]) => v.length <= 4,
        message: 'A blog post can have at most 4 child images.',
      },
    },

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
