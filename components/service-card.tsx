"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  price: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
}

export function ServiceCard({ icon, title, price, description, features, cta, featured = false }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Determine which plan this is
  const isFlatRate = title.includes("Flat Rate")
  const isMonthly = title.includes("Monthly")
  const isCustom = title.includes("Custom")

  // Check if features already include hosting information
  const hasHostingInfo = features.some(
    (feature) => feature.toLowerCase().includes("hosting") || feature.toLowerCase().includes("host"),
  )

  // Create a new array with all features plus additional notes based on plan type
  const displayFeatures = [...features]

  // Only add hosting information if it's not already included
  if (isFlatRate && !hasHostingInfo) {
    displayFeatures.push("Hosting available for $29/month")
  } else if (isCustom && !hasHostingInfo) {
    displayFeatures.push("Custom hosting solutions")
  }

  // Add an extra feature for Custom Development plan
  if (isCustom) {
    displayFeatures.push("Custom integrations with third-party services")
  }

  // Add support information for flat rate plan
  if (isFlatRate) {
    displayFeatures.push("Support available for $99/month")
  }

  // For monthly plan, only add hosting info if not already mentioned
  if (isMonthly) {
    // First, remove the items we want to reorder
    const filteredFeatures = displayFeatures.filter(
      (feature) =>
        ![
          "Hosting included",
          "Domain included",
          "Technical support",
          "Extensive minor edits",
          "12-month minimum contract",
        ].includes(feature) && !feature.includes("Hosting included at no extra cost"),
    )

    // Add the items in the desired order
    filteredFeatures.push("Hosting included")
    filteredFeatures.push("Domain included")
    filteredFeatures.push("Support included") // This will replace "Technical support"
    filteredFeatures.push("Extensive minor edits")
    filteredFeatures.push("12-month minimum contract")

    // Replace the original array with our reordered one
    displayFeatures.length = 0
    displayFeatures.push(...filteredFeatures)
  }

  // Create more concise descriptions that don't repeat bullet points
  const getUpdatedDescription = () => {
    if (isFlatRate) {
      return "One-time payment for a complete professional website."
    } else if (isMonthly) {
      return "Subscription-based plan with ongoing support and maintenance included."
    } else if (isCustom) {
      return "Custom solutions designed for your specific business needs."
    }
    return description
  }

  const handleSelectPlan = () => {
    // Create a message based on the selected plan
    const displayPrice = isFlatRate ? "$3,500" : price
    const message = `I'm interested in the ${title} plan (${displayPrice}) and would like to learn more.`

    // Store the message in sessionStorage
    sessionStorage.setItem("selectedPlanMessage", message)

    // Scroll to contact section
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })

      // After scrolling, find and update the message field
      setTimeout(() => {
        const messageField = document.getElementById("message") as HTMLTextAreaElement
        if (messageField) {
          // This will trigger any associated onChange handlers in the form
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype,
            "value",
          )?.set

          if (nativeInputValueSetter) {
            nativeInputValueSetter.call(messageField, message)

            // Dispatch an input event to ensure React form state is updated
            const inputEvent = new Event("input", { bubbles: true })
            messageField.dispatchEvent(inputEvent)

            // Focus the field
            messageField.focus()
          }
        }
      }, 1000) // Give time for the scroll to complete
    }
  }

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300 border-onyx-gray bg-obsidian flex flex-col",
        featured ? "border-prestige-gold shadow-[0_0_15px_rgba(207,175,109,0.3)]" : "",
        isHovered ? "transform scale-[1.02]" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute right-0 top-0">
          <div className="bg-prestige-gold px-4 py-1 text-xs font-semibold uppercase text-obsidian">Popular</div>
        </div>
      )}
      <CardHeader className="pb-4 text-center">
        <div
          className={cn(
            "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 gold-glow-hover",
            "bg-onyx-gray text-prestige-gold",
            isHovered ? "bg-prestige-gold text-obsidian" : "",
          )}
        >
          {icon}
        </div>
        <CardTitle className="font-arimo text-2xl font-semibold text-prestige-gold gold-glow-hover">{title}</CardTitle>
        <div className="mt-2 flex items-baseline justify-center">
          <span className="font-arimo text-3xl font-bold text-ivory">{isFlatRate ? "$3,500" : price}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-6 flex-grow">
        <CardDescription className="font-poppins mb-6 text-center text-metallic-silver">
          {getUpdatedDescription()}
        </CardDescription>
        <ul className="space-y-3">
          {displayFeatures.map((feature, index) => (
            <li key={index} className="font-poppins flex items-start">
              <span className="mr-3 mt-1 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-prestige-gold/20 text-prestige-gold">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-sm text-ivory">
                {isMonthly && feature === "5-page professional website"
                  ? "Same benefits of flat rate"
                  : feature === "Dedicated project manager"
                    ? "Access to project management tool"
                    : feature === "Technical support" || feature === "Support included"
                      ? "Support included"
                      : feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "w-full transition-all duration-300 font-poppins text-sm font-semibold uppercase tracking-wider btn-hover-effect",
            featured
              ? "bg-prestige-gold text-obsidian hover:bg-prestige-gold/90"
              : "bg-onyx-gray text-prestige-gold hover:bg-prestige-gold hover:text-obsidian",
          )}
          onClick={handleSelectPlan}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
