"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services-section" },
  { name: "About", href: "#about-section" },
  { name: "Portfolio", href: "#portfolio-section" },
  { name: "FAQ", href: "#faq-section" },
  { name: "Contact", href: "#contact-section" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")
  const isMobile = !useMediaQuery("(min-width: 768px)")
  const lastClickTime = useRef(Date.now())
  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const isInitialLoad = useRef(true)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Reset active item to Home when navigating to a new page
  useEffect(() => {
    setActiveItem("Home")
  }, [pathname])

  // Only run scroll detection on the home page
  useEffect(() => {
    if (!isHomePage) return

    // Force initial state
    setActiveItem("Home")
    setScrolled(false)
    
    const handleScroll = () => {
      // Skip scroll detection if we just clicked a nav item (within last 1000ms)
      const now = Date.now()
      if (now - lastClickTime.current < 1000) return

      // Always update scrolled state for navbar appearance
      setScrolled(window.scrollY > 20)

      // Skip section detection on initial load
      if (isInitialLoad.current) {
        return
      }

      const scrollPosition = window.scrollY

      // Set Home as active when at the top
      if (scrollPosition < 100) {
        setActiveItem("Home")
        return
      }

      // Only start detecting sections after a delay from initial load
      if (!isInitialLoad.current) {
        const sections = navItems
          .filter((item) => item.href.startsWith("#"))
          .map((item) => ({
            id: item.href.replace("#", ""),
            name: item.name,
          }))

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          const element = document.getElementById(section.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            const isVisible = rect.top <= 100 && rect.bottom >= 100

            if (isVisible) {
              setActiveItem(section.name)
              break
            }
          }
        }
      }
    }

    // Add scroll listener with a delay
    const timer = setTimeout(() => {
      isInitialLoad.current = false
      window.addEventListener("scroll", handleScroll)
    }, 1000) // Longer delay before enabling scroll detection

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isHomePage])

  const handleNavItemClick = (item: string, href: string) => {
    // Set the active item immediately
    setActiveItem(item)
    setIsOpen(false)

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
      if (!isHomePage) {
        // If not on home page, navigate to home page first, then to the section
        router.push(`/${href}`)
      } else {
        // If already on home page, just scroll to the section
        const element = document.getElementById(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else if (href.startsWith("/#")) {
      if (!isHomePage) {
        // If not on home page, navigate to home page first, then to the section
        router.push(href)
      } else {
        // If already on home page, just scroll to the section
        const element = document.getElementById(href.substring(2))
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isMobile
          ? scrolled
            ? "bg-obsidian/70 backdrop-blur-md shadow-lg py-6" // Mobile scrolled
            : "bg-obsidian py-8" // Mobile not scrolled
          : scrolled
            ? "bg-obsidian/70 backdrop-blur-md shadow-lg py-2" // Desktop scrolled
            : "bg-obsidian py-4", // Desktop not scrolled
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => handleNavItemClick("Home", "/")} className="relative z-50 cursor-pointer">
            {isMobile ? (
              <div className="font-montserrat text-xl font-bold text-prestige-gold filter drop-shadow(0 0 8px rgba(222, 197, 91, 0.6))">
                Quantum Codeworks
              </div>
            ) : (
              <div className="transition-all duration-300 gold-glow-hover">
                <Image
                  src="/logo-transparent.png"
                  alt="Quantum Codeworks"
                  width={360}
                  height={90}
                  className="h-[90px] w-auto"
                />
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className={cn(
                    "font-poppins text-sm uppercase tracking-wider font-semibold transition-colors duration-300",
                    activeItem === item.name ? "text-prestige-gold" : "text-ivory hover:text-prestige-gold",
                  )}
                  onClick={() => handleNavItemClick(item.name, item.href)}
                  aria-label={item.name}
                >
                  {item.name}
                </button>
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-prestige-gold transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-100"></div>
                {activeItem === item.name && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-prestige-gold shadow-[0_0_5px_2px_rgba(222,197,91,0.5)]"></div>
                )}
              </div>
            ))}
            <Button
              className="bg-prestige-gold text-obsidian hover:bg-prestige-gold/90 rounded-lg px-6 py-2 font-poppins text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => handleNavItemClick("Contact", "#contact-section")}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 text-prestige-gold transition-colors duration-300 filter drop-shadow(0 0 8px rgba(222, 197, 91, 0.6))"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-obsidian/95 backdrop-blur-lg z-40 md:hidden"
            style={{
              position: "fixed",
              height: "100vh",
              width: "100vw",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="flex flex-col items-center justify-between h-full py-24">
              {/* Logo at the top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center w-full"
              >
                <div className="w-48">
                  <Image
                    src="/logo-transparent.png"
                    alt="Quantum Codeworks"
                    width={200}
                    height={200}
                    className="w-full gold-glow-hover"
                  />
                </div>
              </motion.div>

              {/* Navigation items in the middle */}
              <nav className="flex flex-col items-center space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative"
                  >
                    <button
                      className="font-poppins text-lg uppercase tracking-wider font-semibold transition-colors duration-300 text-prestige-gold filter drop-shadow(0 0 8px rgba(222, 197, 91, 0.6))"
                      onClick={() => handleNavItemClick(item.name, item.href)}
                      aria-label={item.name}
                    >
                      {item.name}
                    </button>
                    {activeItem === item.name && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-prestige-gold shadow-[0_0_5px_2px_rgba(222,197,91,0.5)]"></div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Button at the bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navItems.length * 0.1 }}
              >
                <Button
                  className="bg-prestige-gold text-obsidian hover:bg-prestige-gold/90 rounded-lg px-8 py-3 font-poppins text-sm uppercase tracking-wider font-semibold transition-all duration-300 scale-105"
                  onClick={() => handleNavItemClick("Contact", "#contact-section")}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
