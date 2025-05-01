"use client";

import type React from "react";

import { Trophy, Users, BarChart3 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlowCard } from "@/components/ui/glow-card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

type StatsCardProps = {
  icon: React.ReactNode;
  title: string;
  value: number;
  description: string;
  suffix?: string;
};

const StatsCard = ({
  icon,
  title,
  value,
  description,
  suffix = "",
}: StatsCardProps) => {
  return (
    <GlowCard containerClassName="h-full">
      <Card className="bg-black/40 border-purple-500/20 overflow-hidden h-full backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start">
            <div className="mr-4">{icon}</div>
            <div>
              <h3 className="font-medium text-gray-400">{title}</h3>
              <div className="text-3xl font-bold mt-1">
                <AnimatedCounter
                  value={value}
                  formatter={(val) => `${val}${suffix}`}
                />
              </div>
              <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </GlowCard>
  );
};

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-b from-black to-purple-950/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            OUR ACHIEVEMENTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        <ParallaxScroll speed={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatsCard
              icon={<Trophy className="h-10 w-10 text-yellow-500" />}
              title="MPL Champions"
              value={2}
              description="Mobile Legends Professional League"
            />
            <StatsCard
              icon={<Trophy className="h-10 w-10 text-purple-500" />}
              title="International Tournaments"
              value={12}
              description="Appearances on the global stage"
            />
            <StatsCard
              icon={<Users className="h-10 w-10 text-blue-500" />}
              title="Fan Base"
              value={2500000}
              suffix="+"
              description="Across all social platforms"
            />
            <StatsCard
              icon={<BarChart3 className="h-10 w-10 text-green-500" />}
              title="Viewership"
              value={500000}
              suffix="+"
              description="Average tournament views"
            />
          </div>
        </ParallaxScroll>

        <div className="mt-16">
          <Tabs defaultValue="2023" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-black/40 backdrop-blur-sm">
              <TabsTrigger value="2023">2023</TabsTrigger>
              <TabsTrigger value="2022">2022</TabsTrigger>
              <TabsTrigger value="2021">2021</TabsTrigger>
            </TabsList>
            <TabsContent value="2023" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlowCard>
                  <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>MPL Malaysia Season 12</CardTitle>
                      <CardDescription>October 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-purple-400">
                        2nd Place
                      </p>
                      <p className="mt-2 text-gray-300">
                        Secured runner-up position after an intense finals match
                        against Team HAQ.
                      </p>
                    </CardContent>
                  </Card>
                </GlowCard>
                <GlowCard>
                  <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>M5 World Championship</CardTitle>
                      <CardDescription>December 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-purple-400">Top 8</p>
                      <p className="mt-2 text-gray-300">
                        Represented Malaysia on the global stage, showcasing our
                        skills against the world's best teams.
                      </p>
                    </CardContent>
                  </Card>
                </GlowCard>
              </div>
            </TabsContent>
            <TabsContent value="2022" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlowCard>
                  <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>MPL Malaysia Season 10</CardTitle>
                      <CardDescription>October 2022</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-yellow-400">
                        Champions
                      </p>
                      <p className="mt-2 text-gray-300">
                        Dominated the season with innovative strategies and
                        teamwork.
                      </p>
                    </CardContent>
                  </Card>
                </GlowCard>
                <GlowCard>
                  <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>MSC 2022</CardTitle>
                      <CardDescription>June 2022</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-purple-400">
                        3rd Place
                      </p>
                      <p className="mt-2 text-gray-300">
                        Secured a podium finish at the MLBB Southeast Asia Cup.
                      </p>
                    </CardContent>
                  </Card>
                </GlowCard>
              </div>
            </TabsContent>
            <TabsContent value="2021" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlowCard>
                  <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Japan Pro League Season 8</CardTitle>
                      <CardDescription>October 2021</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-yellow-400">
                        Champions
                      </p>
                      <p className="mt-2 text-gray-300">
                        Our first major championship title, establishing Okarun
                        as a dominant force in Japanese esports.
                      </p>
                    </CardContent>
                  </Card>
                </GlowCard>
                <GlowCard>
                  <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>M3 World Championship</CardTitle>
                      <CardDescription>December 2021</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-bold text-purple-400">Top 8</p>
                      <p className="mt-2 text-gray-300">
                        First international appearance, showcasing our unique
                        supernatural gaming style on the world stage.
                      </p>
                    </CardContent>
                  </Card>
                </GlowCard>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
