"use client"

import { useState } from "react"
import { QuestCard } from "./quest-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Leaf,
  Recycle,
  Zap,
  TreePine,
  Droplets,
  Search,
  Filter,
  TrendingUp,
  Award,
  Target,
  BookOpen,
} from "lucide-react"

const questData = [
  {
    id: "1",
    title: "Climate Change Basics",
    description: "Learn the fundamentals of climate science and global warming effects on our planet.",
    difficulty: "Beginner" as const,
    duration: "15 min",
    participants: 12450,
    progress: 0,
    isCompleted: false,
    isLocked: false,
    xpReward: 100,
    category: "Climate" as const,
    icon: TreePine,
  },
  {
    id: "2",
    title: "Recycling Mastery",
    description: "Master the art of proper waste sorting and discover the recycling process.",
    difficulty: "Beginner" as const,
    duration: "20 min",
    participants: 8920,
    progress: 65,
    isCompleted: false,
    isLocked: false,
    xpReward: 150,
    category: "Recycling" as const,
    icon: Recycle,
  },
  {
    id: "3",
    title: "Renewable Energy Quest",
    description: "Explore solar, wind, and other clean energy sources powering our future.",
    difficulty: "Intermediate" as const,
    duration: "30 min",
    participants: 6780,
    progress: 0,
    isCompleted: false,
    isLocked: false,
    xpReward: 200,
    category: "Energy" as const,
    icon: Zap,
  },
  {
    id: "4",
    title: "Ocean Conservation",
    description: "Dive deep into marine ecosystems and learn how to protect our oceans.",
    difficulty: "Intermediate" as const,
    duration: "25 min",
    participants: 5430,
    progress: 0,
    isCompleted: true,
    isLocked: false,
    xpReward: 180,
    category: "Water" as const,
    icon: Droplets,
  },
  {
    id: "5",
    title: "Biodiversity Challenge",
    description: "Understand ecosystem balance and the importance of species diversity.",
    difficulty: "Advanced" as const,
    duration: "45 min",
    participants: 3210,
    progress: 0,
    isCompleted: false,
    isLocked: false,
    xpReward: 300,
    category: "Wildlife" as const,
    icon: Leaf,
  },
  {
    id: "6",
    title: "Carbon Footprint Calculator",
    description: "Advanced quest to calculate and reduce your personal carbon impact.",
    difficulty: "Advanced" as const,
    duration: "40 min",
    participants: 2890,
    progress: 0,
    isCompleted: false,
    isLocked: true,
    xpReward: 350,
    category: "Climate" as const,
    icon: Target,
  },
]

export function LearningHub() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const categories = ["All", "Climate", "Recycling", "Energy", "Wildlife", "Water"]
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

  const filteredQuests = questData.filter((quest) => {
    const matchesSearch = quest.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || quest.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "All" || quest.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const completedQuests = questData.filter((q) => q.isCompleted).length
  const inProgressQuests = questData.filter((q) => q.progress > 0 && !q.isCompleted).length
  const totalXP = questData.filter((q) => q.isCompleted).reduce((sum, q) => sum + q.xpReward, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-eco-green/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-eco-green/10 px-4 py-2 rounded-full mb-6 border border-eco-green/20">
            <BookOpen className="h-4 w-4 text-eco-green animate-pulse" />
            <span className="text-sm font-medium text-eco-green">Interactive Learning Quests</span>
          </div>
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
            Learning Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Embark on epic environmental quests and level up your planet-saving knowledge
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-eco-green/10 to-transparent border-eco-green/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-green/20 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-eco-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-green">{completedQuests}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gaming-glow/10 to-transparent border-gaming-glow/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-glow/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-gaming-glow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-glow">{inProgressQuests}</p>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-eco-blue/10 to-transparent border-eco-blue/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-blue/20 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-eco-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-blue">{questData.length}</p>
                <p className="text-sm text-muted-foreground">Total Quests</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gaming-neon/10 to-transparent border-gaming-neon/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-neon/20 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-gaming-neon" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-neon">{totalXP}</p>
                <p className="text-sm text-muted-foreground">Total XP</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search quests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Category:</span>
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="text-xs"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Difficulty:</span>
                <div className="flex gap-2">
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className="text-xs"
                    >
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Quest Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuests.map((quest) => (
            <QuestCard key={quest.id} {...quest} />
          ))}
        </div>

        {filteredQuests.length === 0 && (
          <div className="text-center py-12">
            <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No quests found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
