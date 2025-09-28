"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Clock, Users, Trophy, Zap } from "lucide-react"
import { useState } from "react"

interface GameCardProps {
  id: string
  title: string
  description: string
  longDescription: string
  difficulty: "Easy" | "Medium" | "Hard"
  duration: string
  players: number
  rating: number
  category: "Sorting" | "Building" | "Action" | "Strategy"
  icon: React.ComponentType<{ className?: string }>
  image: string
  rewards: {
    xp: number
    coins: number
    badges: string[]
  }
  isNew?: boolean
  isPopular?: boolean
}

export function GameCard({
  id,
  title,
  description,
  longDescription,
  difficulty,
  duration,
  players,
  rating,
  category,
  icon: Icon,
  image,
  rewards,
  isNew = false,
  isPopular = false,
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const difficultyColors = {
    Easy: "bg-eco-green/20 text-eco-green border-eco-green/30",
    Medium: "bg-gaming-glow/20 text-gaming-glow border-gaming-glow/30",
    Hard: "bg-gaming-neon/20 text-gaming-neon border-gaming-neon/30",
  }

  const categoryColors = {
    Sorting: "from-eco-green/20 to-eco-green/5 border-eco-green/30",
    Building: "from-eco-blue/20 to-eco-blue/5 border-eco-blue/30",
    Action: "from-gaming-glow/20 to-gaming-glow/5 border-gaming-glow/30",
    Strategy: "from-gaming-neon/20 to-gaming-neon/5 border-gaming-neon/30",
  }

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer bg-gradient-to-br ${
        categoryColors[category]
      } border-2 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 ${isHovered ? "animate-glow" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status badges */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {isNew && <Badge className="bg-gaming-glow text-white border-0 animate-pulse">NEW</Badge>}
        {isPopular && <Badge className="bg-gaming-neon text-white border-0">POPULAR</Badge>}
      </div>

      {/* Game image/icon */}
      <div className="relative h-48 bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div
          className={`h-20 w-20 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
            isHovered ? "animate-pulse" : ""
          }`}
        >
          <Icon className="h-10 w-10 text-primary" />
        </div>

        {/* Play overlay on hover */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </div>

        {/* Rating and stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-gaming-glow fill-current" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{players.toLocaleString()}</span>
          </div>
        </div>

        {/* Difficulty and category */}
        <div className="flex gap-2 mb-4">
          <Badge variant="secondary" className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>

        {/* Rewards */}
        <div className="bg-muted/30 rounded-lg p-3 mb-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">Rewards</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-gaming-glow" />
              <span className="font-medium">{rewards.xp} XP</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 bg-gaming-glow rounded-full" />
              <span className="font-medium">{rewards.coins} Coins</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="h-3 w-3 text-gaming-neon" />
              <span className="font-medium">{rewards.badges.length} Badges</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl group-hover:bg-eco-green group-hover:scale-105 transition-all duration-300"
          size="lg"
        >
          <Play className="h-5 w-5 mr-2" />
          Play Now
        </Button>
      </div>
    </Card>
  )
}
