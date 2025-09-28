"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Droplets, Recycle, TreePine, Zap, Globe, Sparkles, Play, ArrowRight } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [floatingIcons, setFloatingIcons] = useState([
    { id: 1, icon: Leaf, x: 10, y: 15, delay: 0, color: "eco-green", size: "large" },
    { id: 2, icon: Droplets, x: 85, y: 25, delay: 1, color: "eco-blue", size: "medium" },
    { id: 3, icon: Recycle, x: 75, y: 65, delay: 2, color: "gaming-neon", size: "small" },
    { id: 4, icon: TreePine, x: 20, y: 70, delay: 0.5, color: "eco-green", size: "medium" },
    { id: 5, icon: Globe, x: 90, y: 10, delay: 1.5, color: "eco-blue", size: "large" },
    { id: 6, icon: Sparkles, x: 5, y: 45, delay: 2.5, color: "gaming-neon", size: "small" },
    { id: 7, icon: Zap, x: 95, y: 55, delay: 1.8, color: "eco-green", size: "medium" },
  ])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-background to-eco-green/10 overflow-hidden">
      {floatingIcons.map(({ id, icon: Icon, x, y, delay, color, size }) => {
        const sizeClasses = {
          small: "h-8 w-8",
          medium: "h-12 w-12",
          large: "h-16 w-16",
        }
        const iconSizes = {
          small: "h-4 w-4",
          medium: "h-6 w-6",
          large: "h-8 w-8",
        }

        return (
          <div
            key={id}
            className="absolute animate-float-3d opacity-40"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animationDelay: `${delay}s`,
            }}
          >
            <div
              className={`${sizeClasses[size]} glassmorphism rounded-2xl flex items-center justify-center animate-glow-pulse border border-${color}/30`}
            >
              <Icon className={`${iconSizes[size]} text-${color}`} />
            </div>
          </div>
        )
      })}

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-slide-up">
            <div className="glassmorphism-strong px-6 py-3 rounded-full border border-eco-green/30">
              <span className="text-eco-green font-bold text-sm tracking-wider">🌱 NEXT-GEN ECO LEARNING</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight animate-slide-up">
            Master
            <br />
            <span className="bg-gradient-to-r from-eco-green via-gaming-neon to-eco-blue bg-clip-text text-transparent animate-gradient-shift">
              Environmental Science
            </span>
          </h1>

          <p
            className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto animate-slide-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Level up your environmental knowledge through immersive gaming experiences. Join the revolution of
            eco-conscious learners making real impact.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green/90 hover:to-eco-blue/90 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl card-3d group"
            >
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-2xl font-bold text-lg glassmorphism group bg-transparent"
            >
              Explore Features
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative mb-16">
            <div className="w-96 h-96 mx-auto relative animate-float-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-green/20 via-gaming-neon/10 to-eco-blue/20 rounded-full glassmorphism-strong animate-glow-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-eco-green/30 to-eco-blue/20 rounded-full flex items-center justify-center glassmorphism">
                <div className="w-56 h-56 bg-gradient-to-br from-eco-green/20 to-gaming-neon/20 rounded-full flex items-center justify-center border-4 border-eco-green/40 card-3d">
                  <Leaf className="w-28 h-28 text-eco-green animate-glow-pulse" />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-20 h-20 glassmorphism-strong rounded-full flex items-center justify-center animate-bounce border border-eco-blue/30">
                <Droplets className="w-10 h-10 text-eco-blue" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 glassmorphism-strong rounded-full flex items-center justify-center animate-bounce border border-gaming-neon/30"
                style={{ animationDelay: "0.5s" }}
              >
                <Recycle className="w-10 h-10 text-gaming-neon" />
              </div>
              <div
                className="absolute top-1/2 -left-8 w-16 h-16 glassmorphism rounded-full flex items-center justify-center animate-bounce border border-eco-green/30"
                style={{ animationDelay: "1s" }}
              >
                <TreePine className="w-8 h-8 text-eco-green" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div
            className="text-center animate-slide-up glassmorphism rounded-2xl p-8 card-3d"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-eco-green/30 to-eco-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <TreePine className="w-8 h-8 text-eco-green" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">50,000+</h3>
            <p className="text-gray-400 font-medium">Trees Planted</p>
          </div>

          <div
            className="text-center animate-slide-up glassmorphism rounded-2xl p-8 card-3d"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gaming-neon/30 to-gaming-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <Sparkles className="w-8 h-8 text-gaming-neon" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">1M+</h3>
            <p className="text-gray-400 font-medium">Learning Hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
