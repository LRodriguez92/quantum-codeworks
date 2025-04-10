"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

interface PortfolioItemDetailProps {
  title: string
  category: string
  description: string
  features: string[]
  technologies: string[]
  imageUrl: string
  websiteUrl?: string
  onBack: () => void
}

// Helper function to bold the first 2-3 words of a feature
const formatFeature = (feature: string) => {
  const words = feature.split(" ")
  const boldWordCount = words.length >= 4 ? 3 : 2

  return (
    <>
      <span className="font-semibold">{words.slice(0, boldWordCount).join(" ")}</span>
      <span> {words.slice(boldWordCount).join(" ")}</span>
    </>
  )
}

export function PortfolioItemDetail({
  title,
  category,
  description,
  features,
  technologies,
  imageUrl,
  websiteUrl,
  onBack,
}: PortfolioItemDetailProps) {
  const [isImageHovered, setIsImageHovered] = useState(false)

  // Split description into bullet points if it's long enough
  const descriptionParagraphs =
    description.length > 150
      ? description
          .split(". ")
          .filter((sentence) => sentence.length > 0)
          .map((sentence) => (sentence.endsWith(".") ? sentence : `${sentence}.`))
      : [description]

  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="ghost" className="mb-8 text-prestige-gold hover:bg-prestige-gold/10" onClick={onBack}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Portfolio
      </Button>

      {/* Full-width image container */}
      <ScrollReveal>
        <div
          className="relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-lg border-2 border-prestige-gold"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isImageHovered ? "scale-105" : ""}`}
            style={{ objectPosition: "center" }}
            priority
            sizes="100vw"
          />
          {websiteUrl && (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-obsidian/70 transition-opacity duration-300 ${
                isImageHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-prestige-gold p-4 text-obsidian transition-transform hover:scale-110"
              >
                <ExternalLink className="h-6 w-6" />
              </Link>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Project title and description */}
      <ScrollReveal delay={100}>
        <div className="mb-20">
          {/* Enhanced title and category */}
          <div className="mb-8 border-l-4 border-prestige-gold pl-6">
            <h1 className="font-arimo text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-3 tracking-tight">
              {title}
            </h1>
            <span className="font-poppins text-sm md:text-base uppercase tracking-widest text-prestige-gold font-semibold">
              {category}
            </span>
          </div>

          {/* Enhanced description */}
          <div className="max-w-3xl mb-10">
            {descriptionParagraphs.length > 1 ? (
              <ul className="font-poppins space-y-3 text-metallic-silver text-lg leading-relaxed">
                {descriptionParagraphs.map((paragraph, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 text-prestige-gold">
                      <div className="h-2 w-2 rounded-full bg-prestige-gold"></div>
                    </span>
                    <span>{paragraph}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-poppins text-metallic-silver text-lg leading-relaxed">{description}</p>
            )}
          </div>

          {/* Enhanced CTA button */}
          {websiteUrl && (
            <div>
              <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-prestige-gold text-obsidian hover:bg-prestige-gold/90 btn-hover-effect px-8 py-6 text-base">
                  <span className="font-poppins font-semibold uppercase tracking-wider">Visit Website</span>
                  <ExternalLink className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Features and Technologies in two columns with enhanced separation */}
      <div className="grid gap-16">
        <ScrollReveal delay={200}>
          <div className="p-4">
            <h2 className="font-arimo mb-6 text-2xl font-semibold text-prestige-gold">Key Features</h2>
            <ul className="font-poppins grid grid-cols-1 md:grid-cols-2 gap-5 text-metallic-silver">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-4 mt-0.5 text-prestige-gold flex-shrink-0">
                    <Check className="h-[22px] w-[22px] gold-glow-hover" strokeWidth={3} />
                  </span>
                  <span className="text-base">
                    {feature === "Portfolio gallery with project showcases"
                      ? formatFeature("Portfolio gallery with project showcases and labels for filtering")
                      : formatFeature(feature)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
