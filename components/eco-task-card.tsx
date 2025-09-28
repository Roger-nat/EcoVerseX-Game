"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, CheckCircle, Zap, Sparkles } from "lucide-react"
import { useState } from "react"

interface EcoTaskCardProps {
  id: string
  user: {
    name: string
    avatar?: string
    level: number
  }
  task: {
    title: string
    description: string
    category: "Tree Planting" | "Recycling" | "Energy Saving" | "Water Conservation" | "Transportation" | "Community"
    points: number
  }
  image?: string
  timestamp: string
  likes: number
  comments: number
  isLiked?: boolean
  isVerified?: boolean
  isNew?: boolean
}

export function EcoTaskCard({
  id,
  user,
  task,
  image,
  timestamp,
  likes,
  comments,
  isLiked = false,
  isVerified = false,
  isNew = false,
}: EcoTaskCardProps) {
  const [liked, setLiked] = useState(isLiked)
  const [likeCount, setLikeCount] = useState(likes)
  const [showSparkles, setShowSparkles] = useState(false)

  const categoryColors = {
    "Tree Planting": "bg-eco-green/20 text-eco-green border-eco-green/30",
    Recycling: "bg-eco-blue/20 text-eco-blue border-eco-blue/30",
    "Energy Saving": "bg-gaming-glow/20 text-gaming-glow border-gaming-glow/30",
    "Water Conservation": "bg-eco-blue/20 text-eco-blue border-eco-blue/30",
    Transportation: "bg-gaming-neon/20 text-gaming-neon border-gaming-neon/30",
    Community: "bg-gaming-glow/20 text-gaming-glow border-gaming-glow/30",
  }

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
    if (!liked) {
      setShowSparkles(true)
      setTimeout(() => setShowSparkles(false), 1000)
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-card to-muted/20 border-2 hover:border-primary/20">
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="bg-primary/20 text-primary font-bold text-sm">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm">{user.name}</h3>
              <Badge variant="secondary" className="text-xs">
                Level {user.level}
              </Badge>
              {isVerified && <CheckCircle className="h-4 w-4 text-eco-green" />}
            </div>
            <p className="text-xs text-muted-foreground">{timestamp}</p>
          </div>

          {isNew && <Badge className="bg-gaming-glow text-white border-0 animate-pulse text-xs">NEW</Badge>}
        </div>
      </div>

      {/* Task Info */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-bold text-foreground">{task.title}</h4>
          <Badge variant="secondary" className={categoryColors[task.category]}>
            {task.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{task.description}</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-eco-green/10 px-2 py-1 rounded-full">
            <Zap className="h-3 w-3 text-eco-green" />
            <span className="text-xs font-bold text-eco-green">+{task.points} points</span>
          </div>
          {showSparkles && <Sparkles className="h-4 w-4 text-gaming-glow animate-spin" />}
        </div>
      </div>

      {/* Image */}
      {image && (
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={task.title} className="w-full h-48 object-cover" />
          {isVerified && (
            <div className="absolute top-3 right-3 bg-eco-green/90 backdrop-blur-sm rounded-full p-2">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="p-4 pt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center gap-2 hover:bg-transparent ${
                liked ? "text-red-500" : "text-muted-foreground"
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span className="text-sm">{likeCount}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-muted-foreground hover:bg-transparent"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{comments}</span>
            </Button>

            <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-transparent">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <Button size="sm" variant="outline" className="text-xs bg-transparent">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  )
}
