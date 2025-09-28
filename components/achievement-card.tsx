"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lock, CheckCircle, Zap } from "lucide-react"
import { useState } from "react"

interface AchievementCardProps {
  id: string
  title: string
  description: string
  category: "Learning" | "Gaming" | "Community" | "Impact" | "Special"
  type: "badge" | "trophy" | "certificate"
  rarity: "Common" | "Rare" | "Epic" | "Legendary"
  icon: React.ComponentType<{ className?: string }>
  progress?: number
  maxProgress?: number
  isUnlocked: boolean
  isNew?: boolean
  unlockedDate?: string
  xpReward: number
}

export function AchievementCard({
  id,
  title,
  description,
  category,
  type,
  rarity,
  icon: Icon,
  progress = 0,
  maxProgress = 100,
  isUnlocked,
  isNew = false,
  unlockedDate,
  xpReward,
}: AchievementCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const rarityColors = {
    Common: "from-muted/20 to-muted/5 border-muted/30",
    Rare: "from-eco-blue/20 to-eco-blue/5 border-eco-blue/30",
    Epic: "from-gaming-neon/20 to-gaming-neon/5 border-gaming-neon/30",
    Legendary: "from-gaming-glow/20 to-gaming-glow/5 border-gaming-glow/30",
  }

  const rarityGlow = {
    Common: "",
    Rare: "animate-pulse-glow",
    Epic: "animate-glow",
    Legendary: "animate-glow",
  }

  const typeIcons = {
    badge: "🏅",
    trophy: "🏆",
    certificate: "📜",
  }

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer bg-gradient-to-br ${
        rarityColors[rarity]
      } border-2 hover:scale-105 hover:shadow-2xl ${
        isUnlocked ? rarityGlow[rarity] : "opacity-60"
      } ${isHovered && isUnlocked ? "animate-pulse" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status indicators */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        {isNew && isUnlocked && <Badge className="bg-gaming-glow text-white border-0 animate-pulse text-xs">NEW</Badge>}
        {rarity === "Legendary" && <Badge className="bg-gaming-glow text-white border-0 text-xs">LEGENDARY</Badge>}
      </div>

      {/* Lock/unlock overlay */}
      {!isUnlocked && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <div className="bg-muted/80 backdrop-blur-sm rounded-full p-3">
            <Lock className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      )}

      {/* Unlock celebration effect */}
      {isUnlocked && isNew && (
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-glow/20 via-transparent to-gaming-neon/20 animate-pulse" />
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`h-16 w-16 rounded-2xl flex items-center justify-center text-2xl ${
              isUnlocked
                ? `bg-${rarity === "Common" ? "muted" : rarity === "Rare" ? "eco-blue" : rarity === "Epic" ? "gaming-neon" : "gaming-glow"}/20`
                : "bg-muted/20"
            } ${isUnlocked && isHovered ? "animate-bounce" : ""}`}
          >
            {isUnlocked ? (
              <Icon
                className={`h-8 w-8 ${
                  rarity === "Common"
                    ? "text-muted-foreground"
                    : rarity === "Rare"
                      ? "text-eco-blue"
                      : rarity === "Epic"
                        ? "text-gaming-neon"
                        : "text-gaming-glow"
                }`}
              />
            ) : (
              <Icon className="h-8 w-8 text-muted-foreground/50" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`font-bold text-lg ${isUnlocked ? "text-foreground" : "text-muted-foreground"}`}>
                {title}
              </h3>
              <span className="text-lg">{typeIcons[type]}</span>
            </div>
            <p className={`text-sm ${isUnlocked ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
              {description}
            </p>
          </div>
        </div>

        {/* Progress bar (if not unlocked) */}
        {!isUnlocked && maxProgress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-muted-foreground">
                {progress}/{maxProgress}
              </span>
            </div>
            <Progress value={(progress / maxProgress) * 100} className="h-2" />
          </div>
        )}

        {/* Unlock date */}
        {isUnlocked && unlockedDate && (
          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-eco-green" />
              <span>Unlocked on {unlockedDate}</span>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge
              variant="secondary"
              className={`text-xs ${
                rarity === "Common"
                  ? "bg-muted/50 text-muted-foreground"
                  : rarity === "Rare"
                    ? "bg-eco-blue/20 text-eco-blue"
                    : rarity === "Epic"
                      ? "bg-gaming-neon/20 text-gaming-neon"
                      : "bg-gaming-glow/20 text-gaming-glow"
              }`}
            >
              {rarity}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <Zap className="h-4 w-4 text-gaming-glow" />
            <span className={`font-medium ${isUnlocked ? "text-gaming-glow" : "text-muted-foreground"}`}>
              {xpReward} XP
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
