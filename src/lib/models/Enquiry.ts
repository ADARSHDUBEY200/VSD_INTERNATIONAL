import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  email?: string;
  phone: string;
  source: 'home_form' | 'contact_form' | 'lp_commercial_kitchen' | 'lead_popup' | 'enquiry_modal' | 'cta_banner';
  company?: string;
  city?: string;
  service?: string;
  budget?: string;
  message?: string;
  status: 'new' | 'in_progress' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, trim: true, lowercase: true },
    phone:   { type: String, required: true, trim: true },
    source:  { type: String, enum: ['home_form', 'contact_form', 'lp_commercial_kitchen', 'lead_popup', 'enquiry_modal', 'cta_banner'], default: 'home_form' },
    company: { type: String, trim: true },
    city:    { type: String, trim: true },
    service: { type: String, trim: true },
    budget:  { type: String, trim: true },
    message: { type: String, trim: true },
    status:  { type: String, enum: ['new', 'in_progress', 'resolved'], default: 'new' },
  },
  { timestamps: true }
);

const Enquiry = mongoose.models.Enquiry ?? mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
export default Enquiry;
