import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />

    <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <BlogSection />
        <AboutSection />
        <ContactSection />
      </div>
      <div className="w-full lg:w-72 flex-shrink-0 pt-16">
        <Sidebar />
      </div>
    </div>

    <Footer />
  </div>
);

export default Index;
