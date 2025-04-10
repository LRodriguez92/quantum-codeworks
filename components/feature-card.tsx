"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "border-onyx-gray bg-transparent transition-all duration-300",
        isHovered ? "border-prestige-gold shadow-[0_0_15px_rgba(207,175,109,0.2)] transform scale-[1.02]" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div
          className={cn(
            "mb-4 text-prestige-gold transition-all duration-300 gold-glow-hover",
            isHovered ? "transform scale-110" : "",
          )}
        >
          {icon}
        </div>
        <CardTitle className="font-poppins text-xl font-medium text-ivory">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="font-poppins text-metallic-silver">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
