"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star, Clock, Users, CheckCircle, Lock, Play } from "lucide-react"
import { useState } from "react"

interface QuestCardProps {
  id: string
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  participants: number
  progress?: number
  isCompleted?: boolean
  isLocked?: boolean
  xpReward: number
  category: "Climate" | "Recycling" | "Energy" | "Wildlife" | "Water"
  icon: React.ComponentType<{ className?: string }>
}

export function QuestCard({
  id,
  title,
  description,
  difficulty,
  duration,
  participants,
  progress = 0,
  isCompleted = false,
  isLocked = false,
  xpReward,
  category,
  icon: Icon,
}: QuestCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const difficultyColors = {
    Beginner: "bg-eco-green/20 text-eco-green border-eco-green/30",
    Intermediate: "bg-gaming-glow/20 text-gaming-glow border-gaming-glow/30",
    Advanced: "bg-gaming-neon/20 text-gaming-neon border-gaming-neon/30",
  }

  const categoryColors = {
    Climate: "from-eco-blue/20 to-eco-blue/5 border-eco-blue/30",
    Recycling: "from-eco-green/20 to-eco-green/5 border-eco-green/30",
    Energy: "from-gaming-glow/20 to-gaming-glow/5 border-gaming-glow/30",
    Wildlife: "from-gaming-neon/20 to-gaming-neon/5 border-gaming-neon/30",
    Water: "from-eco-blue/20 to-eco-green/5 border-eco-blue/30",
  }

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 cursor-pointer bg-gradient-to-br ${
        categoryColors[category]
      } border-2 hover:scale-105 hover:shadow-xl ${isLocked ? "opacity-60" : ""} ${isHovered ? "animate-glow" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Completion overlay */}
      {isCompleted && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-eco-green rounded-full p-2">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        </div>
      )}

      {/* Lock overlay */}
      {isLocked && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
          <div className="bg-muted rounded-full p-3">
            <Lock className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
              <Badge variant="secondary" className={difficultyColors[difficulty]}>
                {difficulty}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-gaming-glow">
              <Star className="h-4 w-4" />
              <span className="font-bold">{xpReward}</span>
            </div>
            <p className="text-xs text-muted-foreground">XP</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Progress bar (if in progress) */}
        {progress > 0 && !isCompleted && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{participants.toLocaleString()}</span>
          </div>
        </div>

        {/* Action button */}
        <Button
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          variant={isCompleted ? "secondary" : "default"}
          disabled={isLocked}
        >
          {isLocked ? (
            "Locked"
          ) : isCompleted ? (
            "Review Quest"
          ) : progress > 0 ? (
            <>
              <Play className="h-4 w-4 mr-2" />
              Continue Quest
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              Start Quest
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}
