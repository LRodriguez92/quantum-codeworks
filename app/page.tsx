"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Cpu, Gem, Globe, Layers, MessageSquare, Shield, Zap } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { FeatureCard } from "@/components/feature-card"
import { PortfolioItem } from "@/components/portfolio-item"
import { ContactForm } from "@/components/contact-form"
import { ScrollReveal } from "@/components/scroll-reveal"
import BackgroundPaths from "@/components/background-paths"
import { Navbar } from "@/components/navbar"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollToSection } from "@/components/scroll-to-section"
import { useEffect, useRef } from "react"

export default function Home() {
  useEffect(() => {
    // Force scroll to top on mount
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-obsidian text-ivory">
      <Navbar />
      <ScrollToSection />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <BackgroundPaths
          title="Crafting Elite Digital Experiences"
          subtitle="Custom-built, high-performance websites designed for brands that demand excellence."
          buttonText="Start Your Project"
        />
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <button
            onClick={() => {
              document.getElementById("services-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
            className="cursor-pointer transition-transform hover:scale-110"
            aria-label="Scroll to services section"
          >
            <div className="animate-bounce">
              <ChevronRight className="h-8 w-8 rotate-90 text-prestige-gold gold-glow-hover" />
            </div>
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-section" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-arimo mb-4 text-3xl font-semibold text-prestige-gold gold-glow-hover md:text-4xl">
                Premium Services
              </h2>
              <p className="font-poppins mx-auto max-w-2xl text-metallic-silver">
                Tailored solutions for businesses that demand excellence and performance.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={100}>
              <ServiceCard
                icon={<Globe className="h-10 w-10" />}
                title="Flat Rate Plan"
                price="$5,000"
                description="One-time payment for a complete 5-page website with basic SEO and mobile-friendly design."
                features={[
                  "5-page professional website",
                  "Mobile-friendly design",
                  "Basic on-page SEO",
                  "Regular contact form",
                  "Google Analytics setup",
                ]}
                cta="Select Plan"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ServiceCard
                icon={<Layers className="h-10 w-10" />}
                title="Monthly Web Solutions"
                price="$249/month"
                description="Ongoing website management with regular updates and technical support."
                features={[
                  "5-page professional website",
                  "Hosting included",
                  "Extensive minor edits",
                  "Technical support",
                  "Domain included",
                  "12-month minimum contract",
                ]}
                cta="Select Plan"
                featured={true}
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <ServiceCard
                icon={<Gem className="h-10 w-10" />}
                title="Custom Development"
                price="Tailored"
                description="Bespoke solutions designed specifically for your unique business requirements."
                features={[
                  "Custom design & functionality",
                  "Advanced features",
                  "Premium support",
                  "Advanced performance optimization",
                ]}
                cta="Request Quote"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about-section" className="bg-onyx-gray py-20 md:py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-arimo mb-4 text-3xl font-semibold text-prestige-gold gold-glow-hover md:text-4xl">
                Why Choose Quantum Codeworks
              </h2>
              <p className="font-poppins mx-auto max-w-2xl text-metallic-silver">
                We deliver exceptional digital experiences through our commitment to excellence.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={100}>
              <FeatureCard
                icon={<Zap className="h-8 w-8" />}
                title="Elite Performance"
                description="Ultra-fast, high-ranking, optimized websites that deliver exceptional user experiences."
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <FeatureCard
                icon={<Gem className="h-8 w-8" />}
                title="Exclusive Aesthetic"
                description="Custom, sleek, and conversion-focused designs that elevate your brand."
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <FeatureCard
                icon={<Shield className="h-8 w-8" />}
                title="Premium Support"
                description="Dedicated service with ongoing optimization to ensure your continued success."
              />
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <FeatureCard
                icon={<Code className="h-8 w-8" />}
                title="Clean Code"
                description="Meticulously crafted code that ensures stability, security, and scalability."
              />
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <FeatureCard
                icon={<Cpu className="h-8 w-8" />}
                title="Advanced Technology"
                description="Cutting-edge development practices and technologies for superior results."
              />
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <FeatureCard
                icon={<MessageSquare className="h-8 w-8" />}
                title="Clear Communication"
                description="Transparent processes and regular updates throughout your project."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio-section" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-arimo mb-4 text-3xl font-semibold text-prestige-gold gold-glow-hover md:text-4xl">
                Our Portfolio
              </h2>
              <p className="font-poppins mx-auto max-w-2xl text-metallic-silver">
                Explore our collection of premium websites crafted for discerning clients.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={100}>
              <Link href="/portfolio/home-design-center">
                <PortfolioItem
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hdc-TkNATF98Hxm5XB2Cj40fF5uEYOF7Rf.png"
                  title="The Home Design Center"
                  category="Remodeling Service"
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/portfolio/ugc-vessup">
                <PortfolioItem
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sLtKW6TBmtt4X7q2VWrmsPrczpa79o.png"
                  title="Carlos Vessup"
                  category="Content Creator"
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link href="/portfolio/elegant-spaces">
                <PortfolioItem
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oKXlohqNB2vndHXaWSDIEPURICwIbK.png"
                  title="Elegant Spaces"
                  category="Interior Design"
                />
              </Link>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={700}>
            <div className="mt-12 text-center">
              <Link href="/portfolio">
                <Button variant="outline" className="border-prestige-gold text-prestige-gold hover:bg-prestige-gold/10">
                  <span className="font-poppins text-base font-semibold uppercase tracking-wider">
                    View All Projects
                  </span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-20 md:py-32 bg-onyx-gray">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-arimo mb-4 text-3xl font-semibold text-prestige-gold gold-glow-hover md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="font-poppins mx-auto max-w-2xl text-metallic-silver">
                Find answers to common questions about our services, pricing, and policies.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mx-auto max-w-4xl">
              <FAQSection />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA & Contact */}
      <section id="contact-section" className="py-48 md:py-56">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-arimo mb-4 text-3xl font-semibold text-prestige-gold gold-glow-hover md:text-4xl lg:text-5xl">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="font-poppins mx-auto max-w-2xl text-lg text-metallic-silver">
                Let's build something exceptional together.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mx-auto max-w-3xl">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
