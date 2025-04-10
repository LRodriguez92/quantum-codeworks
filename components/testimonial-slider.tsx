"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    content:
      "Quantum Codeworks transformed our online presence with a stunning website that perfectly captures our brand's luxury aesthetic. The performance improvements have been remarkable.",
    author: "Alexandra Reynolds",
    position: "CEO, Luxury Estates International",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Working with Quantum Codeworks was a seamless experience from start to finish. Their attention to detail and commitment to excellence is unmatched in the industry.",
    author: "Jonathan Blackwell",
    position: "Director, Prestige Financial Services",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The team at Quantum Codeworks delivered beyond our expectations. Our new website has significantly increased our conversion rates and customer engagement.",
    author: "Victoria Chen",
    position: "Marketing Director, Elite Boutique",
    rating: 5,
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="overflow-hidden">
        <div
          className={cn("flex transition-transform duration-500 ease-in-out", isAnimating ? "opacity-80" : "")}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="min-w-full shrink-0 border-onyx-gray bg-transparent px-4">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex text-prestige-gold">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-prestige-gold" />
                  ))}
                </div>
                <p className="font-poppins mb-6 text-lg italic text-ivory">"{testimonial.content}"</p>
                <div>
                  <p className="font-arimo text-lg font-semibold text-prestige-gold">{testimonial.author}</p>
                  <p className="font-poppins text-sm text-metallic-silver">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-onyx-gray bg-obsidian text-prestige-gold transition-colors hover:border-prestige-gold hover:bg-prestige-gold/10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-onyx-gray bg-obsidian text-prestige-gold transition-colors hover:border-prestige-gold hover:bg-prestige-gold/10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setCurrentIndex(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              index === currentIndex ? "w-6 bg-prestige-gold" : "bg-onyx-gray hover:bg-prestige-gold/50",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
