"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// FAQ data organized by categories with detailed information from the documents
const faqData = [
  {
    category: "General Questions",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "We offer web development services with three pricing plans:\n\n" +
          "• **Flat Rate Plan ($3,500 + $29/mo for hosting)** – One-time payment for a 5-page website with optional add-ons.\n\n" +
          "• **Monthly Plan ($249/month, 12-Month Minimum Commitment)** – Subscription-based plan with ongoing support, minor edits, hosting, and a domain included.\n\n" +
          "• **Custom Plan** – Fully customized solutions based on project needs with pricing determined on a project-by-project basis and outlined in a signed agreement.",
      },
      {
        question: "Who are these services for?",
        answer:
          "Our services cater to small to medium businesses looking for a professionally built website with options for ongoing support and maintenance. We specialize in creating premium, high-performance websites for brands that demand excellence and a luxury aesthetic.",
      },
      {
        question: "What is included in the Monthly Plan?",
        answer:
          "The Monthly Plan ($249/month) includes:\n\n" +
          "• 5-page website\n" +
          "• Hosting included\n" +
          "• Extensive minor edits\n" +
          "• Technical support\n" +
          "• Basic on-page SEO\n" +
          "• Google Analytics setup\n" +
          "• Regular contact form\n" +
          "• Domain included (standard domains only)\n" +
          "• 12-month minimum contract\n\n" +
          "Additional add-ons are available for extra costs.",
      },
      {
        question: "What happens if I need more than 5 pages?",
        answer:
          "Additional pages are available for $149 per page as an add-on to any of our plans. This allows you to expand your website beyond the standard 5-page package while maintaining the same premium design quality and consistency.",
      },
      {
        question: "Do you offer e-commerce solutions?",
        answer:
          "At this time, we do not offer e-commerce website development. Our focus is on creating high-quality informational and service-based websites for businesses that want to establish a strong online presence without the complexities of an online store.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        question: "What are your payment terms?",
        answer:
          "Our payment terms vary by plan:\n\n" +
          "• **Flat Rate Plan ($3,500)**: 50% upfront payment before work begins, with the remaining 50% due upon project completion before the website goes live.\n\n" +
          "• **Monthly Plan ($249/month)**: First month's payment required upfront with a 12-month minimum commitment. Payments are charged automatically every month via your chosen payment method.\n\n" +
          "• **Custom Plan**: Payment schedule determined based on project scope and detailed in the signed agreement.",
      },
      {
        question: "What happens if I miss a payment?",
        answer:
          "We have a clear missed payments policy:\n\n" +
          "1. **First Missed Payment (7-Day Grace Period)**: You'll receive a payment reminder with a 7-day grace period to make the payment.\n\n" +
          "2. **Second Missed Payment (Website Suspension)**: If payment is not made within 14 days of the original due date, your website will be temporarily suspended until full payment is received.\n\n" +
          "3. **Third Missed Payment (Termination)**: If payment is not received within 30 days of the original due date, your website will be permanently taken offline, and the contract is considered breached. You must pay the remaining balance of the contract to regain access.\n\n" +
          "This policy also applies to any monthly add-ons.",
      },
      {
        question: "What happens if I stop paying?",
        answer:
          "If you stop paying, your website and services will be suspended after 14 days and permanently removed after 30 days of non-payment. For Monthly Plan clients, if you cancel before completing the 12-month minimum commitment, you'll need to pay the remaining balance of the contract in full to retain access to your website files or to transfer your domain.",
      },
      {
        question: "Is hosting included in the price?",
        answer:
          "• **Flat Rate Plan**: Hosting is required at $29/month once the website is ready to go live.\n\n" +
          "• **Monthly Plan**: Hosting is included in the $249/month subscription fee.\n\n" +
          "• **Custom Plan**: Hosting arrangements will be specified in your individual agreement.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "• **Flat Rate Plan**: No refunds are offered once the project has started.\n\n" +
          "• **Monthly Plan**: No refunds are provided for previously paid months; cancellations stop future billing.\n\n" +
          "• **Custom Plan**: Refunds are subject to the specific agreement and the stage of project completion.",
      },
    ],
  },
  {
    category: "Website Edits & Support",
    items: [
      {
        question: "What counts as a 'minor edit'?",
        answer:
          "Extensive minor edits within the Monthly Plan (and as part of the Extensive Minor Edits + Technical Support add-on) are defined as changes to existing content that take no longer than 30 minutes per request and a total of up to 2 hours per month.\n\n" +
          "**Includes**:\n" +
          "• Text changes on existing pages\n" +
          "• Image swaps (client-provided images)\n" +
          "• Updating contact information\n\n" +
          "**Excludes**:\n" +
          "• Creating new pages\n" +
          "• Redesigning sections of the website\n" +
          "• Adding new features or functionality\n" +
          "• Custom code modifications\n" +
          "• Anything taking longer than 30 minutes per request\n\n" +
          "We reserve the right to refuse requests that are excessive or outside the scope of minor edits under a 'Fair Use' clause.",
      },
      {
        question: "What if I need major changes?",
        answer:
          "Major changes, such as layout redesigns, additional features, or custom functionality, are billed at $150/hour or at a fixed price based on scope.\n\n" +
          "All change requests must be submitted in writing (email is acceptable) and must clearly detail the desired changes. Any approved change requests may impact the project timeline, and a revised timeline will be provided upon approval.\n\n" +
          "No work on change requests will commence until you have approved the cost and timeline impact in writing.",
      },
      {
        question: "Is technical support included?",
        answer:
          "• **Monthly Plan**: Technical support is included in the $249/month fee.\n\n" +
          "• **Flat Rate Plan**: Technical support is not included but can be added as an add-on for $99/month (includes extensive minor edits + technical support).\n\n" +
          "• **Custom Plan**: Technical support is included as specified in your agreement.\n\n" +
          "Technical support includes troubleshooting issues with your website, fixing bugs, and ensuring your website remains functional and secure.",
      },
      {
        question: "What are my responsibilities as a client?",
        answer:
          "As a client, you have several responsibilities:\n\n" +
          "• Provide all necessary content (text, images, logos, etc.) before development starts\n" +
          "• Approve designs, revisions, and final deliverables within specified timeframes\n" +
          "• Respond to communications in a timely manner\n" +
          "• Provide feedback that is clear and actionable\n\n" +
          "Failure to provide required materials within 30 days of request may result in project suspension or additional fees.",
      },
    ],
  },
  {
    category: "Domains & Hosting",
    items: [
      {
        question: "Is a domain included?",
        answer:
          "• **Monthly Plan**: A domain is included with no renewal fees (standard domains only; premium domains may require an additional fee).\n\n" +
          "• **Flat Rate Plan**: Domain purchase is available as an add-on, with pricing ranging from $25-$60/year based on registrar pricing, or you can purchase and manage it independently.",
      },
      {
        question: "Can I transfer my domain if I cancel my plan?",
        answer:
          "• **Flat Rate Clients**: Can transfer their domain anytime for a $25 transfer fee.\n\n" +
          "• **Monthly Plan Clients**: Must complete at least 12 months to transfer for free. If canceled early, you must pay the remaining balance of the contract to retain ownership and transfer the domain.",
      },
      {
        question: "What does hosting include?",
        answer:
          "Our hosting service includes:\n\n" +
          "• Server maintenance\n" +
          "• Uptime monitoring\n" +
          "• Security updates and patches\n" +
          "• Regular backups\n" +
          "• Basic performance optimization\n\n" +
          "Hosting does not include unlimited custom changes or redesigns. Our hosting ensures your website remains fast, secure, and accessible 24/7.",
      },
      {
        question: "Can I move my website to another hosting provider?",
        answer:
          "Yes, but we only provide the necessary files and are not responsible for third-party hosting setups. If you wish to move your website elsewhere, we will provide the necessary files to facilitate the transfer, but the setup and configuration on the new hosting provider will be your responsibility.",
      },
    ],
  },
  {
    category: "Ownership & Add-Ons",
    items: [
      {
        question: "Do I get ownership of my website if I cancel?",
        answer:
          "• **Flat Rate Clients**: Fully own their website after full payment.\n\n" +
          "• **Monthly Plan Clients**: Must continue the subscription to retain access; if canceled, the design/code remains with us.\n\n" +
          "The website design and development code remains our intellectual property until full payment is received. Once fully paid, clients receive full ownership of their website content and design.",
      },
      {
        question: "What add-ons are available?",
        answer:
          "Available add-ons include:\n\n" +
          "• Hosting: $29/month (Required for Flat Rate Plan)\n" +
          "• Extensive minor edits + Technical Support (for Flat Rate Plan): $99/month\n" +
          "• Additional pages: $149 per page\n" +
          "• Blog setup: $499\n" +
          "• Domain purchase (Flat Rate only): $20/year\n" +
          "• Advanced Performance Optimization (One-Time for Flat Rate Plan): $499",
      },
      {
        question: "Do you offer SEO or marketing services?",
        answer:
          "We provide basic on-page SEO which includes:\n\n" +
          "• Title tag optimization\n" +
          "• Meta description optimization\n" +
          "• Header tag (H1-H6) optimization\n" +
          "• Image alt text optimization for client-provided images\n\n" +
          "However, we do not offer off-page SEO or marketing services. Our basic SEO package excludes keyword research, content creation, link building, and technical SEO audits.",
      },
      {
        question: "What is your approach to design?",
        answer:
          "Our design approach follows the Quantum Codeworks Style Guide, which emphasizes:\n\n" +
          "• Luxury, high-end feel with premium aesthetics\n" +
          "• Clean, elegant typography\n" +
          "• Sophisticated visual elements\n" +
          "• Mobile-first design principles\n" +
          "• Strategic use of space and contrast\n\n" +
          "We prioritize speed, SEO, accessibility, and a premium UX experience to ensure your website passes Lighthouse audits and provides an exceptional user experience across all devices.",
      },
    ],
  },
  {
    category: "Cancellation & Termination",
    items: [
      {
        question: "Can I cancel my Monthly Plan?",
        answer:
          "Yes, you can cancel your Monthly Plan after completing the 12-month minimum commitment with 30 days' notice. If you cancel before completing the 12-month minimum commitment, you'll be required to pay the remaining balance of the contract in full.",
      },
      {
        question: "What happens to my website if I cancel?",
        answer:
          "• **Flat Rate Clients**: Who have paid in full retain full ownership of their website.\n\n" +
          "• **Monthly Plan Clients**: If you cancel your subscription, you lose access to your website as the design and code remain with us. To retain access after cancellation, you would need to negotiate a transfer fee or purchase arrangement.",
      },
      {
        question: "Are there any termination fees?",
        answer:
          "If you terminate a Monthly Plan before the 12-month minimum commitment period, you'll be responsible for paying the remaining balance of the contract. For Custom Plans, termination fees will be specified in your individual agreement.",
      },
      {
        question: "How do I initiate cancellation?",
        answer:
          "To initiate cancellation:\n\n" +
          "1. Provide written notice (email is acceptable) at least 30 days before your intended cancellation date\n" +
          "2. For Monthly Plan clients, this can only be done after completing the 12-month minimum commitment\n" +
          "3. We'll provide confirmation of your cancellation request\n" +
          "4. We'll outline any final payments or transfer procedures that may apply",
      },
    ],
  },
]

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const tabsContainerRef = useRef<HTMLDivElement>(null)

  // Get the last category name for our special check
  const lastCategoryName = faqData[faqData.length - 1].category

  // Check if scroll arrows should be shown
  const checkScrollArrows = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current

      // Show left arrow if scrolled to the right
      setShowLeftArrow(scrollLeft > 0)

      // Check if the last category button is visible
      const lastCategoryButton = tabsContainerRef.current.querySelector(
        `[data-category="${lastCategoryName}"]`,
      ) as HTMLElement

      if (lastCategoryButton) {
        const containerRect = tabsContainerRef.current.getBoundingClientRect()
        const buttonRect = lastCategoryButton.getBoundingClientRect()

        // If the last button is fully visible, hide the right arrow
        const isLastCategoryVisible = buttonRect.right <= containerRect.right + 5 // Adding small buffer for precision

        setShowRightArrow(!isLastCategoryVisible)
      } else {
        // Fallback to the previous calculation if button not found
        const isAtEnd = Math.floor(scrollLeft + clientWidth) >= Math.floor(scrollWidth - 1)
        setShowRightArrow(!isAtEnd)
      }
    }
  }

  // Initialize scroll arrows on mount and window resize
  useEffect(() => {
    checkScrollArrows()

    const handleResize = () => {
      // Add a small delay to ensure DOM has updated
      setTimeout(checkScrollArrows, 100)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update scroll arrows when scrolling
  useEffect(() => {
    const tabsContainer = tabsContainerRef.current
    if (tabsContainer) {
      const handleScroll = () => {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(checkScrollArrows)
      }

      tabsContainer.addEventListener("scroll", handleScroll)
      return () => tabsContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Scroll left
  const scrollLeft = () => {
    if (tabsContainerRef.current) {
      const scrollAmount = tabsContainerRef.current.clientWidth * 0.6
      tabsContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      })

      // Check arrows after scrolling completes
      setTimeout(checkScrollArrows, 500)
    }
  }

  // Scroll right
  const scrollRight = () => {
    if (tabsContainerRef.current && showRightArrow) {
      const scrollAmount = tabsContainerRef.current.clientWidth * 0.6
      tabsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })

      // Check arrows after scrolling completes
      setTimeout(checkScrollArrows, 500)
    }
  }

  // Scroll to active category
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeButton = tabsContainerRef.current.querySelector(`[data-category="${activeCategory}"]`) as HTMLElement
      if (activeButton) {
        // Always scroll to center the active button when category changes
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })

        // After scrolling, check if arrows should be shown
        setTimeout(checkScrollArrows, 500)
      }
    }
  }, [activeCategory])

  return (
    <div className="w-full">
      {/* Category tabs with scroll arrows */}
      <div className="relative mb-8">
        {/* Left scroll arrow */}
        <button
          onClick={scrollLeft}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-onyx-gray/80 text-prestige-gold border border-prestige-gold/20 transition-all duration-300 backdrop-blur-sm",
            "hover:bg-prestige-gold/20 hover:border-prestige-gold hover:text-obsidian focus:outline-none focus:ring-1 focus:ring-prestige-gold/30",
            showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          aria-label="Scroll categories left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Scrollable tabs container */}
        <div className="relative scrollbar-fade-edges">
          {/* Left shadow gradient */}
          <div
            className={cn(
              "absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-onyx-gray to-transparent z-[1] pointer-events-none transition-opacity duration-300",
              showLeftArrow ? "opacity-100" : "opacity-0",
            )}
          />

          {/* Tabs container */}
          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto pb-3 pt-1 px-10 custom-scrollbar scroll-smooth"
            style={{ scrollbarGutter: "stable" }}
            onScroll={() => requestAnimationFrame(checkScrollArrows)}
          >
            <div className="flex gap-2">
              {faqData.map((category) => (
                <button
                  key={category.category}
                  data-category={category.category}
                  onClick={() => {
                    setActiveCategory(category.category)
                    // No need for additional code here as the useEffect will handle scrolling
                  }}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md whitespace-nowrap",
                    activeCategory === category.category
                      ? "bg-prestige-gold text-obsidian"
                      : "bg-onyx-gray text-prestige-gold hover:bg-prestige-gold/20",
                  )}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Right shadow gradient */}
          <div
            className={cn(
              "absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-onyx-gray to-transparent z-[1] pointer-events-none transition-opacity duration-300",
              showRightArrow ? "opacity-100" : "opacity-0",
            )}
          />
        </div>

        {/* Right scroll arrow */}
        <button
          onClick={scrollRight}
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-onyx-gray/80 text-prestige-gold border border-prestige-gold/20 transition-all duration-300 backdrop-blur-sm",
            "hover:bg-prestige-gold/20 hover:border-prestige-gold hover:text-obsidian focus:outline-none focus:ring-1 focus:ring-prestige-gold/30",
            showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          aria-label="Scroll categories right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* FAQ accordion */}
      <div className="space-y-6">
        {faqData
          .filter((category) => category.category === activeCategory)
          .map((category) => (
            <div key={category.category} className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-onyx-gray py-2">
                    <AccordionTrigger className="flex items-center justify-between text-left font-arimo text-lg font-medium text-prestige-gold hover:no-underline pb-3 border-b border-prestige-gold/10 hover:border-prestige-gold/20 transition-colors duration-300">
                      <span>{item.question}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-prestige-gold transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className="font-poppins pt-2 text-metallic-silver">
                      <div
                        className="leading-relaxed text-sm md:text-base"
                        dangerouslySetInnerHTML={{
                          __html: item.answer
                            .replace(/\n\n/g, "<br/><br/>")
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                        }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
      </div>

      {/* CTA section */}
      <div className="mt-12 text-center">
        <h3 className="font-arimo mb-4 text-xl font-semibold text-ivory">Still have questions?</h3>
        <p className="font-poppins mb-6 text-metallic-silver">
          Contact us for personalized assistance with your specific needs.
        </p>
        <Button
          className="bg-prestige-gold text-obsidian hover:bg-prestige-gold/90 btn-hover-effect"
          onClick={() => {
            document.getElementById("contact-section")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
        >
          <span className="font-poppins text-base font-semibold uppercase tracking-wider">Contact Us</span>
        </Button>
      </div>
    </div>
  )
}
