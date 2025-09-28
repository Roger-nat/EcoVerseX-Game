"use client"

import { useState } from "react"
import { LeaderboardEntry } from "./leaderboard-entry"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, School, Globe, Calendar, Crown, Medal } from "lucide-react"

const globalLeaderboardData = [
  {
    rank: 1,
    user: {
      id: "1",
      name: "Emma Chen",
      avatar: "/student-girl-asian.jpg",
      school: "Green Valley High",
      level: 15,
    },
    score: 12450,
    change: "up" as const,
    changeAmount: 250,
    badges: ["Eco Champion", "Climate Hero", "Tree Planter", "Ocean Guardian"],
    isCurrentUser: false,
  },
  {
    rank: 2,
    user: {
      id: "2",
      name: "Marcus Johnson",
      avatar: "/student-boy-african.jpg",
      school: "Riverside Academy",
      level: 14,
    },
    score: 11890,
    change: "down" as const,
    changeAmount: -50,
    badges: ["Recycling Master", "Energy Saver", "Wildlife Protector"],
    isCurrentUser: false,
  },
  {
    rank: 3,
    user: {
      id: "3",
      name: "Sofia Rodriguez",
      avatar: "/student-girl-hispanic.jpg",
      school: "Sunset Middle School",
      level: 13,
    },
    score: 11200,
    change: "up" as const,
    changeAmount: 180,
    badges: ["Water Warrior", "Sustainability Star", "Green Guardian"],
    isCurrentUser: false,
  },
  {
    rank: 4,
    user: {
      id: "4",
      name: "Alex Green",
      avatar: "/student-boy-caucasian.jpg",
      school: "Oakwood Elementary",
      level: 12,
    },
    score: 10850,
    change: "up" as const,
    changeAmount: 320,
    badges: ["Forest Keeper", "Climate Activist", "Eco Educator"],
    isCurrentUser: true,
  },
  {
    rank: 5,
    user: {
      id: "5",
      name: "Zara Patel",
      avatar: "/student-girl-indian.jpg",
      school: "Tech Valley High",
      level: 11,
    },
    score: 9750,
    change: "same" as const,
    changeAmount: 0,
    badges: ["Innovation Leader", "Green Tech", "Future Builder"],
    isCurrentUser: false,
  },
]

const schoolLeaderboardData = [
  {
    rank: 1,
    user: {
      id: "4",
      name: "Alex Green",
      avatar: "/student-boy-caucasian.jpg",
      school: "Oakwood Elementary",
      level: 12,
    },
    score: 10850,
    change: "up" as const,
    changeAmount: 320,
    badges: ["Forest Keeper", "Climate Activist", "Eco Educator"],
    isCurrentUser: true,
  },
  {
    rank: 2,
    user: {
      id: "6",
      name: "Maya Thompson",
      avatar: "/student-girl-mixed.jpg",
      school: "Oakwood Elementary",
      level: 10,
    },
    score: 8950,
    change: "up" as const,
    changeAmount: 150,
    badges: ["Recycling Pro", "Energy Expert"],
    isCurrentUser: false,
  },
  {
    rank: 3,
    user: {
      id: "7",
      name: "Jordan Kim",
      avatar: "/student-boy-korean.jpg",
      school: "Oakwood Elementary",
      level: 9,
    },
    score: 7650,
    change: "down" as const,
    changeAmount: -80,
    badges: ["Water Saver", "Green Warrior"],
    isCurrentUser: false,
  },
]

export function LeaderboardSystem() {
  const [activeTab, setActiveTab] = useState("global")
  const [timeFilter, setTimeFilter] = useState("all-time")

  const timeFilters = [
    { value: "all-time", label: "All Time" },
    { value: "monthly", label: "This Month" },
    { value: "weekly", label: "This Week" },
    { value: "daily", label: "Today" },
  ]

  const currentUserGlobalRank = globalLeaderboardData.find((entry) => entry.isCurrentUser)?.rank || 0
  const currentUserSchoolRank = schoolLeaderboardData.find((entry) => entry.isCurrentUser)?.rank || 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-gaming-neon/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gaming-neon/10 px-4 py-2 rounded-full mb-6 border border-gaming-neon/20">
            <Trophy className="h-4 w-4 text-gaming-neon animate-pulse" />
            <span className="text-sm font-medium text-gaming-neon">Competitive Rankings</span>
          </div>
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-gaming-neon to-gaming-glow bg-clip-text text-transparent">
            Leaderboards
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete with eco-warriors worldwide and climb the ranks to become the ultimate environmental champion
          </p>
        </div>

        {/* User Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-gaming-glow/10 to-transparent border-gaming-glow/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-glow/20 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-gaming-glow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-glow">#{currentUserGlobalRank}</p>
                <p className="text-sm text-muted-foreground">Global Rank</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-eco-green/10 to-transparent border-eco-green/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-green/20 rounded-xl flex items-center justify-center">
                <School className="h-6 w-6 text-eco-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-green">#{currentUserSchoolRank}</p>
                <p className="text-sm text-muted-foreground">School Rank</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gaming-neon/10 to-transparent border-gaming-neon/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-neon/20 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-gaming-neon" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-neon">Top 5%</p>
                <p className="text-sm text-muted-foreground">Percentile</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Time Filter */}
        <Card className="p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Time Period:</span>
            </div>
            <div className="flex gap-2">
              {timeFilters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={timeFilter === filter.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeFilter(filter.value)}
                  className="text-xs"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Leaderboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="global" className="flex items-center gap-2 text-base">
              <Globe className="h-4 w-4" />
              Global Leaderboard
            </TabsTrigger>
            <TabsTrigger value="school" className="flex items-center gap-2 text-base">
              <School className="h-4 w-4" />
              School Leaderboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="space-y-4">
            {/* Top 3 Podium */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {globalLeaderboardData.slice(0, 3).map((entry, index) => (
                <Card
                  key={entry.user.id}
                  className={`p-6 text-center relative overflow-hidden ${
                    entry.rank === 1
                      ? "bg-gradient-to-br from-gaming-glow/20 to-gaming-glow/5 border-2 border-gaming-glow/40 animate-glow"
                      : entry.rank === 2
                        ? "bg-gradient-to-br from-muted/20 to-muted/5 border-2 border-muted/40"
                        : "bg-gradient-to-br from-gaming-neon/20 to-gaming-neon/5 border-2 border-gaming-neon/40 animate-pulse-glow"
                  }`}
                >
                  <div className="absolute top-4 right-4">
                    {entry.rank === 1 && <Crown className="h-6 w-6 text-gaming-glow" />}
                    {entry.rank === 2 && <Medal className="h-6 w-6 text-muted-foreground" />}
                    {entry.rank === 3 && <Trophy className="h-6 w-6 text-gaming-neon" />}
                  </div>

                  <div className="mb-4">
                    <div
                      className={`text-4xl font-black mb-2 ${
                        entry.rank === 1
                          ? "text-gaming-glow"
                          : entry.rank === 2
                            ? "text-muted-foreground"
                            : "text-gaming-neon"
                      }`}
                    >
                      #{entry.rank}
                    </div>
                    <div className="h-16 w-16 mx-auto mb-3">
                      <img
                        src={entry.user.avatar || "/placeholder.svg"}
                        alt={entry.user.name}
                        className="w-full h-full rounded-full ring-4 ring-primary/30"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{entry.user.name}</h3>
                    <p className="text-sm text-muted-foreground">{entry.user.school}</p>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-gaming-glow mb-1">{entry.score.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">Eco Points</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Full Rankings */}
            <div className="space-y-2">
              {globalLeaderboardData.map((entry) => (
                <LeaderboardEntry key={entry.user.id} {...entry} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="school" className="space-y-4">
            <div className="space-y-2">
              {schoolLeaderboardData.map((entry) => (
                <LeaderboardEntry key={entry.user.id} {...entry} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
