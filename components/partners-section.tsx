"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { AnimatedGradient } from "@/components/ui/animated-gradient";

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <AnimatedGradient containerClassName="absolute inset-0 opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            OUR PARTNERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            We're proud to work with these amazing brands who share our vision
            for esports excellence.
          </p>
        </div>

        <ParallaxScroll speed={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-black/40 p-6 rounded-lg h-32 w-full flex items-center justify-center backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src={`/placeholder.svg?height=120&width=120`}
                  alt={`Sponsor ${i}`}
                  width={120}
                  height={120}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </ParallaxScroll>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold mb-4">
            Join these leading brands in partnering with Okarun Gaming
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full">
            Become Our Partner
          </Button>
        </div>
      </div>
    </section>
  );
}
