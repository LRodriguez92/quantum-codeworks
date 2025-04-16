"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, ArrowLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function PrivacyPolicyPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<string>("item-1")

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-prestige-gold/5 to-transparent pointer-events-none"></div>

          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h1 className="font-arimo text-4xl md:text-5xl lg:text-6xl font-bold text-prestige-gold mb-4 gold-glow-hover">
                  Privacy Policy
                </h1>
                <p className="font-poppins text-base md:text-lg text-ivory">Last Updated: March 7, 2025</p>
              </div>
            </ScrollReveal>

            {/* Accordion Content */}
            <div className="max-w-3xl mx-auto">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                value={activeSection}
                onValueChange={setActiveSection}
                className="space-y-6"
              >
                {/* Information Collection */}
                <AccordionItem
                  value="item-1"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Information Collection
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>
                        Quantum Codeworks ("we," "our," or "us") respects your privacy and is committed to protecting
                        any personal information collected through our website and services. This Privacy Policy
                        explains how we collect, use, store, and protect information from clients and website visitors.
                      </p>
                      <p>We collect the following types of personal information:</p>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-2">Clients</h3>
                          <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                            <li>Name, email, phone number</li>
                            <li>Billing details</li>
                            <li>Project-related data</li>
                            <li>Any content provided for website development</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-2">
                            Website Visitors
                          </h3>
                          <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Operating system</li>
                            <li>Referring URLs</li>
                            <li>Behavior analytics through Google Analytics</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* How We Use Your Information */}
                <AccordionItem
                  value="item-2"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        How We Use Your Information
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-6 leading-relaxed">
                      <p>We use collected data for the following purposes:</p>
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">Client Data</h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>To provide website development services and customer support</li>
                          <li>To process payments and send invoices</li>
                          <li>To send updates about changes to our services, contracts, or policies</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          Website Visitor Data
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>To analyze website traffic and improve our services</li>
                          <li>To monitor security and prevent fraud</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Data Storage & Security */}
                <AccordionItem
                  value="item-3"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Data Storage & Security
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>We implement industry-standard security measures to protect personal data. These include:</p>
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>Secure Socket Layer (SSL) encryption for all data transmissions</li>
                        <li>Regular security audits and vulnerability assessments</li>
                        <li>Access controls and authentication protocols</li>
                        <li>Regular software updates and security patches</li>
                        <li>Secure, encrypted database storage</li>
                      </ul>
                      <p className="text-prestige-gold/80 italic">
                        While we implement these security measures, we cannot guarantee 100% security against cyber
                        threats.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Third-Party Services */}
                <AccordionItem
                  value="item-4"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Third-Party Services
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>
                        We may share limited information with third-party services that assist in our operations, such
                        as:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>
                          <span className="text-ivory">Payment Processors (e.g., Stripe, PayPal):</span> For secure
                          billing and transactions
                        </li>
                        <li>
                          <span className="text-ivory">Hosting Providers (e.g., Vercel, AWS, DigitalOcean):</span> For
                          website deployment
                        </li>
                        <li>
                          <span className="text-ivory">Google Analytics & Search Console:</span> To track website
                          performance and optimize search rankings
                        </li>
                      </ul>
                      <p className="font-medium text-prestige-gold/80">
                        We do not sell or rent personal information to third parties.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Cookies & Tracking Technologies */}
                <AccordionItem
                  value="item-5"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Cookies & Tracking Technologies
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>Our website uses cookies for:</p>
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>Analyzing site performance via Google Analytics</li>
                        <li>Remembering user preferences</li>
                        <li>Providing a more personalized browsing experience</li>
                      </ul>
                      <div className="bg-onyx-gray p-4 rounded-md border border-prestige-gold/20">
                        <p className="text-ivory">
                          <span className="text-prestige-gold font-medium">Cookie Opt-Out:</span> Visitors can disable
                          cookies in their browser settings. Please note that disabling cookies may affect the
                          functionality of our website.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Client Website Data */}
                <AccordionItem
                  value="item-6"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Client Website Data
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>Client websites are stored securely on our hosting provider's servers</li>
                        <li>We implement security best practices to protect client website data</li>
                        <li>Regular backups are performed to prevent data loss</li>
                        <li>
                          Upon project completion, clients can request deletion or migration of their website data
                        </li>
                      </ul>
                      <p>
                        For clients who choose our hosting services, we maintain industry-standard security protocols to
                        protect website data. For clients who host elsewhere, we provide secure file transfers but are
                        not responsible for third-party hosting security.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Data Retention */}
                <AccordionItem
                  value="item-7"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">Data Retention</h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>We retain different types of data for varying periods:</p>
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>
                          <span className="text-ivory">Client data:</span> Retained as long as services are active or
                          legally required for tax/compliance purposes
                        </li>
                        <li>
                          <span className="text-ivory">Analytics data:</span> Stored for up to 24 months before being
                          deleted
                        </li>
                        <li>
                          <span className="text-ivory">Email communications:</span> Retained for service-related
                          inquiries and historical reference
                        </li>
                      </ul>
                      <p>
                        Upon termination of services or upon request, we will securely delete or anonymize personal data
                        that is no longer necessary for the purposes for which it was collected, unless retention is
                        required by law.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Your Data Protection Rights */}
                <AccordionItem
                  value="item-8"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Your Data Protection Rights
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>Under applicable privacy laws, you have the right to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>Request a copy of your stored personal data</li>
                        <li>Request correction or deletion of inaccurate data</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Request that we restrict data processing</li>
                      </ul>
                      <p>
                        To exercise any of these rights, please contact us using the information provided in the Contact
                        Information section. We will respond to your request within 30 days.
                      </p>
                      <div className="bg-onyx-gray p-4 rounded-md border border-prestige-gold/20">
                        <p className="text-ivory">
                          <span className="text-prestige-gold font-medium">Note:</span> Some data may be retained for
                          legal, compliance, or legitimate business purposes even after a deletion request.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Changes to This Privacy Policy */}
                <AccordionItem
                  value="item-9"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Changes to This Privacy Policy
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices,
                        services, or applicable laws. Any changes will be posted on this page, and active clients will
                        receive email notifications of significant updates.
                      </p>
                      <p>
                        The "Last Updated" date at the top of this Privacy Policy indicates when it was last revised. We
                        encourage you to review this Privacy Policy periodically to stay informed about how we protect
                        your information.
                      </p>
                      <p>
                        Your continued use of our services after any changes to this Privacy Policy constitutes your
                        acceptance of the revised terms.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Contact Information */}
                <AccordionItem
                  value="item-10"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Contact Information
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>For questions regarding this Privacy Policy, please contact:</p>
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>Email: hello@QuantumCodeworks.co</li>
                        <li>Website: www.QuantumCodeworks.co</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>

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

      <Footer />
    </div>
  )
}
