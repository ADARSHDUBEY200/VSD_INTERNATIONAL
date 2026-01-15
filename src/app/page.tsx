import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import OurProducts from "@/components/Home/OurProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import TrustedIndustry from "@/components/Home/Trust";
import CertificationsCredentials from "@/components/Home/Certifications";
import IndustriesWeServe from "@/components/Home/WeServe";
import OurSolutions from "@/components/Home/OurSolutions";
import TurnkeyProjectExpertise from "@/components/Home/TrunkeyProjects";
import WhyVSDInternational from "@/components/Home/WhyVSD";
import ConsultationDesignSupport from "@/components/Home/Consultation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurProducts />
      <CertificationsCredentials />
      <AboutUs />
      <IndustriesWeServe />
      <OurSolutions />
      <TurnkeyProjectExpertise />
      <WhyVSDInternational />
      <ConsultationDesignSupport/>
      <TrustedIndustry />
      <CallToAction />
      <Footer />

    </>
  );
}
