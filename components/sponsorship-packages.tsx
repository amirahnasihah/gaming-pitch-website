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
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

const packages: SponsorshipPackage[] = [
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

const SponsorshipPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <section
      id="sponsorship"
      className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          SPONSORSHIP PACKAGES
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Partner with Okarun Gaming and connect your brand with our passionate
          fanbase. We offer flexible sponsorship packages that can be customized
          to meet your marketing objectives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className={`bg-slate-800/50 border-purple-500/20 relative ${
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
              <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
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
                            <p className="max-w-xs">{feature.tooltip}</p>
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
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                Select Package
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl mb-6">Looking for a custom solution?</p>
        <Button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-6 text-lg rounded-full">
          Contact Us for Custom Packages
        </Button>
      </div>
    </section>
  );
};

export default SponsorshipPackages;
