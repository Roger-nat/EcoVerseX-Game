"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Upload, Sparkles, Zap } from "lucide-react"

export function UploadEcoTask() {
  const [isUploading, setIsUploading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 2000)
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-eco-green/5 to-eco-blue/5 border-2 border-eco-green/20">
      <div className="flex items-center gap-2 mb-4">
        <Camera className="h-5 w-5 text-eco-green" />
        <h3 className="text-lg font-bold">Share Your Eco Action</h3>
        {showSuccess && <Sparkles className="h-5 w-5 text-gaming-glow animate-spin" />}
      </div>

      {showSuccess ? (
        <div className="text-center py-8">
          <div className="h-16 w-16 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <Sparkles className="h-8 w-8 text-eco-green" />
          </div>
          <h4 className="text-xl font-bold text-eco-green mb-2">Awesome Work!</h4>
          <p className="text-muted-foreground mb-4">Your eco-action has been shared with the community</p>
          <div className="flex items-center justify-center gap-2 bg-gaming-glow/10 px-4 py-2 rounded-full">
            <Zap className="h-4 w-4 text-gaming-glow" />
            <span className="font-bold text-gaming-glow">+50 points earned!</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="task-title">What did you do?</Label>
            <Input id="task-title" placeholder="e.g., Planted a tree in my backyard" required className="mt-1" />
          </div>

          <div>
            <Label htmlFor="task-description">Tell us more about it</Label>
            <Textarea
              id="task-description"
              placeholder="Describe your environmental action and its impact..."
              required
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="task-category">Category</Label>
            <Select required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tree-planting">Tree Planting</SelectItem>
                <SelectItem value="recycling">Recycling</SelectItem>
                <SelectItem value="energy-saving">Energy Saving</SelectItem>
                <SelectItem value="water-conservation">Water Conservation</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="community">Community Action</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="task-image">Upload Photo (Optional)</Label>
            <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-eco-green hover:bg-eco-green/90" disabled={isUploading}>
            {isUploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Sharing...
              </>
            ) : (
              <>
                <Camera className="h-4 w-4 mr-2" />
                Share Eco Action
              </>
            )}
          </Button>
        </form>
      )}
    </Card>
  )
}
