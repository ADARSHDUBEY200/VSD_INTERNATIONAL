import { connectDB } from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';
import Blog from '@/lib/models/Blog';
import Product from '@/lib/models/Product';

export async function GET() {
  try {
    await connectDB();

    const [
      totalEnquiries,
      newEnquiries,
      totalBlogs,
      publishedBlogs,
      totalProducts,
      activeProducts,
      recentEnquiries,
      recentBlogs,
    ] = await Promise.all([
      Enquiry.countDocuments(),
      Enquiry.countDocuments({ status: 'new' }),
      Blog.countDocuments(),
      Blog.countDocuments({ status: 'published' }),
      Product.countDocuments(),
      Product.countDocuments({ status: 'active' }),
      Enquiry.find().sort({ createdAt: -1 }).limit(5).lean(),
      Blog.find().sort({ createdAt: -1 }).limit(5).select('title slug status createdAt').lean(),
    ]);

    return Response.json({
      stats: { totalEnquiries, newEnquiries, totalBlogs, publishedBlogs, totalProducts, activeProducts },
      recentEnquiries,
      recentBlogs,
    });
  } catch {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
