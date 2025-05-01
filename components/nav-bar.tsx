"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=60&width=180"
            alt="Okarun Gaming Logo"
            width={180}
            height={60}
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-purple-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection("analytics")}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Analytics
          </button>
          <button
            onClick={() => scrollToSection("audience")}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Audience
          </button>
          <button
            onClick={() => scrollToSection("sponsorship")}
            className="text-white hover:text-purple-400 transition-colors"
          >
            Sponsorship
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("analytics")}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Analytics
            </button>
            <button
              onClick={() => scrollToSection("audience")}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Audience
            </button>
            <button
              onClick={() => scrollToSection("sponsorship")}
              className="text-white hover:text-purple-400 transition-colors py-2"
            >
              Sponsorship
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
