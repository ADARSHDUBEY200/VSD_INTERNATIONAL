import AnnouncementBar from '@/components/home/AnnouncementBar';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import WhatsAppFloat from '@/components/home/WhatsAppFloat';
import MobileFooterCTA from '@/components/home/MobileFooterCTA';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main id="main-content" className="pb-20 sm:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileFooterCTA />
    </>
  );
}
