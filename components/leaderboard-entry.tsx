"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Crown, Medal, Trophy, Zap, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { useState } from "react"

interface LeaderboardEntryProps {
  rank: number
  user: {
    id: string
    name: string
    avatar?: string
    school?: string
    level: number
  }
  score: number
  change: "up" | "down" | "same"
  changeAmount?: number
  badges: string[]
  isCurrentUser?: boolean
}

export function LeaderboardEntry({
  rank,
  user,
  score,
  change,
  changeAmount = 0,
  badges,
  isCurrentUser = false,
}: LeaderboardEntryProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getRankIcon = () => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-gaming-glow" />
      case 2:
        return <Medal className="h-6 w-6 text-muted-foreground" />
      case 3:
        return <Trophy className="h-6 w-6 text-gaming-neon" />
      default:
        return null
    }
  }

  const getRankColor = () => {
    switch (rank) {
      case 1:
        return "text-gaming-glow"
      case 2:
        return "text-muted-foreground"
      case 3:
        return "text-gaming-neon"
      default:
        return "text-foreground"
    }
  }

  const getChangeIcon = () => {
    switch (change) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-eco-green" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getGlowClass = () => {
    if (rank === 1) return "animate-glow"
    if (rank <= 3) return "animate-pulse-glow"
    return ""
  }

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 cursor-pointer ${
        isCurrentUser
          ? "bg-gradient-to-r from-eco-green/10 to-eco-blue/10 border-2 border-eco-green/40"
          : "hover:bg-muted/50"
      } ${rank <= 3 ? getGlowClass() : ""} ${isHovered && rank <= 3 ? "scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rank indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary/50 to-primary/20" />

      <div className="p-4">
        <div className="flex items-center gap-4">
          {/* Rank */}
          <div className="flex items-center justify-center w-12 h-12">
            {getRankIcon() || (
              <div
                className={`text-2xl font-black ${getRankColor()} ${
                  rank <= 10 ? "text-3xl" : rank <= 100 ? "text-xl" : "text-lg"
                }`}
              >
                #{rank}
              </div>
            )}
          </div>

          {/* User info */}
          <div className="flex items-center gap-3 flex-1">
            <Avatar className={`h-12 w-12 ${rank <= 3 ? "ring-4 ring-primary/30" : ""}`}>
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="bg-primary/20 text-primary font-bold">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className={`font-bold ${isCurrentUser ? "text-eco-green" : "text-foreground"}`}>
                  {user.name}
                  {isCurrentUser && <span className="text-xs text-eco-green ml-1">(You)</span>}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  Level {user.level}
                </Badge>
              </div>
              {user.school && <p className="text-sm text-muted-foreground">{user.school}</p>}
            </div>
          </div>

          {/* Score and change */}
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="h-4 w-4 text-gaming-glow" />
              <span className="text-xl font-bold text-gaming-glow">{score.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              {getChangeIcon()}
              <span
                className={
                  change === "up" ? "text-eco-green" : change === "down" ? "text-destructive" : "text-muted-foreground"
                }
              >
                {changeAmount > 0 ? `+${changeAmount}` : changeAmount < 0 ? changeAmount : "—"}
              </span>
            </div>
          </div>
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {badges.slice(0, 3).map((badge, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-muted/50">
                {badge}
              </Badge>
            ))}
            {badges.length > 3 && (
              <Badge variant="outline" className="text-xs bg-muted/50">
                +{badges.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
