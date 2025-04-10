"use client"

import type React from "react"

import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useRef } from "react"

export function Footer() {
  const isMobile = !useMediaQuery("(min-width: 768px)")
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const lastClickTime = useRef(Date.now())

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services-section" },
    { name: "About", href: "/#about-section" },
    { name: "Portfolio", href: "/#portfolio-section" },
    { name: "FAQ", href: "/#faq-section" },
    { name: "Contact", href: "/#contact-section" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin", href: "#", comingSoon: true },
    { name: "GitHub", icon: "github", href: "#", comingSoon: true },
  ]

  const handleNavItemClick = (item: string, href: string, e: React.MouseEvent) => {
    e.preventDefault()

    // Record the click time to prevent scroll detection from overriding
    lastClickTime.current = Date.now()

    // Handle Home navigation specially
    if (item === "Home") {
      if (isHomePage) {
        // If already on home page, just scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        // If on another page, navigate to home page
        router.push("/")
      }
      return
    }

    // Handle other navigation items
    if (href.startsWith("#")) {
      // Direct hash link without page path
      const elementId = href.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (href.startsWith("/#")) {
      if (!isHomePage) {
        // If not on home page, navigate to home page first, then to the section
        router.push(href)
      } else {
        // If already on home page, just scroll to the section
        const elementId = href.substring(2)
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else {
      // For non-anchor links, just navigate
      router.push(href)
    }
  }

  return (
    <footer className="border-t border-onyx-gray bg-obsidian py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Left Section - Logo and Copyright */}
          <div
            className={cn(
              "flex flex-col items-start",
              isMobile && "w-full items-center", // Center logo on mobile
            )}
          >
            <div
              className={cn(
                "mb-4 w-[120px] cursor-pointer",
                isMobile && "mx-auto", // Center logo on mobile
              )}
              onClick={(e) => handleNavItemClick("Home", "/", e)}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quantum-gold-transparent-EdKV0yEOuegb4yhLN7yjBL7IZxoozW.png"
                alt="Quantum Codeworks Logo"
                width={120}
                height={30}
                className="w-full gold-glow-hover"
              />
            </div>
            {/* Copyright removed from here and moved to bottom */}
          </div>

          {/* Center Section - Navigation Links */}
          <nav
            className={cn(
              "flex",
              isMobile ? "w-full justify-center" : "flex-row space-x-6", // Center nav container on mobile
            )}
          >
            <div
              className={cn(
                isMobile ? "grid grid-cols-2 gap-x-8 gap-y-4 text-center" : "flex space-x-6", // 2 columns on mobile
              )}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavItemClick(link.name, link.href, e)}
                  className="font-poppins text-base text-ivory transition-all duration-300 hover:text-prestige-gold relative group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-prestige-gold transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* Right Section - Social Icons with Coming Soon Tooltips */}
          <TooltipProvider delayDuration={300}>
            <div
              className={cn(
                "flex items-center space-x-6",
                isMobile && "w-full justify-center mb-8", // Center social links on mobile and add bottom margin
              )}
            >
              {socialLinks.map((social) => (
                <Tooltip key={social.name}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "text-ivory transition-all duration-300",
                        social.comingSoon ? "opacity-40 cursor-not-allowed" : "hover:text-prestige-gold",
                        "touch-action-manipulation", // Improves touch behavior on mobile
                      )}
                      role="button"
                      tabIndex={0}
                      aria-label={`${social.name} (Coming Soon)`}
                    >
                      {social.icon === "linkedin" && (
                        <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {social.icon === "github" && (
                        <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span className="sr-only">{social.name}</span>
                    </div>
                  </TooltipTrigger>
                  {social.comingSoon && (
                    <TooltipContent side="top" className="bg-obsidian border border-prestige-gold/30">
                      <p className="text-prestige-gold text-xs">Coming Soon</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>

      {/* Full-width separator and centered copyright */}
      <div className="w-full border-t border-prestige-gold/30 pt-4 flex items-center justify-center">
        <p className="font-poppins text-sm text-ivory text-center">
          &copy; {new Date().getFullYear()} Quantum Codeworks. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
