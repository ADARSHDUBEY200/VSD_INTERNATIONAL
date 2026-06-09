import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
  author: string;
  status: 'draft' | 'published';
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title:           { type: String, required: true, trim: true },
    slug:            { type: String, required: true, unique: true, trim: true, lowercase: true },
    category:        { type: String, required: true, trim: true },
    excerpt:         { type: String, required: true, trim: true },
    content:         { type: String, required: true },
    featuredImage:   { type: String, default: '' },
    metaTitle:       { type: String, trim: true },
    metaDescription: { type: String, trim: true },
    author:          { type: String, default: 'VSD International', trim: true },
    status:          { type: String, enum: ['draft', 'published'], default: 'draft' },
    publishedAt:     { type: Date },
  },
  { timestamps: true }
);

BlogSchema.index({ slug: 1 });
BlogSchema.index({ status: 1, publishedAt: -1 });

const Blog = mongoose.models.Blog ?? mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
