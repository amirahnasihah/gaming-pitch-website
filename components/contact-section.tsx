"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Handshake,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Calendar,
  Clock,
} from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const [sponsorshipType, setSponsorshipType] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <AnimatedGradient containerClassName="absolute inset-0 opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            PARTNERSHIP INQUIRY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Interested in partnering with Okarun Gaming? Fill out the form below
            and our partnerships team will get back to you within 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">
                  Partnership Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">
                        partnerships@okarungaming.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Handshake className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <p className="font-semibold">Partnerships</p>
                      <p className="text-gray-300">
                        For immediate assistance, contact our partnerships
                        director at +60 12-345-6789
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <p className="font-semibold">Response Time</p>
                      <p className="text-gray-300">
                        We respond to all partnership inquiries within 48 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-purple-400 mt-1" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-black/40 p-3 rounded-full hover:bg-purple-600 transition-colors backdrop-blur-sm"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-black/40 p-3 rounded-full hover:bg-purple-600 transition-colors backdrop-blur-sm"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-black/40 p-3 rounded-full hover:bg-purple-600 transition-colors backdrop-blur-sm"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-black/40 p-3 rounded-full hover:bg-purple-600 transition-colors backdrop-blur-sm"
                    >
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <GlowCard>
              <div className="bg-black/40 rounded-lg p-8 border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">
                  Partnership Inquiry Form
                </h3>

                {formSubmitted ? (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                    <h4 className="text-xl font-bold text-green-400 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-300">
                      Your partnership inquiry has been received. Our team will
                      review your information and get back to you within 48
                      hours.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Contact Name*</Label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full bg-black/60 border border-purple-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mt-2"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address*</Label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full bg-black/60 border border-purple-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mt-2"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company/Brand Name*</Label>
                        <input
                          type="text"
                          id="company"
                          required
                          className="w-full bg-black/60 border border-purple-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mt-2"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Position/Title*</Label>
                        <input
                          type="text"
                          id="position"
                          required
                          className="w-full bg-black/60 border border-purple-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mt-2"
                          placeholder="Your role at the company"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full bg-black/60 border border-purple-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mt-2"
                        placeholder="+60 12-345-6789"
                      />
                    </div>

                    <div>
                      <Label htmlFor="website">Company Website</Label>
                      <input
                        type="url"
                        id="website"
                        className="w-full bg-black/60 border border-purple-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mt-2"
                        placeholder="https://www.yourcompany.com"
                      />
                    </div>

                    <div>
                      <Label>Interested In*</Label>
                      <Select
                        required
                        value={sponsorshipType}
                        onValueChange={setSponsorshipType}
                      >
                        <SelectTrigger className="w-full bg-black/60 border border-purple-500/30 mt-2">
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monetary-bronze">
                            Monetary - Bronze Package
                          </SelectItem>
                          <SelectItem value="monetary-silver">
                            Monetary - Silver Package
                          </SelectItem>
                          <SelectItem value="monetary-gold">
                            Monetary - Gold Package
                          </SelectItem>
                          <SelectItem value="equipment">
                            Equipment Partnership
                          </SelectItem>
                          <SelectItem value="services">
                            Services Partnership
                          </SelectItem>
                          <SelectItem value="media">
                            Media Partnership
                          </SelectItem>
                          <SelectItem value="custom">
                            Custom Partnership
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Partnership Budget Range (Annual)</Label>
                      <RadioGroup
                        defaultValue="10k-25k"
                        className="mt-2 grid grid-cols-2 gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="under-10k" id="under-10k" />
                          <Label htmlFor="under-10k" className="font-normal">
                            Under RM 10,000
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10k-25k" id="10k-25k" />
                          <Label htmlFor="10k-25k" className="font-normal">
                            RM 10,000 - 25,000
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="25k-50k" id="25k-50k" />
                          <Label htmlFor="25k-50k" className="font-normal">
                            RM 25,000 - 50,000
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="over-50k" id="over-50k" />
                          <Label htmlFor="over-50k" className="font-normal">
                            Over RM 50,000
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Partnership Goals (Select all that apply)</Label>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="brand-awareness" />
                          <label htmlFor="brand-awareness" className="text-sm">
                            Brand Awareness
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="product-promotion" />
                          <label
                            htmlFor="product-promotion"
                            className="text-sm"
                          >
                            Product Promotion
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="audience-engagement" />
                          <label
                            htmlFor="audience-engagement"
                            className="text-sm"
                          >
                            Audience Engagement
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="content-creation" />
                          <label htmlFor="content-creation" className="text-sm">
                            Content Creation
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="market-research" />
                          <label htmlFor="market-research" className="text-sm">
                            Market Research
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="community-building" />
                          <label
                            htmlFor="community-building"
                            className="text-sm"
                          >
                            Community Building
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Partnership Timeline</Label>
                      <Select>
                        <SelectTrigger className="w-full bg-black/60 border border-purple-500/30 mt-2">
                          <SelectValue placeholder="Select desired timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">
                            Immediate (1-2 months)
                          </SelectItem>
                          <SelectItem value="quarter">Next Quarter</SelectItem>
                          <SelectItem value="6-months">
                            Within 6 Months
                          </SelectItem>
                          <SelectItem value="year">Next Year</SelectItem>
                          <SelectItem value="exploring">
                            Just Exploring Options
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        className="w-full bg-black/60 border border-purple-500/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white mt-2"
                        placeholder="Tell us about your partnership goals, specific requirements, or any questions you have"
                      ></Textarea>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox id="privacy-policy" required />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="privacy-policy"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the privacy policy and terms of service
                        </label>
                        <p className="text-sm text-gray-400">
                          Your information will only be used to contact you
                          regarding your partnership inquiry.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg rounded-md"
                    >
                      Submit Partnership Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </GlowCard>
          </div>
        </div>

        <div className="mt-24 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Okarun Gaming. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
