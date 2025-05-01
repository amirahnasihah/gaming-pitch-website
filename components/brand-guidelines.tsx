"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Check, Info } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { AnimatedGradient } from "@/components/ui/animated-gradient";

const logoFormats = [
  {
    id: "png",
    name: "PNG",
    description: "Transparent background, suitable for digital use",
    sizes: ["Full Color", "White", "Black"],
    fileSize: "2.4 MB",
  },
  {
    id: "svg",
    name: "SVG",
    description: "Vector format, scalable to any size without quality loss",
    sizes: ["Full Color", "White", "Black"],
    fileSize: "156 KB",
  },
  {
    id: "jpg",
    name: "JPG",
    description: "Solid background, suitable for print materials",
    sizes: ["Full Color (White BG)", "Full Color (Black BG)"],
    fileSize: "1.8 MB",
  },
  {
    id: "ai",
    name: "AI",
    description: "Adobe Illustrator file for professional editing",
    sizes: ["Full Package"],
    fileSize: "4.2 MB",
  },
];

const brandGuidelines = [
  {
    title: "Logo Clear Space",
    description:
      "Always maintain a minimum clear space around the logo equal to the height of the 'T' in Okarun.",
  },
  {
    title: "Minimum Size",
    description:
      "Do not reproduce the logo smaller than 1 inch or 72 pixels in width to maintain legibility.",
  },
  {
    title: "Color Usage",
    description:
      "Primary colors are purple (#8b5cf6) and pink (#ec4899). Do not alter the logo colors unless using approved monochrome versions.",
  },
  {
    title: "Incorrect Usage",
    description:
      "Do not stretch, distort, rotate, or apply effects to the logo. Do not place the logo on busy backgrounds without sufficient contrast.",
  },
];

export default function BrandGuidelines() {
  const [selectedFormat, setSelectedFormat] = useState("png");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (type: string) => {
    // In a real implementation, this would trigger an actual file download
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section
      id="brand-guidelines"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <AnimatedGradient containerClassName="absolute inset-0 opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            BRAND GUIDELINES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Download official Okarun Gaming logos and learn how to use our brand
            assets correctly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Logo Downloads</h3>
            <p className="text-gray-300 mb-6">
              Our logo is available in various formats for different use cases.
              Please follow our guidelines when using the Okarun Gaming brand
              assets.
            </p>

            <Tabs
              defaultValue="png"
              value={selectedFormat}
              onValueChange={setSelectedFormat}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 bg-black/40 backdrop-blur-sm">
                <TabsTrigger value="png">PNG</TabsTrigger>
                <TabsTrigger value="svg">SVG</TabsTrigger>
                <TabsTrigger value="jpg">JPG</TabsTrigger>
                <TabsTrigger value="ai">AI</TabsTrigger>
              </TabsList>

              {logoFormats.map((format) => (
                <TabsContent key={format.id} value={format.id} className="mt-6">
                  <GlowCard>
                    <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle>{format.name} Format</CardTitle>
                        <CardDescription>{format.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {format.sizes.map((size, index) => (
                            <Card
                              key={index}
                              className="bg-black/60 border-purple-500/10"
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="font-medium">{size}</p>
                                    <p className="text-sm text-gray-400">
                                      {format.fileSize}
                                    </p>
                                  </div>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-purple-500/30 hover:bg-purple-500/20"
                                    onClick={() =>
                                      handleDownload(
                                        `${format.id}-${size
                                          .toLowerCase()
                                          .replace(/\s/g, "-")}`
                                      )
                                    }
                                  >
                                    <Download className="h-4 w-4 mr-2" />
                                    Download
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </GlowCard>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-8">
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                onClick={() => handleDownload("all-assets")}
              >
                <FileText className="h-5 w-5 mr-2" />
                Download Complete Brand Package
              </Button>

              {downloadSuccess && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <p className="text-green-400">
                    Download started! Thank you for your interest in Okarun
                    Gaming.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Logo Preview</h3>
            <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=240"
                    alt="Okarun Gaming Logo (Dark)"
                    width={240}
                    height={120}
                    className="h-auto w-full max-w-[200px]"
                  />
                </div>
                <div className="bg-black rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=240"
                    alt="Okarun Gaming Logo (Light)"
                    width={240}
                    height={120}
                    className="h-auto w-full max-w-[200px]"
                  />
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=240"
                    alt="Okarun Gaming Logo (Gradient BG)"
                    width={240}
                    height={120}
                    className="h-auto w-full max-w-[200px]"
                  />
                </div>
                <div className="bg-[url('/placeholder.svg?height=200&width=300')] bg-cover bg-center rounded-lg p-4 flex items-center justify-center">
                  <div className="bg-black/70 p-3 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=120&width=240"
                      alt="Okarun Gaming Logo (Image BG)"
                      width={240}
                      height={120}
                      className="h-auto w-full max-w-[180px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Usage Guidelines</h3>
            <div className="space-y-4">
              {brandGuidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="bg-black/40 border border-purple-500/20 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="flex">
                    <Info className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">
                        {guideline.title}
                      </h4>
                      <p className="text-gray-300 text-sm mt-1">
                        {guideline.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ParallaxScroll speed={0.1}>
          <div className="bg-black/40 rounded-lg p-8 border border-purple-500/20 backdrop-blur-sm text-center">
            <h3 className="text-xl font-bold mb-4">
              Need Custom Assets or Have Questions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              For media inquiries, custom asset requests, or questions about
              using our brand, please contact our media relations team.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full">
              Contact Media Team
            </Button>
          </div>
        </ParallaxScroll>
      </div>
    </section>
  );
}
