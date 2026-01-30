import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CatalogSection } from "@/components/CatalogSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Smooth scroll to section
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main>
        <section id="home">
          <HeroSection onNavigate={handleTabChange} />
        </section>
        
        <section id="catalog">
          <CatalogSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
