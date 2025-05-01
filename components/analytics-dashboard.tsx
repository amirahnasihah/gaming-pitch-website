"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart";

// Mock data that would be fetched from Escharts API
const viewershipData = [
  { month: "Jan", viewers: 320000, hours: 1200000 },
  { month: "Feb", viewers: 280000, hours: 980000 },
  { month: "Mar", viewers: 450000, hours: 1800000 },
  { month: "Apr", viewers: 520000, hours: 2100000 },
  { month: "May", viewers: 390000, hours: 1500000 },
  { month: "Jun", viewers: 680000, hours: 2800000 },
  { month: "Jul", viewers: 720000, hours: 3100000 },
  { month: "Aug", viewers: 550000, hours: 2300000 },
  { month: "Sep", viewers: 490000, hours: 1900000 },
  { month: "Oct", viewers: 830000, hours: 3500000 },
  { month: "Nov", viewers: 750000, hours: 3200000 },
  { month: "Dec", viewers: 620000, hours: 2600000 },
];

const tournamentData = [
  {
    name: "MPL MY S12",
    peakViewers: 125000,
    avgViewers: 78000,
    hours: 980000,
    airtime: 120,
  },
  {
    name: "M5 World Championship",
    peakViewers: 320000,
    avgViewers: 180000,
    hours: 2100000,
    airtime: 160,
  },
  {
    name: "MSC 2023",
    peakViewers: 210000,
    avgViewers: 120000,
    hours: 1500000,
    airtime: 140,
  },
  {
    name: "MPL MY S11",
    peakViewers: 110000,
    avgViewers: 65000,
    hours: 850000,
    airtime: 110,
  },
  {
    name: "MPL MY S10",
    peakViewers: 95000,
    avgViewers: 58000,
    hours: 720000,
    airtime: 105,
  },
];

const audienceData = [
  { name: "Malaysia", value: 65 },
  { name: "Indonesia", value: 15 },
  { name: "Philippines", value: 10 },
  { name: "Singapore", value: 5 },
  { name: "Other", value: 5 },
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

const AnalyticsDashboard = () => {
  const [timeframe, setTimeframe] = useState("year");

  // Calculate key metrics
  const peakViewers = Math.max(
    ...tournamentData.map((item) => item.peakViewers)
  );
  const totalHoursWatched = viewershipData.reduce(
    (sum, item) => sum + item.hours,
    0
  );
  const avgViewers =
    tournamentData.reduce((sum, item) => sum + item.avgViewers, 0) /
    tournamentData.length;

  return (
    <section
      id="analytics"
      className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-slate-900/50"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          VIEWERSHIP ANALYTICS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Comprehensive esports analytics powered by Escharts data, showcasing
          our team's reach and engagement metrics.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-400 flex items-center">
              Peak Viewers
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Highest concurrent viewership across all tournaments</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {formatNumber(peakViewers)}
            </div>
            <p className="text-sm text-green-400 mt-1">
              +15% from previous year
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-400 flex items-center">
              Hours Watched
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Total hours of content watched by viewers</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {formatNumber(totalHoursWatched)}
            </div>
            <p className="text-sm text-green-400 mt-1">
              +22% from previous year
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-400 flex items-center">
              Average Viewers
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Average concurrent viewers across all tournaments</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatNumber(avgViewers)}</div>
            <p className="text-sm text-green-400 mt-1">
              +8% from previous year
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-400 flex items-center">
              Tournaments
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Number of major tournaments participated in</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{tournamentData.length}</div>
            <p className="text-sm text-green-400 mt-1">+1 from previous year</p>
          </CardContent>
        </Card>
      </div>

      {/* Viewership Trends */}
      <Card className="bg-slate-800/50 border-purple-500/20 mb-12">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Viewership Trends</CardTitle>
              <CardDescription>
                Monthly viewership data for Okarun Gaming
              </CardDescription>
            </div>
            <div className="mt-4 md:mt-0">
              <Tabs
                value={timeframe}
                onValueChange={setTimeframe}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 bg-slate-700/50">
                  <TabsTrigger value="quarter">3 Months</TabsTrigger>
                  <TabsTrigger value="half">6 Months</TabsTrigger>
                  <TabsTrigger value="year">12 Months</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={viewershipData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorViewers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" tickFormatter={formatNumber} />
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <RechartsTooltip
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

      {/* Tournament Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader>
            <CardTitle>Tournament Performance</CardTitle>
            <CardDescription>Peak viewers by tournament</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={tournamentData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="name"
                    stroke="#6b7280"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis stroke="#6b7280" tickFormatter={formatNumber} />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                      borderRadius: "8px",
                      color: "#f3f4f6",
                    }}
                    formatter={(value: number) => [
                      formatNumber(value),
                      "Peak Viewers",
                    ]}
                  />
                  <Bar
                    dataKey="peakViewers"
                    fill="#ec4899"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader>
            <CardTitle>Audience Geography</CardTitle>
            <CardDescription>
              Viewership distribution by country
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={audienceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
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
                  <RechartsTooltip
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
      </div>

      {/* Hours Watched Comparison */}
      <Card className="bg-slate-800/50 border-purple-500/20">
        <CardHeader>
          <CardTitle>Hours Watched by Tournament</CardTitle>
          <CardDescription>Total content consumption metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={tournamentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                barSize={40}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  angle={-45}
                  textAnchor="end"
                  height={70}
                />
                <YAxis stroke="#6b7280" tickFormatter={formatNumber} />
                <RechartsTooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#f3f4f6",
                  }}
                  formatter={(value: number) => [
                    formatNumber(value),
                    "Hours Watched",
                  ]}
                />
                <Bar dataKey="hours" fill="#8b5cf6" radius={[4, 4, 0, 0]}>
                  {tournamentData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`#8b5cf6${index % 2 === 0 ? "ff" : "cc"}`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <p className="text-xl mb-6">Want to see more detailed analytics?</p>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full">
          Request Full Analytics Report
        </Button>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
