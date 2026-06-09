import mongoose, { Schema, Document } from 'mongoose';

export interface ISpec {
  key: string;
  value: string;
}

export interface IProduct extends Document {
  name: string;
  slug: string;
  category: string;
  brand: string;
  tagline: string;
  description: string;
  images: string[];
  priceRange: string;
  features: string[];
  specifications: ISpec[];
  status: 'active' | 'inactive';
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SpecSchema = new Schema<ISpec>({ key: String, value: String }, { _id: false });

const ProductSchema = new Schema<IProduct>(
  {
    name:           { type: String, required: true, trim: true },
    slug:           { type: String, required: true, unique: true, trim: true, lowercase: true },
    category:       { type: String, required: true, trim: true },
    brand:          { type: String, trim: true, default: '' },
    tagline:        { type: String, trim: true, default: '' },
    description:    { type: String, default: '' },
    images:         [{ type: String }],
    priceRange:     { type: String, trim: true, default: '' },
    features:       [{ type: String }],
    specifications: [SpecSchema],
    status:         { type: String, enum: ['active', 'inactive'], default: 'active' },
    featured:       { type: Boolean, default: false },
  },
  { timestamps: true }
);

ProductSchema.index({ slug: 1 });
ProductSchema.index({ category: 1, status: 1 });

const Product = mongoose.models.Product ?? mongoose.model<IProduct>('Product', ProductSchema);
export default Product;
