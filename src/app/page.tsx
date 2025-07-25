import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  );
}
