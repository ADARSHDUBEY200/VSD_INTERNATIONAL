import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IKeyFact { label: string; value: string; }
export interface ISpec { name: string; value: string; }
export interface IFeature { title: string; description: string; }
export interface IBestForItem { industry: string; description: string; }
export interface ITechnicalDetail { label: string; value: string; }
export interface IWhyVSDPoint { point: string; detail: string; }
export interface IComparisonRow { attribute: string; thisModel: string; alternative1: string; alternative2: string; }
export interface IComparisonModel { name: string; slug: string; }
export interface IProjectProof { client: string; city: string; scope: string; year: string; }
export interface IReview { name: string; company: string; rating: number; text: string; date: string; }
export interface IFAQ { question: string; answer: string; }

export interface IProduct extends Document {
  // Identity
  fullName: string;
  modelNumber: string;
  slug: string;
  category: string;
  brand: string;
  tagline: string;

  // Images — 1 main + up to 4 child/gallery images
  mainImage: string;
  childImages: string[];

  // Hero / commercial
  keyFacts: IKeyFact[];
  priceContext: string;
  priceMin?: number;
  priceMax?: number;
  leadTime: string;
  whatsappMessage: string;

  // Narrative content
  overview: string;
  description: string[];

  // Specs & features
  specs: ISpec[];
  features: IFeature[];
  bestFor: IBestForItem[];
  technical: ITechnicalDetail[];
  compliance: string[];

  // Trust & sales sections
  whyVSD: IWhyVSDPoint[];
  comparison: IComparisonRow[];
  comparisonModels: IComparisonModel[];
  projectProof: IProjectProof[];
  reviews: IReview[];
  faq: IFAQ[];
  relatedProducts: Types.ObjectId[];

  // SEO — controls <title>/<meta description> and OpenGraph
  metaTitle: string;
  metaDescription: string;

  // Schema.org JSON-LD overrides — falls back to fullName/overview when empty
  schemaTitle: string;
  schemaDescription: string;

  status: 'active' | 'inactive';
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const KeyFactSchema        = new Schema<IKeyFact>({ label: String, value: String }, { _id: false });
const SpecSchema           = new Schema<ISpec>({ name: String, value: String }, { _id: false });
const FeatureSchema        = new Schema<IFeature>({ title: String, description: String }, { _id: false });
const BestForSchema        = new Schema<IBestForItem>({ industry: String, description: String }, { _id: false });
const TechnicalSchema      = new Schema<ITechnicalDetail>({ label: String, value: String }, { _id: false });
const WhyVSDSchema         = new Schema<IWhyVSDPoint>({ point: String, detail: String }, { _id: false });
const ComparisonRowSchema  = new Schema<IComparisonRow>(
  { attribute: String, thisModel: String, alternative1: String, alternative2: String },
  { _id: false }
);
const ComparisonModelSchema = new Schema<IComparisonModel>({ name: String, slug: String }, { _id: false });
const ProjectProofSchema   = new Schema<IProjectProof>(
  { client: String, city: String, scope: String, year: String },
  { _id: false }
);
const ReviewSchema = new Schema<IReview>(
  {
    name:    { type: String, required: true, trim: true },
    company: { type: String, trim: true, default: '' },
    rating:  { type: Number, min: 1, max: 5, required: true },
    text:    { type: String, required: true },
    date:    { type: String, default: '' },
  },
  { _id: false }
);
const FAQSchema = new Schema<IFAQ>({ question: String, answer: String }, { _id: false });

const ProductSchema = new Schema<IProduct>(
  {
    fullName:    { type: String, required: true, trim: true },
    modelNumber: { type: String, trim: true, default: '' },
    slug:        { type: String, required: true, unique: true, trim: true, lowercase: true },
    category: { type: String, required: true, trim: true },
    brand:    { type: String, trim: true, default: '' },
    tagline:  { type: String, trim: true, default: '' },

    mainImage:   { type: String, default: '' },
    childImages: {
      type: [String],
      default: [],
      validate: {
        validator: (v: string[]) => v.length <= 4,
        message: 'A product can have at most 4 child images.',
      },
    },

    keyFacts:     [KeyFactSchema],
    priceContext: { type: String, trim: true, default: '' },
    priceMin:     { type: Number },
    priceMax:     { type: Number },
    leadTime:     { type: String, trim: true, default: '' },
    whatsappMessage: { type: String, default: '' },

    overview:    { type: String, default: '' },
    description: [{ type: String }],

    specs:      [SpecSchema],
    features:   [FeatureSchema],
    bestFor:    [BestForSchema],
    technical:  [TechnicalSchema],
    compliance: [{ type: String }],

    whyVSD:           [WhyVSDSchema],
    comparison:       [ComparisonRowSchema],
    comparisonModels: [ComparisonModelSchema],
    projectProof:     [ProjectProofSchema],
    reviews:          [ReviewSchema],
    faq:              [FAQSchema],
    relatedProducts:  [{ type: Schema.Types.ObjectId, ref: 'Product' }],

    metaTitle:       { type: String, trim: true, default: '' },
    metaDescription: { type: String, trim: true, default: '' },
    schemaTitle:       { type: String, trim: true, default: '' },
    schemaDescription: { type: String, trim: true, default: '' },

    status:   { type: String, enum: ['active', 'inactive'], default: 'active' },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

ProductSchema.index({ slug: 1 });
ProductSchema.index({ category: 1, status: 1 });

const Product = mongoose.models.Product ?? mongoose.model<IProduct>('Product', ProductSchema);
export default Product;
