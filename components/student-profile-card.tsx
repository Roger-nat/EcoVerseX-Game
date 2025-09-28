import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Leaf, Zap, Trophy } from "lucide-react"

interface StudentProfileCardProps {
  name: string
  avatar?: string
  ecoPoints: number
  streak: number
  level: number
  progress: number
}

export function StudentProfileCard({ name, avatar, ecoPoints, streak, level, progress }: StudentProfileCardProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-eco-green/10 to-eco-blue/10 border-2 border-eco-green/20 hover:border-eco-green/40 transition-all duration-300 animate-pulse-glow">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-16 w-16 ring-4 ring-eco-green/30">
          <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="bg-eco-green text-white text-xl font-bold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-muted-foreground">Level {level} Eco Warrior</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Leaf className="h-4 w-4 text-eco-green" />
            <span className="text-2xl font-bold text-eco-green">{ecoPoints}</span>
          </div>
          <p className="text-xs text-muted-foreground">Eco Points</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Zap className="h-4 w-4 text-gaming-glow" />
            <span className="text-2xl font-bold text-gaming-glow">{streak}</span>
          </div>
          <p className="text-xs text-muted-foreground">Day Streak</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-2xl font-bold text-accent">{level}</span>
          </div>
          <p className="text-xs text-muted-foreground">Level</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress to Level {level + 1}</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      <div className="flex gap-2 mt-4">
        <Badge variant="secondary" className="bg-eco-green/20 text-eco-green border-eco-green/30">
          Tree Planter
        </Badge>
        <Badge variant="secondary" className="bg-eco-blue/20 text-eco-blue border-eco-blue/30">
          Water Saver
        </Badge>
      </div>
    </Card>
  )
}
