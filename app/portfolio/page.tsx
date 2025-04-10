"use client"

import { useState } from "react"
import { PortfolioItem } from "@/components/portfolio-item"
import { PortfolioItemDetail } from "@/components/portfolio-item-detail"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Navbar } from "@/components/navbar"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const portfolioItems = [
  {
    id: "home-design-center",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hdc-TkNATF98Hxm5XB2Cj40fF5uEYOF7Rf.png",
    title: "The Home Design Center",
    category: "Remodeling Service",
    description:
      "A premium website for a high-end kitchen and bath remodeling service. The design focuses on showcasing the client's exceptional craftsmanship and attention to detail, with a clean, modern aesthetic that appeals to their upscale clientele.",
    features: [
      "Responsive design optimized for all devices",
      "Elegant hero section with compelling call-to-action",
      "Portfolio gallery with project showcases",
      "Admin dashboard for uploading and labeling project photos",
      "Testimonial carousel featuring client reviews",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React", "Responsive Design", "SEO Optimization"],
    websiteUrl: "https://hdckitchenandbath.com/",
  },
  {
    id: "ugc-vessup",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sLtKW6TBmtt4X7q2VWrmsPrczpa79o.png",
    title: "Carlos Vessup",
    category: "Content Creator",
    description:
      "A sleek, modern website for a professional UGC creator and content partner specializing in helping brands increase sales through high-quality, relatable content. The minimalist design with striking visuals emphasizes the creator's professional image and services.",
    features: [
      "Elegant dark mode design with professional aesthetics",
      "Responsive layout optimized for all devices",
      "Strategic content placement highlighting key services",
      "Professional portfolio showcase with video integration",
      "Streamlined contact system for business inquiries",
      "Brand-focused messaging that emphasizes results",
    ],
    technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS", "Video Integration", "Responsive Design"],
    websiteUrl: "https://ugcvessup.com/",
  },
  {
    id: "elegant-spaces",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKXlohqNB2vndHXaWSDIEPURICwIbK.png",
    title: "Elegant Spaces",
    category: "Interior Design",
    description:
      "A sophisticated concept website for a premium interior design studio. The clean, minimalist design showcases a fictional portfolio with an emphasis on elegant aesthetics and functionality.",
    features: [
      "Minimalist gallery with project showcases",
      "Clean, modern user interface",
      "Responsive design for all devices",
      "Client testimonial section",
      "Design philosophy presentation",
      "Contact form for inquiries",
    ],
    technologies: ["React", "Gatsby", "GSAP", "Styled Components", "Responsive Design"],
    websiteUrl: "https://elegant-spaces.netlify.app/",
  },
]

export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const router = useRouter()

  const selectedItemData = portfolioItems.find((item) => item.id === selectedItem)

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />

      <div className="pt-32">
        {selectedItem ? (
          <PortfolioItemDetail
            title={selectedItemData!.title}
            category={selectedItemData!.category}
            description={selectedItemData!.description}
            features={selectedItemData!.features}
            technologies={selectedItemData!.technologies}
            imageUrl={selectedItemData!.image}
            websiteUrl={selectedItemData!.websiteUrl}
            onBack={() => setSelectedItem(null)}
          />
        ) : (
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="mb-16 text-center">
                <h1 className="font-arimo mb-4 text-4xl font-bold text-prestige-gold gold-glow-hover md:text-5xl">
                  Our Portfolio
                </h1>
                <p className="font-poppins mx-auto max-w-2xl text-lg text-metallic-silver">
                  Explore our collection of premium websites crafted for discerning clients.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={100 * index}>
                  <div onClick={() => setSelectedItem(item.id)} className="cursor-pointer">
                    <PortfolioItem image={item.image} title={item.title} category={item.category} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky "Back to Site" Button */}
      <div className="fixed bottom-8 left-8 z-40">
        <Button
          onClick={() => router.push("/")}
          className={cn(
            "bg-prestige-gold text-obsidian hover:bg-prestige-gold/90 rounded-full px-6 py-6 shadow-lg transition-all duration-300",
            "hover:shadow-[0px_4px_12px_rgba(222,197,91,0.4)]",
          )}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="font-poppins text-sm font-semibold">Back to Site</span>
        </Button>
      </div>
    </div>
  )
}
