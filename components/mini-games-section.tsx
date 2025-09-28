"use client"

import { useState } from "react"
import { GameCard } from "./game-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Recycle,
  TreePine,
  Zap,
  Target,
  Droplets,
  Leaf,
  Search,
  Filter,
  Gamepad2,
  TrendingUp,
  Star,
  Trophy,
} from "lucide-react"

const gamesData = [
  {
    id: "1",
    title: "Trash Sorter Challenge",
    description: "Sort waste into correct recycling bins and learn proper disposal methods",
    longDescription:
      "Master the art of waste sorting in this fast-paced puzzle game. Learn about different materials and their proper disposal methods while racing against time.",
    difficulty: "Easy" as const,
    duration: "5-10 min",
    players: 15420,
    rating: 4.8,
    category: "Sorting" as const,
    icon: Recycle,
    image: "/trash-sorter-challenge.png",
    rewards: {
      xp: 50,
      coins: 25,
      badges: ["Recycling Rookie", "Waste Warrior"],
    },
    isNew: false,
    isPopular: true,
  },
  {
    id: "2",
    title: "Eco-City Builder",
    description: "Design and build sustainable cities with renewable energy and green spaces",
    longDescription:
      "Create the ultimate eco-friendly metropolis! Balance population growth with environmental sustainability in this strategic city-building adventure.",
    difficulty: "Medium" as const,
    duration: "15-30 min",
    players: 8930,
    rating: 4.9,
    category: "Building" as const,
    icon: TreePine,
    image: "/eco-city-building-game.jpg",
    rewards: {
      xp: 100,
      coins: 75,
      badges: ["City Planner", "Green Architect", "Sustainability Master"],
    },
    isNew: false,
    isPopular: true,
  },
  {
    id: "3",
    title: "Recycle Run",
    description: "Collect recyclables while running through different environments",
    longDescription:
      "Sprint through parks, cities, and beaches collecting recyclable materials. Avoid obstacles and learn about environmental impact along the way!",
    difficulty: "Easy" as const,
    duration: "3-8 min",
    players: 12650,
    rating: 4.6,
    category: "Action" as const,
    icon: Zap,
    image: "/running-recycling-game.jpg",
    rewards: {
      xp: 40,
      coins: 20,
      badges: ["Speed Recycler", "Eco Runner"],
    },
    isNew: true,
    isPopular: false,
  },
  {
    id: "4",
    title: "Climate Hero Battle",
    description: "Fight climate change by solving environmental puzzles and challenges",
    longDescription:
      "Become the ultimate climate hero! Solve complex environmental challenges, battle pollution monsters, and save ecosystems in this epic adventure.",
    difficulty: "Hard" as const,
    duration: "20-45 min",
    players: 6780,
    rating: 4.7,
    category: "Strategy" as const,
    icon: Target,
    image: "/climate-hero-battle-game.jpg",
    rewards: {
      xp: 150,
      coins: 100,
      badges: ["Climate Champion", "Eco Warrior", "Planet Protector", "Green Guardian"],
    },
    isNew: false,
    isPopular: false,
  },
  {
    id: "5",
    title: "Ocean Cleanup",
    description: "Navigate underwater to clean up ocean pollution and save marine life",
    longDescription:
      "Dive deep into the ocean to remove plastic waste and restore marine habitats. Learn about ocean conservation while helping sea creatures thrive.",
    difficulty: "Medium" as const,
    duration: "10-20 min",
    players: 9340,
    rating: 4.5,
    category: "Action" as const,
    icon: Droplets,
    image: "/ocean-cleanup-game.jpg",
    rewards: {
      xp: 80,
      coins: 50,
      badges: ["Ocean Guardian", "Marine Protector", "Deep Sea Hero"],
    },
    isNew: true,
    isPopular: false,
  },
  {
    id: "6",
    title: "Forest Guardian",
    description: "Protect forests from deforestation and help wildlife thrive",
    longDescription:
      "Become a forest guardian and protect ancient woodlands. Plant trees, fight fires, and create safe habitats for endangered species.",
    difficulty: "Medium" as const,
    duration: "12-25 min",
    players: 7560,
    rating: 4.8,
    category: "Strategy" as const,
    icon: Leaf,
    image: "/forest-protection-game.jpg",
    rewards: {
      xp: 90,
      coins: 60,
      badges: ["Forest Keeper", "Tree Planter", "Wildlife Protector"],
    },
    isNew: false,
    isPopular: true,
  },
]

export function MiniGamesSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const categories = ["All", "Sorting", "Building", "Action", "Strategy"]
  const difficulties = ["All", "Easy", "Medium", "Hard"]

  const filteredGames = gamesData.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "All" || game.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const totalPlayers = gamesData.reduce((sum, game) => sum + game.players, 0)
  const averageRating = gamesData.reduce((sum, game) => sum + game.rating, 0) / gamesData.length
  const newGames = gamesData.filter((game) => game.isNew).length
  const popularGames = gamesData.filter((game) => game.isPopular).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-gaming-glow/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gaming-glow/10 px-4 py-2 rounded-full mb-6 border border-gaming-glow/20">
            <Gamepad2 className="h-4 w-4 text-gaming-glow animate-pulse" />
            <span className="text-sm font-medium text-gaming-glow">Interactive Eco Games</span>
          </div>
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-gaming-glow to-gaming-neon bg-clip-text text-transparent">
            Mini-Games
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn environmental science through fun, interactive games and challenges
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-gaming-glow/10 to-transparent border-gaming-glow/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-glow/20 rounded-xl flex items-center justify-center">
                <Gamepad2 className="h-6 w-6 text-gaming-glow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-glow">{gamesData.length}</p>
                <p className="text-sm text-muted-foreground">Total Games</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-eco-green/10 to-transparent border-eco-green/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-green/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-eco-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-green">{totalPlayers.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Players</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-gaming-neon/10 to-transparent border-gaming-neon/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gaming-neon/20 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-gaming-neon" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gaming-neon">{averageRating.toFixed(1)}</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-eco-blue/10 to-transparent border-eco-blue/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-eco-blue/20 rounded-xl flex items-center justify-center">
                <Trophy className="h-6 w-6 text-eco-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-eco-blue">{popularGames}</p>
                <p className="text-sm text-muted-foreground">Popular Games</p>
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
                  placeholder="Search games..."
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

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Gamepad2 className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No games found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
