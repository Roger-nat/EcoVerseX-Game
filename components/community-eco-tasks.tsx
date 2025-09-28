"use client"

import { useState } from "react"
import { EcoTaskCard } from "./eco-task-card"
import { UploadEcoTask } from "./upload-eco-task"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, TrendingUp, Calendar, Award, Sparkles, Zap } from "lucide-react"

const ecoTasksData = [
  {
    id: "1",
    user: {
      name: "Emma Chen",
      avatar: "/student-girl-asian.jpg",
      level: 15,
    },
    task: {
      title: "Planted 5 Trees at Local Park",
      description:
        "Joined a community tree planting event and helped plant native oak trees to restore the local ecosystem.",
      category: "Tree Planting" as const,
      points: 100,
    },
    image: "/tree-planting-action.jpg",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8,
    isLiked: false,
    isVerified: true,
    isNew: true,
  },
  {
    id: "2",
    user: {
      name: "Marcus Johnson",
      avatar: "/student-boy-african.jpg",
      level: 14,
    },
    task: {
      title: "Organized School Recycling Drive",
      description: "Led a week-long recycling campaign at school, collecting over 200 pounds of recyclable materials.",
      category: "Recycling" as const,
      points: 150,
    },
    image: "/recycling-drive-action.jpg",
    timestamp: "1 day ago",
    likes: 31,
    comments: 12,
    isLiked: true,
    isVerified: true,
    isNew: false,
  },
  {
    id: "3",
    user: {
      name: "Sofia Rodriguez",
      avatar: "/student-girl-hispanic.jpg",
      level: 13,
    },
    task: {
      title: "Switched to Solar Power at Home",
      description: "Convinced my family to install solar panels on our roof. We're now generating clean energy!",
      category: "Energy Saving" as const,
      points: 200,
    },
    image: "/solar-panels-action.jpg",
    timestamp: "3 days ago",
    likes: 45,
    comments: 15,
    isLiked: false,
    isVerified: true,
    isNew: false,
  },
  {
    id: "4",
    user: {
      name: "Alex Green",
      avatar: "/student-boy-caucasian.jpg",
      level: 12,
    },
    task: {
      title: "Started Composting at Home",
      description: "Set up a composting system in our backyard to reduce food waste and create nutrient-rich soil.",
      category: "Community" as const,
      points: 75,
    },
    image: "/composting-action.jpg",
    timestamp: "5 days ago",
    likes: 18,
    comments: 6,
    isLiked: true,
    isVerified: false,
    isNew: false,
  },
]

export function CommunityEcoTasks() {
  const [activeTab, setActiveTab] = useState("feed")
  const [timeFilter, setTimeFilter] = useState("all")

  const timeFilters = [
    { value: "all", label: "All Time" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
  ]

  const totalActions = ecoTasksData.length
  const totalPoints = ecoTasksData.reduce((sum, task) => sum + task.task.points, 0)
  const verifiedActions = ecoTasksData.filter((task) => task.isVerified).length
  const newActions = ecoTasksData.filter((task) => task.isNew).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-eco-green/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-eco-green/10 px-4 py-2 rounded-full mb-6 border border-eco-green/20">
            <Users className="h-4 w-4 text-eco-green animate-pulse" />
            <span className="text-sm font-medium text-eco-green">Real-World Environmental Impact</span>
          </div>
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
            Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your real-world eco-actions, inspire others, and earn points for making a difference
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-eco-green/10 to-transparent border-eco-green/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-green/20 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-eco-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-green">{totalActions}</p>
                <p className="text-sm text-muted-foreground">Eco Actions</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gaming-glow/10 to-transparent border-gaming-glow/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-glow/20 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-gaming-glow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-glow">{totalPoints}</p>
                <p className="text-sm text-muted-foreground">Points Earned</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-eco-blue/10 to-transparent border-eco-blue/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-blue/20 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-eco-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-blue">{verifiedActions}</p>
                <p className="text-sm text-muted-foreground">Verified</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gaming-neon/10 to-transparent border-gaming-neon/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-neon/20 rounded-xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-gaming-neon" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-neon">{newActions}</p>
                <p className="text-sm text-muted-foreground">New Today</p>
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

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="feed" className="flex items-center gap-2 text-base">
              <TrendingUp className="h-4 w-4" />
              Community Feed
            </TabsTrigger>
            <TabsTrigger value="share" className="flex items-center gap-2 text-base">
              <Sparkles className="h-4 w-4" />
              Share Action
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {ecoTasksData.map((task) => (
                <EcoTaskCard key={task.id} {...task} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="share" className="max-w-2xl mx-auto">
            <UploadEcoTask />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
