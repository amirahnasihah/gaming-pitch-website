"use client";

import Image from "next/image";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { AnimatedGradient } from "@/components/ui/animated-gradient";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <AnimatedGradient containerClassName="absolute inset-0 opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            ABOUT OKARUN GAMING
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ParallaxScroll speed={0.2}>
            <div>
              <p className="text-lg mb-6 text-gray-300">
                Okarun Gaming is one of Japan's premier esports organizations,
                with our Mobile Legends: Bang Bang division consistently ranking
                among the top teams in the region. Our team is known for their
                supernatural gaming abilities and strategic brilliance.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Founded in 2020, we've quickly risen to prominence through our
                unique combination of traditional gaming techniques and modern
                strategies, creating a style that's both powerful and
                unpredictable.
              </p>
              <p className="text-lg text-gray-300">
                Our mission is to bridge the gap between the supernatural and
                esports world while creating meaningful connections between
                brands and our passionate gaming community.
              </p>
            </div>
          </ParallaxScroll>

          <ParallaxScroll speed={0.4}>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl border border-purple-500/20 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Okarun Gaming Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <p className="font-semibold text-xl">#OKARUNNATION</p>
                </div>
              </div>
            </div>
          </ParallaxScroll>
        </div>
      </div>
    </section>
  );
}
