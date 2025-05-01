import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import AchievementsSection from "@/components/achievements-section";
import TeamSection from "@/components/team-section";
import AudienceSection from "@/components/audience-section";
import SponsorshipSection from "@/components/sponsorship-section";
import PartnersSection from "@/components/partners-section";
import BrandGuidelines from "@/components/brand-guidelines";
import ContactSection from "@/components/contact-section";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Okarun Gaming MLBB - Sponsorship Deck",
  description:
    "Sponsorship opportunities with Japan's premier Mobile Legends: Bang Bang team",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <TeamSection />
        <AudienceSection />
        <SponsorshipSection />
        <PartnersSection />
        <BrandGuidelines />
        <ContactSection />
      </main>
    </ThemeProvider>
  );
}
