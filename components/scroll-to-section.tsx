"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function ScrollToSection() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasScrolled = useRef(false)
  const isProcessing = useRef(false)

  useEffect(() => {
    // Force scroll to top immediately when component mounts
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0)
    }

    // Prevent any scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    // Only handle hash-based scrolling after initial scroll prevention
    const handleHashScroll = () => {
      if (hasScrolled.current || isProcessing.current) return
      isProcessing.current = true

      const hash = window.location.hash
      if (hash && hash.length > 1) {
        const id = hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
            hasScrolled.current = true
            isProcessing.current = false
          }, 500)
        } else {
          isProcessing.current = false
        }
      }
      
      hasScrolled.current = true
    }

    // Delay hash scrolling to ensure initial scroll to top takes precedence
    setTimeout(handleHashScroll, 100)

    return () => {
      if (typeof window !== "undefined" && !window.location.hash) {
        sessionStorage.setItem("scrollPosition", "0")
      }
    }
  }, [pathname, searchParams])

  return null
}
