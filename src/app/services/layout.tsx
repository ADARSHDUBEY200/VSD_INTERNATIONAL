import AnnouncementBar from '@/components/home/AnnouncementBar';
import Navbar         from '@/components/home/Navbar';
import Footer         from '@/components/home/Footer';
import WhatsAppFloat  from '@/components/home/WhatsAppFloat';

/** Shared layout for all /services/* pages.
 *  Wraps children with the site chrome so individual service pages
 *  remain focused on their own content. */
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
