import AnnouncementBar from '@/components/home/AnnouncementBar';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import WhatsAppFloat from '@/components/home/WhatsAppFloat';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <div className="pb-20 sm:pb-0">
        {children}
      </div>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
