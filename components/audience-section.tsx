"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GlowCard } from "@/components/ui/glow-card";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "@/components/ui/chart";

// Mock data for charts
const viewershipData = [
  { month: "Jan", viewers: 420000 },
  { month: "Feb", viewers: 380000 },
  { month: "Mar", viewers: 550000 },
  { month: "Apr", viewers: 620000 },
  { month: "May", viewers: 490000 },
  { month: "Jun", viewers: 780000 },
  { month: "Jul", viewers: 820000 },
  { month: "Aug", viewers: 650000 },
  { month: "Sep", viewers: 590000 },
  { month: "Oct", viewers: 930000 },
  { month: "Nov", viewers: 850000 },
  { month: "Dec", viewers: 720000 },
];

const audienceData = [
  { name: "Japan", value: 70 },
  { name: "South Korea", value: 15 },
  { name: "China", value: 10 },
  { name: "Southeast Asia", value: 3 },
  { name: "Other", value: 2 },
];

const COLORS = ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981", "#6b7280"];

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
};

export default function AudienceSection() {
  return (
    <section
      id="audience"
      className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-b from-black to-purple-950/20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            OUR AUDIENCE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <GlowCard>
            <Card className="bg-black/40 border-purple-500/20 h-full backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Age 16-24</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2 bg-slate-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Age 25-34</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="h-2 bg-slate-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Age 35+</span>
                      <span>10%</span>
                    </div>
                    <Progress value={10} className="h-2 bg-slate-700" />
                  </div>
                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex justify-between mb-1">
                      <span>Male</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-2 bg-slate-700" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Female</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="h-2 bg-slate-700" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </GlowCard>

          <GlowCard>
            <Card className="bg-black/40 border-purple-500/20 h-full backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Social Media Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Instagram className="h-8 w-8 text-pink-500" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>Instagram</span>
                        <span>1.2M Followers</span>
                      </div>
                      <Progress value={80} className="h-2 bg-slate-700" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Facebook className="h-8 w-8 text-blue-500" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>Facebook</span>
                        <span>850K Followers</span>
                      </div>
                      <Progress value={60} className="h-2 bg-slate-700" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Twitter className="h-8 w-8 text-sky-500" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>Twitter</span>
                        <span>320K Followers</span>
                      </div>
                      <Progress value={40} className="h-2 bg-slate-700" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Youtube className="h-8 w-8 text-red-500" />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>YouTube</span>
                        <span>450K Subscribers</span>
                      </div>
                      <Progress value={50} className="h-2 bg-slate-700" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GlowCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <GlowCard>
            <Card className="bg-black/40 border-purple-500/20 h-full backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Monthly Viewership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={viewershipData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorViewers"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8b5cf6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis
                        stroke="#6b7280"
                        tickFormatter={(value) =>
                          String(formatNumber(value as number))
                        }
                      />
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          border: "none",
                          borderRadius: "8px",
                          color: "#f3f4f6",
                        }}
                        formatter={(value: number) => [
                          formatNumber(value),
                          "Viewers",
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="viewers"
                        stroke="#8b5cf6"
                        fillOpacity={1}
                        fill="url(#colorViewers)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </GlowCard>

          <GlowCard>
            <Card className="bg-black/40 border-purple-500/20 h-full backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Audience Geography</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={audienceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {audienceData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1f2937",
                          border: "none",
                          borderRadius: "8px",
                          color: "#f3f4f6",
                        }}
                        formatter={(value: number) => [
                          `${value}%`,
                          "Audience Share",
                        ]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </GlowCard>
        </div>

        <ParallaxScroll speed={0.1}>
          <div className="bg-black/40 rounded-lg p-8 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6">Audience Engagement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  <AnimatedCounter
                    value={4200000}
                    formatter={(val) => `${formatNumber(val)}`}
                  />
                </div>
                <p className="text-gray-300">Monthly Impressions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  <AnimatedCounter value={18} formatter={(val) => `${val}%`} />
                </div>
                <p className="text-gray-300">Engagement Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  <AnimatedCounter
                    value={500000}
                    formatter={(val) => `${formatNumber(val)}+`}
                  />
                </div>
                <p className="text-gray-300">Tournament Viewers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  <AnimatedCounter value={85} formatter={(val) => `${val}%`} />
                </div>
                <p className="text-gray-300">Malaysian Audience</p>
              </div>
            </div>
          </div>
        </ParallaxScroll>
      </div>
    </section>
  );
}
