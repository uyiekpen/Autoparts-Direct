"use client";
import { useState } from "react";

import Header from "@/components/layout/header";
import HeroSection from "@/components/layout/hero-section";
import HowItWorksSection from "@/components/layout/how-it-works-section";
import EmailWaitlistPopup from "@/components/ui/email-waitlist-popup";
import FeaturesSection from "@/components/layout/features-section";
import { ProductsSection } from "@/components/layout/products-section";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { CTASection } from "@/components/layout/cta-section";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
const [emailWaitlistOpen, setEmailWaitlistOpen] = useState(false);
const [selectedPartName, setSelectedPartName] = useState("");

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleFindNowClick = (partName: string) => {
  setSelectedPartName(partName);
  setEmailWaitlistOpen(true);
};

const handleJoinWaitlist = () => {
  setSelectedPartName("General Waitlist");
  setEmailWaitlistOpen(true);
};

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        // scrollToSection={scrollToSection}
        onJoinWaitlist={handleJoinWaitlist}
      />
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <ProductsSection onJoinWaitlist={handleJoinWaitlist} />

      <FeaturesSection onJoinWaitlist={handleJoinWaitlist} />
      {/* <HowItWorksSection /> */}
      <TestimonialsSection />
      {/* <CTASection onJoinWaitlist={handleJoinWaitlist} /> */}
      <Footer />

      <EmailWaitlistPopup
        isOpen={emailWaitlistOpen}
        onClose={() => setEmailWaitlistOpen(false)}
        partName={selectedPartName}
      />
    </div>
  );
}
