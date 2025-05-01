"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  HelpCircle,
  Gift,
  DollarSign,
  Handshake,
  Zap,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThreeDCard } from "@/components/ui/3d-card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PackageFeature = {
  name: string;
  included: boolean;
  tooltip?: string;
};

type SponsorshipPackage = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PackageFeature[];
  popular?: boolean;
};

const monetaryPackages: SponsorshipPackage[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: "RM 10,000",
    description:
      "Basic visibility for brands looking to enter the esports market.",
    features: [
      { name: "Logo on team website", included: true },
      { name: "Social media mentions (2x/month)", included: true },
      { name: "Logo on team jersey (small)", included: true },
      { name: "Player appearances", included: false },
      { name: "Content creation", included: false },
      { name: "Exclusive team events", included: false },
      { name: "Custom activation campaigns", included: false },
    ],
  },
  {
    id: "silver",
    name: "Silver",
    price: "RM 25,000",
    description: "Enhanced visibility with content integration opportunities.",
    features: [
      { name: "Logo on team website", included: true },
      { name: "Social media mentions (4x/month)", included: true },
      { name: "Logo on team jersey (medium)", included: true },
      {
        name: "Player appearances (2x/year)",
        included: true,
        tooltip: "Players can attend your events or promotional activities",
      },
      {
        name: "Content creation (1x/month)",
        included: true,
        tooltip: "Custom content featuring your brand on our social channels",
      },
      { name: "Exclusive team events", included: false },
      { name: "Custom activation campaigns", included: false },
    ],
    popular: true,
  },
  {
    id: "gold",
    name: "Gold",
    price: "RM 50,000",
    description: "Premium partnership with extensive brand integration.",
    features: [
      { name: "Logo on team website", included: true },
      { name: "Social media mentions (8x/month)", included: true },
      { name: "Logo on team jersey (large)", included: true },
      {
        name: "Player appearances (4x/year)",
        included: true,
        tooltip: "Players can attend your events or promotional activities",
      },
      {
        name: "Content creation (2x/month)",
        included: true,
        tooltip: "Custom content featuring your brand on our social channels",
      },
      {
        name: "Exclusive team events",
        included: true,
        tooltip: "Access to team events and behind-the-scenes opportunities",
      },
      {
        name: "Custom activation campaigns",
        included: true,
        tooltip: "Tailored marketing campaigns to meet your specific goals",
      },
    ],
  },
];

const nonMonetaryPackages = [
  {
    id: "equipment",
    name: "Equipment Partner",
    price: "In-Kind",
    description:
      "Provide gaming equipment, peripherals, or hardware for our team.",
    features: [
      { name: "Product placement in streams", included: true },
      { name: "Player testimonials & reviews", included: true },
      { name: "Logo on team website", included: true },
      { name: "Social media mentions (3x/month)", included: true },
      {
        name: "Unboxing/review videos",
        included: true,
        tooltip:
          "Our players will create dedicated content featuring your products",
      },
      { name: "Logo on team jersey (small)", included: true },
      { name: "Product testing feedback", included: true },
    ],
  },
  {
    id: "services",
    name: "Services Partner",
    price: "In-Kind",
    description:
      "Provide professional services like travel, accommodation, or health services.",
    features: [
      { name: "Brand mentions during events", included: true },
      { name: "Logo on team website", included: true },
      { name: "Social media mentions (2x/month)", included: true },
      {
        name: "Service highlight content",
        included: true,
        tooltip: "Content showcasing how your services benefit our team",
      },
      { name: "Logo on team jersey (small)", included: true },
      { name: "Player testimonials", included: true },
      { name: "Networking opportunities", included: true },
    ],
    popular: true,
  },
  {
    id: "media",
    name: "Media Partner",
    price: "In-Kind",
    description:
      "Provide media coverage, production services, or content distribution.",
    features: [
      { name: "Co-branded content", included: true },
      { name: "Logo on team website", included: true },
      { name: "Cross-promotion opportunities", included: true },
      {
        name: "Exclusive interviews",
        included: true,
        tooltip: "Priority access to team members for interviews and features",
      },
      { name: "Content collaboration", included: true },
      { name: "Event coverage rights", included: true },
      { name: "Behind-the-scenes access", included: true },
    ],
  },
];

const valueExchangeOptions = [
  {
    title: "Product Placement",
    description:
      "Your products featured in our streams, videos, and social media content",
    icon: <Gift className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "Technical Expertise",
    description:
      "Share your industry knowledge or provide specialized training to our team",
    icon: <Zap className="h-10 w-10 text-pink-400" />,
  },
  {
    title: "Venue Access",
    description:
      "Provide access to facilities for training, events, or content creation",
    icon: <Handshake className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Cross-Promotion",
    description:
      "Mutual promotion across our respective audiences and platforms",
    icon: <DollarSign className="h-10 w-10 text-green-400" />,
  },
];

export default function SponsorshipSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [sponsorshipType, setSponsorshipType] = useState("monetary");

  return (
    <section
      id="sponsorship"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            SPONSORSHIP PACKAGES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Partner with Okarun Gaming and connect your brand with our
            passionate fanbase. We offer flexible sponsorship packages that can
            be customized to meet your marketing objectives.
          </p>
        </div>

        <Tabs
          defaultValue="monetary"
          value={sponsorshipType}
          onValueChange={setSponsorshipType}
          className="w-full mb-12"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-black/40 backdrop-blur-sm">
            <TabsTrigger value="monetary">
              <DollarSign className="h-4 w-4 mr-2" />
              Monetary Sponsorship
            </TabsTrigger>
            <TabsTrigger value="non-monetary">
              <Gift className="h-4 w-4 mr-2" />
              In-Kind Partnerships
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monetary">
            <ParallaxScroll speed={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {monetaryPackages.map((pkg) => (
                  <ThreeDCard
                    key={pkg.id}
                    containerClassName="h-full"
                    cardClassName="h-full"
                    rotationIntensity={5}
                  >
                    <Card
                      className={`bg-black/40 border-purple-500/20 relative h-full backdrop-blur-sm ${
                        pkg.popular ? "transform md:-translate-y-4" : ""
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-0 right-0 flex justify-center">
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <CardHeader>
                        <CardTitle className="text-2xl font-bold">
                          {pkg.name}
                        </CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold text-white">
                            {pkg.price}
                          </span>
                          <span className="text-gray-400 ml-2">/ year</span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-4">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div
                                className={`flex-shrink-0 rounded-full p-1 ${
                                  feature.included
                                    ? "text-green-500 bg-green-500/20"
                                    : "text-gray-500 bg-gray-500/20"
                                }`}
                              >
                                <Check className="h-4 w-4" />
                              </div>
                              <span
                                className={`ml-3 ${
                                  feature.included
                                    ? "text-gray-200"
                                    : "text-gray-500 line-through"
                                }`}
                              >
                                {feature.name}
                              </span>
                              {feature.tooltip && feature.included && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button className="ml-1">
                                        <HelpCircle className="h-4 w-4 text-gray-500" />
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">
                                        {feature.tooltip}
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter>
                        <Button
                          className={`w-full ${
                            pkg.popular
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                              : "bg-black/60 hover:bg-black/80 text-white border border-purple-500/30"
                          }`}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          Select Package
                        </Button>
                      </CardFooter>
                    </Card>
                  </ThreeDCard>
                ))}
              </div>
            </ParallaxScroll>
          </TabsContent>

          <TabsContent value="non-monetary">
            <ParallaxScroll speed={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {nonMonetaryPackages.map((pkg) => (
                  <ThreeDCard
                    key={pkg.id}
                    containerClassName="h-full"
                    cardClassName="h-full"
                    rotationIntensity={5}
                  >
                    <Card
                      className={`bg-black/40 border-purple-500/20 relative h-full backdrop-blur-sm ${
                        pkg.popular ? "transform md:-translate-y-4" : ""
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-4 left-0 right-0 flex justify-center">
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <CardHeader>
                        <CardTitle className="text-2xl font-bold">
                          {pkg.name}
                        </CardTitle>
                        <CardDescription>{pkg.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold text-white">
                            {pkg.price}
                          </span>
                          <span className="text-gray-400 ml-2">
                            contribution
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-4">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div
                                className={`flex-shrink-0 rounded-full p-1 ${
                                  feature.included
                                    ? "text-green-500 bg-green-500/20"
                                    : "text-gray-500 bg-gray-500/20"
                                }`}
                              >
                                <Check className="h-4 w-4" />
                              </div>
                              <span
                                className={`ml-3 ${
                                  feature.included
                                    ? "text-gray-200"
                                    : "text-gray-500 line-through"
                                }`}
                              >
                                {feature.name}
                              </span>
                              {feature.tooltip && feature.included && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button className="ml-1">
                                        <HelpCircle className="h-4 w-4 text-gray-500" />
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">
                                        {feature.tooltip}
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter>
                        <Button
                          className={`w-full ${
                            pkg.popular
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                              : "bg-black/60 hover:bg-black/80 text-white border border-purple-500/30"
                          }`}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          Discuss Partnership
                        </Button>
                      </CardFooter>
                    </Card>
                  </ThreeDCard>
                ))}
              </div>
            </ParallaxScroll>
          </TabsContent>
        </Tabs>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Value Exchange Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueExchangeOptions.map((option, index) => (
              <Card
                key={index}
                className="bg-black/40 border-purple-500/20 backdrop-blur-sm"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{option.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">
                      {option.title}
                    </h4>
                    <p className="text-gray-300">{option.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-6">Looking for a custom solution?</p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full">
            Contact Us for Custom Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
