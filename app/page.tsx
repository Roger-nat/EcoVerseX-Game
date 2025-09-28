"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Users,
  Target,
  Leaf,
  TreePine,
  Star,
  Globe,
  Award,
  Play,
  Home,
  Heart,
  Gamepad2,
  TrendingUp,
  Settings,
  Search,
  Bell,
  User,
  Trash2,
  Building2,
  Battery,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HomePage() {
  const pathname = usePathname()

  const navigationItems = [
    { icon: Home, href: "/", label: "Home", color: "eco-green" },
    { icon: Heart, href: "/community", label: "Community", color: "white" },
    { icon: Gamepad2, href: "/games", label: "Games", color: "white" },
    { icon: TrendingUp, href: "/learning", label: "Learning", color: "white" },
    { icon: Trophy, href: "/achievements", label: "Achievements", color: "white" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-r border-white/10 z-50">
          <div className="flex flex-col items-center py-6 space-y-6">
            {/* Logo */}
            <Link href="/" className="group">
              <div className="h-12 w-12 bg-gradient-to-br from-eco-green to-eco-blue rounded-2xl flex items-center justify-center animate-glow-pulse group-hover:scale-110 transition-all duration-300">
                <Leaf className="h-7 w-7 text-white" />
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <Link key={item.href} href={item.href} className="group">
                    <div
                      className={`h-12 w-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                        isActive
                          ? "bg-eco-green/20 border border-eco-green/40"
                          : "bg-white/5 hover:bg-white/10 hover:scale-110"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-eco-green/20 to-eco-blue/20 rounded-xl animate-pulse"></div>
                      )}
                      <Icon
                        className={`h-6 w-6 relative z-10 transition-all duration-300 ${
                          isActive
                            ? "text-eco-green scale-110"
                            : "text-gray-400 group-hover:text-white group-hover:scale-110"
                        }`}
                      />

                      <div className="absolute left-16 bg-gray-900/95 backdrop-blur-xl text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10">
                        {item.label}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/95 rotate-45 border-l border-b border-white/10"></div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Bottom Items */}
            <div className="flex-1"></div>
            <div className="flex flex-col space-y-4">
              <Link href="/leaderboard" className="group">
                <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/10 hover:scale-110 transition-all duration-300 group relative">
                  <Settings className="h-6 w-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />

                  <div className="absolute left-16 bg-gray-900/95 backdrop-blur-xl text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10">
                    Leaderboard
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900/95 rotate-45 border-l border-b border-white/10"></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-20">
          {/* Top Navigation */}
          <nav className="fixed top-0 right-0 left-20 z-40 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-black text-white">EcoVerseX</h1>
                  <Badge className="bg-eco-green/20 text-eco-green border-eco-green/30 font-bold">Level 7</Badge>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-eco-green/50 transition-colors"
                    />
                  </div>
                  <div className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300">
                    <Bell className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="h-10 w-10 bg-gradient-to-br from-eco-green to-eco-blue rounded-xl flex items-center justify-center cursor-pointer">
                    <User className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="pt-20 p-6">
            {/* Welcome Section */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Main Welcome Card */}
              <div className="lg:col-span-2 glassmorphism-strong rounded-3xl p-8 border border-eco-green/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-eco-green/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-eco-green/30 to-eco-green/10 rounded-2xl flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-eco-green" />
                    </div>
                    <Badge className="bg-eco-green/20 text-eco-green border-eco-green/30 font-bold">
                      Welcome Back!
                    </Badge>
                  </div>
                  <h2 className="text-4xl font-black text-white mb-3">
                    Ready to Save
                    <br />
                    <span className="bg-gradient-to-r from-eco-green to-gaming-neon bg-clip-text text-transparent">
                      The Planet?
                    </span>
                  </h2>
                  <p className="text-gray-400 mb-6 text-lg">
                    Continue your environmental learning journey and unlock new achievements
                  </p>
                  <Link href="/learning">
                    <Button className="bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green/90 hover:to-eco-blue/90 text-white font-bold px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-300">
                      <Play className="h-5 w-5 mr-2" />
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="space-y-6">
                <div className="glassmorphism-strong rounded-2xl p-6 border border-eco-blue/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-eco-blue/30 to-eco-blue/10 rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6 text-eco-blue" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-eco-blue">24</div>
                      <div className="text-sm text-gray-400">Lessons</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">Completed this month</div>
                </div>

                <div className="glassmorphism-strong rounded-2xl p-6 border border-gaming-neon/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-gaming-neon/30 to-gaming-neon/10 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-gaming-neon" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-gaming-neon">8</div>
                      <div className="text-sm text-gray-400">Badges</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">New achievements</div>
                </div>
              </div>
            </div>

            {/* Gaming Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Recycling Master",
                  description: "Sort waste like a pro",
                  icon: Trash2,
                  color: "eco-green",
                  players: "2.4K",
                  image: "/recycling-game-interface.jpg",
                  href: "/games",
                },
                {
                  title: "Eco-City Builder",
                  description: "Build sustainable cities",
                  icon: Building2,
                  color: "eco-blue",
                  players: "1.8K",
                  image: "/eco-city-building-game.jpg",
                  href: "/games",
                },
                {
                  title: "Green Energy Quest",
                  description: "Power the future",
                  icon: Battery,
                  color: "gaming-neon",
                  players: "3.2K",
                  image: "/green-energy-game.jpg",
                  href: "/games",
                },
                {
                  title: "Climate Guardian",
                  description: "Protect our planet",
                  icon: Shield,
                  color: "eco-green",
                  players: "1.5K",
                  image: "/climate-protection-game.jpg",
                  href: "/games",
                },
              ].map((game, index) => (
                <Link key={index} href={game.href}>
                  <div className="glassmorphism-strong rounded-2xl overflow-hidden cursor-pointer group border border-white/10 hover:border-eco-green/40 transition-all duration-300 card-3d hover:scale-105">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span className="text-xs font-bold">{game.players}</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-eco-green to-eco-blue hover:from-eco-green/90 hover:to-eco-blue/90 text-white font-bold text-xs px-3 py-1"
                          >
                            Play
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`h-8 w-8 bg-gradient-to-br from-${game.color}/30 to-${game.color}/10 rounded-lg flex items-center justify-center`}
                        >
                          <game.icon className={`h-4 w-4 text-${game.color}`} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">{game.title}</h3>
                          <p className="text-xs text-gray-400">{game.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glassmorphism-strong rounded-2xl p-6 border border-eco-green/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-eco-green/30 to-eco-green/10 rounded-xl flex items-center justify-center">
                    <TreePine className="h-6 w-6 text-eco-green" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">50K+</div>
                    <div className="text-sm text-gray-400">Trees Planted</div>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-eco-green to-eco-blue rounded-full"></div>
                </div>
              </div>

              <div className="glassmorphism-strong rounded-2xl p-6 border border-gaming-neon/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-gaming-neon/30 to-gaming-neon/10 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-gaming-neon" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">1M+</div>
                    <div className="text-sm text-gray-400">Learning Hours</div>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-gaming-neon to-eco-green rounded-full"></div>
                </div>
              </div>

              <div className="glassmorphism-strong rounded-2xl p-6 border border-eco-blue/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-eco-blue/30 to-eco-blue/10 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-eco-blue" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">892</div>
                    <div className="text-sm text-gray-400">Impact Score</div>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-5/6 bg-gradient-to-r from-eco-blue to-gaming-neon rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
