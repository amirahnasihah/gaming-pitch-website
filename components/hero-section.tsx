"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedText } from "@/components/ui/animated-text";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSponsorship = () => {
    const element = document.getElementById("sponsorship");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Spotlight className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Okarun Gaming"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black z-10"></div>
      </div>

      {/* Hero Content */}
      <div
        className={`relative z-20 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Image
          src="/placeholder.svg?height=200&width=400"
          alt="Okarun Gaming Logo"
          width={400}
          height={200}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            OKARUN
          </span>{" "}
          GAMING
        </h1>
        <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          <AnimatedText text="Japan's Premier Mobile Legends: Bang Bang Team" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToSponsorship}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full"
          >
            Sponsorship Opportunities
          </Button>
          <Button
            variant="outline"
            className="border-purple-500 text-white hover:bg-purple-500/20 px-8 py-6 text-lg rounded-full"
          >
            Our Achievements
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button onClick={scrollDown} aria-label="Scroll Down">
          <ChevronDown className="h-10 w-10 text-white opacity-70 hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </Spotlight>
  );
}
