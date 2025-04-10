"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { PortfolioItemDetail } from "@/components/portfolio-item-detail"
import { Navbar } from "@/components/navbar"

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

export default function PortfolioDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [item, setItem] = useState<any>(null)

  useEffect(() => {
    if (!params || !params.id) {
      router.push("/portfolio")
      return
    }

    const id = Array.isArray(params.id) ? params.id[0] : params.id
    const foundItem = portfolioItems.find((item) => item.id === id)

    if (foundItem) {
      setItem(foundItem)
    } else {
      router.push("/portfolio")
    }
  }, [params, router])

  if (!item) {
    return (
      <div className="min-h-screen bg-obsidian">
        <Navbar />
        <div className="container mx-auto flex h-screen items-center justify-center px-4">
          <p className="text-prestige-gold">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <div className="pt-32">
        <PortfolioItemDetail
          title={item.title}
          category={item.category}
          description={item.description}
          features={item.features}
          technologies={item.technologies}
          imageUrl={item.image}
          websiteUrl={item.websiteUrl}
          onBack={() => router.push("/portfolio")}
        />
      </div>
    </div>
  )
}
