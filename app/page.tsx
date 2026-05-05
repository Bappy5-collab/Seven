import AlertBanner from "@/components/AlertBanner";
import DrivingDemand from "@/components/DrivingDemand";
import FeaturedWork from "@/components/FeaturedWork";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import InternationalSection from "@/components/InternationalSection";
import CaseStudies from "@/components/CaseStudies";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesGrid";
import LegacySection from "@/components/LegacySection";

export default function Home() {
  return (
    <>
      <AlertBanner />
      {/* Navbar sits absolute inside the hero wrapper — both get side margin */}
      <div style={{ padding: "8px 12px 0 12px", position: "relative" }}>
        <Navbar />
        <HeroSection />
      </div>
      <main>
        <DrivingDemand/>
        <FeaturedWork />
        <ServicesSection />
        <LegacySection/>
         
        <CaseStudies />
        <AboutSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
