"use client"

import { useState } from "react"
import { AchievementCard } from "./achievement-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Trophy,
  Star,
  Leaf,
  Recycle,
  Zap,
  TreePine,
  Droplets,
  Target,
  Users,
  BookOpen,
  Search,
  Filter,
  Crown,
  Gift,
} from "lucide-react"

const achievementsData = [
  {
    id: "1",
    title: "First Steps",
    description: "Complete your first environmental quest",
    category: "Learning" as const,
    type: "badge" as const,
    rarity: "Common" as const,
    icon: Leaf,
    progress: 1,
    maxProgress: 1,
    isUnlocked: true,
    isNew: false,
    unlockedDate: "March 15, 2024",
    xpReward: 50,
  },
  {
    id: "2",
    title: "Recycling Master",
    description: "Sort 100 items correctly in recycling games",
    category: "Gaming" as const,
    type: "trophy" as const,
    rarity: "Rare" as const,
    icon: Recycle,
    progress: 85,
    maxProgress: 100,
    isUnlocked: false,
    isNew: false,
    xpReward: 200,
  },
  {
    id: "3",
    title: "Climate Champion",
    description: "Complete all climate change learning modules",
    category: "Learning" as const,
    type: "certificate" as const,
    rarity: "Epic" as const,
    icon: TreePine,
    progress: 8,
    maxProgress: 10,
    isUnlocked: false,
    isNew: false,
    xpReward: 500,
  },
  {
    id: "4",
    title: "Eco Warrior",
    description: "Reach level 10 in the EcoVerseX platform",
    category: "Special" as const,
    type: "badge" as const,
    rarity: "Epic" as const,
    icon: Star,
    progress: 1,
    maxProgress: 1,
    isUnlocked: true,
    isNew: true,
    unlockedDate: "March 20, 2024",
    xpReward: 300,
  },
  {
    id: "5",
    title: "Ocean Guardian",
    description: "Complete 5 ocean conservation activities",
    category: "Impact" as const,
    type: "trophy" as const,
    rarity: "Rare" as const,
    icon: Droplets,
    progress: 3,
    maxProgress: 5,
    isUnlocked: false,
    isNew: false,
    xpReward: 250,
  },
  {
    id: "6",
    title: "Planet Protector",
    description: "Achieve top 1% in global leaderboard",
    category: "Special" as const,
    type: "certificate" as const,
    rarity: "Legendary" as const,
    icon: Crown,
    progress: 0,
    maxProgress: 1,
    isUnlocked: false,
    isNew: false,
    xpReward: 1000,
  },
  {
    id: "7",
    title: "Community Leader",
    description: "Help 10 other students with eco-tasks",
    category: "Community" as const,
    type: "badge" as const,
    rarity: "Rare" as const,
    icon: Users,
    progress: 7,
    maxProgress: 10,
    isUnlocked: false,
    isNew: false,
    xpReward: 300,
  },
  {
    id: "8",
    title: "Knowledge Seeker",
    description: "Read 25 environmental articles",
    category: "Learning" as const,
    type: "badge" as const,
    rarity: "Common" as const,
    icon: BookOpen,
    progress: 1,
    maxProgress: 1,
    isUnlocked: true,
    isNew: false,
    unlockedDate: "March 10, 2024",
    xpReward: 100,
  },
  {
    id: "9",
    title: "Energy Saver",
    description: "Complete all renewable energy challenges",
    category: "Gaming" as const,
    type: "trophy" as const,
    rarity: "Epic" as const,
    icon: Zap,
    progress: 4,
    maxProgress: 6,
    isUnlocked: false,
    isNew: false,
    xpReward: 400,
  },
]

export function RewardsAchievements() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedRarity, setSelectedRarity] = useState("All")
  const [showUnlockedOnly, setShowUnlockedOnly] = useState(false)

  const categories = ["All", "Learning", "Gaming", "Community", "Impact", "Special"]
  const types = ["All", "badge", "trophy", "certificate"]
  const rarities = ["All", "Common", "Rare", "Epic", "Legendary"]

  const filteredAchievements = achievementsData.filter((achievement) => {
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || achievement.category === selectedCategory
    const matchesType = selectedType === "All" || achievement.type === selectedType
    const matchesRarity = selectedRarity === "All" || achievement.rarity === selectedRarity
    const matchesUnlocked = !showUnlockedOnly || achievement.isUnlocked

    return matchesSearch && matchesCategory && matchesType && matchesRarity && matchesUnlocked
  })

  const totalAchievements = achievementsData.length
  const unlockedAchievements = achievementsData.filter((a) => a.isUnlocked).length
  const totalXP = achievementsData.filter((a) => a.isUnlocked).reduce((sum, a) => sum + a.xpReward, 0)
  const newAchievements = achievementsData.filter((a) => a.isNew && a.isUnlocked).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-gaming-neon/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gaming-glow/10 px-4 py-2 rounded-full mb-6 border border-gaming-glow/20">
            <Gift className="h-4 w-4 text-gaming-glow animate-pulse" />
            <span className="text-sm font-medium text-gaming-glow">Digital Rewards & Recognition</span>
          </div>
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-gaming-glow to-gaming-neon bg-clip-text text-transparent">
            Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock badges, trophies, and certificates as you progress on your environmental journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-eco-green/10 to-transparent border-eco-green/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-green/20 rounded-xl flex items-center justify-center">
                <Trophy className="h-6 w-6 text-eco-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-green">
                  {unlockedAchievements}/{totalAchievements}
                </p>
                <p className="text-sm text-muted-foreground">Unlocked</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gaming-glow/10 to-transparent border-gaming-glow/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-glow/20 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-gaming-glow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-glow">{totalXP}</p>
                <p className="text-sm text-muted-foreground">Total XP</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gaming-neon/10 to-transparent border-gaming-neon/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-neon/20 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-gaming-neon" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-neon">{newAchievements}</p>
                <p className="text-sm text-muted-foreground">New This Week</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-eco-blue/10 to-transparent border-eco-blue/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-blue/20 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-eco-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-blue">
                  {Math.round((unlockedAchievements / totalAchievements) * 100)}%
                </p>
                <p className="text-sm text-muted-foreground">Completion</p>
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
                  placeholder="Search achievements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Category:</span>
                <div className="flex gap-2">
                  {categories.slice(0, 4).map((category) => (
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
                <span className="text-sm font-medium">Type:</span>
                <div className="flex gap-2">
                  {types.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                      className="text-xs capitalize"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Rarity:</span>
                <div className="flex gap-2">
                  {rarities.slice(0, 3).map((rarity) => (
                    <Button
                      key={rarity}
                      variant={selectedRarity === rarity ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRarity(rarity)}
                      className="text-xs"
                    >
                      {rarity}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                variant={showUnlockedOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowUnlockedOnly(!showUnlockedOnly)}
                className="text-xs"
              >
                Unlocked Only
              </Button>
            </div>
          </div>
        </Card>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No achievements found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
