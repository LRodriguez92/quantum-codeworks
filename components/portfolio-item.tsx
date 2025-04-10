"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Eye } from "lucide-react"

interface PortfolioItemProps {
  image: string
  title: string
  category: string
}

export function PortfolioItem({ image, title, category }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 border-2 border-transparent transition-all duration-300 z-10",
          isHovered ? "border-prestige-gold" : "",
        )}
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={600}
          className={cn(
            "h-full w-full object-cover transition-all duration-500",
            isHovered ? "scale-110 filter brightness-50" : "",
          )}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-300",
            isHovered ? "opacity-100" : "",
          )}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-prestige-gold text-obsidian">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="font-arimo text-xl font-semibold text-ivory">{title}</h3>
          <p className="font-poppins text-sm text-prestige-gold">{category}</p>
        </div>
      </div>
    </div>
  )
}
