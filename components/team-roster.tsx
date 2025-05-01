"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Instagram, Twitter } from "lucide-react";

type PlayerProps = {
  id: number;
  name: string;
  ign: string;
  role: string;
  image: string;
  bio: string;
  instagram?: string;
  twitter?: string;
  achievements?: string[];
};

const players: PlayerProps[] = [
  {
    id: 1,
    name: "Tanjiro Kamado",
    ign: "WaterBreath",
    role: "Gold Lane",
    image: "https://cdn.myanimelist.net/images/characters/2/284121.jpg",
    bio: "Team captain and gold lane specialist with exceptional mechanical skills. Known for his water breathing techniques and precise farming.",
    instagram: "#",
    twitter: "#",
    achievements: [
      "Japan Pro League Season 10 MVP",
      "M4 World Championship Participant",
    ],
  },
  {
    id: 2,
    name: "Zenitsu Agatsuma",
    ign: "ThunderGod",
    role: "Jungler",
    image: "https://cdn.myanimelist.net/images/characters/9/284122.jpg",
    bio: "Aggressive jungler known for his lightning-fast ganking patterns and thunder breathing techniques.",
    instagram: "#",
    twitter: "#",
    achievements: [
      "Best Jungler Japan Pro League Season 9",
      "MSC 2022 All-Star Team",
    ],
  },
  {
    id: 3,
    name: "Inosuke Hashibira",
    ign: "BeastBreath",
    role: "Mid Lane",
    image: "https://cdn.myanimelist.net/images/characters/7/284123.jpg",
    bio: "Mid lane prodigy with exceptional map awareness and beast breathing techniques. Known for his unpredictable playstyle.",
    instagram: "#",
    twitter: "#",
    achievements: [
      "Rookie of the Year Japan Pro League Season 8",
      "Most Improved Player 2022",
    ],
  },
  {
    id: 4,
    name: "Kyojuro Rengoku",
    ign: "FlameHashira",
    role: "Exp Lane",
    image: "https://cdn.myanimelist.net/images/characters/3/284124.jpg",
    bio: "Versatile exp laner who excels at both split-pushing and team fighting. Master of flame breathing techniques.",
    instagram: "#",
    twitter: "#",
    achievements: [
      "Best Exp Laner Japan Pro League Season 10",
      "1v1 Tournament Champion 2023",
    ],
  },
  {
    id: 5,
    name: "Giyu Tomioka",
    ign: "WaterHashira",
    role: "Roamer",
    image: "https://cdn.myanimelist.net/images/characters/5/284125.jpg",
    bio: "Strategic roamer and shotcaller with exceptional game sense. Known for his calm demeanor and water breathing mastery.",
    instagram: "#",
    twitter: "#",
    achievements: [
      "Best Roamer Japan Pro League Season 11",
      "Highest Vision Score JPL 2023",
    ],
  },
];

const coaches = [
  {
    id: 1,
    name: "Kagaya Ubuyashiki",
    ign: "Master Kagaya",
    role: "Head Coach",
    image: "https://cdn.myanimelist.net/images/characters/4/284126.jpg",
    bio: "Former professional player turned coach with deep strategic knowledge of the game. Known for his wisdom and leadership.",
    instagram: "#",
    twitter: "#",
    achievements: [
      "Coach of the Year 2022",
      "Led team to Japan Pro League Season 10 Championship",
    ],
  },
  {
    id: 2,
    name: "Shinobu Kocho",
    ign: "Coach Shinobu",
    role: "Assistant Coach",
    image: "https://cdn.myanimelist.net/images/characters/6/284127.jpg",
    bio: "Specializes in player development and draft strategies. Known for her analytical approach and insect breathing techniques.",
    instagram: "#",
    twitter: "#",
    achievements: ["Former JPL Analyst", "Data-driven coaching approach"],
  },
];

const PlayerCard = ({ player }: { player: PlayerProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="bg-slate-800/50 border-purple-500/20 overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={player.image || "/placeholder.svg"}
          alt={player.name}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-purple-400 font-medium">
                {player.role}
              </p>
              <h3 className="text-2xl font-bold">{player.ign}</h3>
              <p className="text-sm text-gray-300">{player.name}</p>
            </div>
            <div className="flex space-x-2">
              {player.instagram && (
                <a
                  href={player.instagram}
                  className="bg-slate-700/50 p-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {player.twitter && (
                <a
                  href={player.twitter}
                  className="bg-slate-700/50 p-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <p className="text-gray-300 text-sm">{player.bio}</p>

        {player.achievements && player.achievements.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-purple-400 font-medium mb-2">
              ACHIEVEMENTS
            </p>
            <ul className="text-xs text-gray-300 space-y-1">
              {player.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const TeamRoster = () => {
  return (
    <section
      id="team"
      className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          MEET THE TEAM
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
      </div>

      <Tabs defaultValue="players" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-slate-800/50">
          <TabsTrigger value="players">Players</TabsTrigger>
          <TabsTrigger value="coaches">Coaches & Staff</TabsTrigger>
        </TabsList>

        <TabsContent value="players" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="coaches" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <PlayerCard key={coach.id} player={coach} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default TeamRoster;
