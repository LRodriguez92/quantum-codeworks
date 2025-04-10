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

export default function TermsOfServicePage() {
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
                  Terms of Service
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
                {/* Introduction */}
                <AccordionItem
                  value="item-1"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">Introduction</h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>
                        These Terms of Service ("Agreement") govern the use of web development services provided by
                        Quantum Codeworks ("Company," "we," "our," or "us"). By purchasing any of our services, you
                        ("Client," "you") agree to be bound by these terms.
                      </p>
                      <p>
                        This Agreement constitutes the entire understanding between Quantum Codeworks and the Client
                        regarding the services provided. It supersedes all prior agreements, understandings, or
                        negotiations, whether written or oral.
                      </p>
                      <p>
                        Please read these terms carefully before engaging our services. If you have any questions or
                        concerns about these terms, please contact us before proceeding with any service purchase.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Service Offerings */}
                <AccordionItem
                  value="item-2"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">Service Offerings</h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-6 leading-relaxed">
                      <p>We offer the following website development services:</p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                            2.1 Flat Rate Plan ($3,500 + $29/month for hosting)
                          </h3>
                          <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                            <li>5-page website</li>
                            <li>Mobile-friendly design</li>
                            <li>
                              Basic on-page SEO (includes title tag optimization, meta description optimization, header
                              tag (H1-H6) optimization, and image alt text optimization for client-provided images.
                              Excludes keyword research, content creation, link building, and technical SEO audits.)
                            </li>
                            <li>Regular contact form</li>
                            <li>Google Analytics setup</li>
                            <li>
                              Hosting required at $29/month once the website is ready to go live unless the client
                              provides their own hosting.
                            </li>
                            <li>No ongoing support or maintenance.</li>
                            <li>Add-ons available for additional costs</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                            2.2 Monthly Plan ($249/month, 12-Month Minimum Commitment)
                          </h3>
                          <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                            <li>5-page website</li>
                            <li>Mobile-friendly design</li>
                            <li>
                              Basic on-page SEO (includes title tag optimization, meta description optimization, header
                              tag (H1-H6) optimization, and image alt text optimization for client-provided images.
                              Excludes keyword research, content creation, link building, and technical SEO audits.)
                            </li>
                            <li>Regular contact form</li>
                            <li>Hosting included</li>
                            <li>Extensive minor edits</li>
                            <li>Technical support</li>
                            <li>Domain included (standard domains only)</li>
                            <li>12-month minimum contract</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                            2.3 Custom Plan (Tailored Pricing)
                          </h3>
                          <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                            <li>Custom design & functionality</li>
                            <li>Advanced features</li>
                            <li>Premium support</li>
                            <li>Advanced performance optimization</li>
                            <li>Pricing determined on a project-by-project basis</li>
                            <li>Custom contract terms</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Payment Terms & Missed Payment Policy */}
                <AccordionItem
                  value="item-3"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Payment Terms & Missed Payment Policy
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-6 leading-relaxed">
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          3.1 Payment Terms
                        </h3>
                        <div className="space-y-4">
                          <p>Our payment terms vary by plan:</p>
                          <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                            <li>
                              <span className="text-ivory">Flat Rate Plan ($3,500):</span> 50% upfront payment before
                              work begins, with the remaining 50% due upon project completion before the website goes
                              live.
                            </li>
                            <li>
                              <span className="text-ivory">Monthly Plan ($249/month):</span> First month's payment
                              required upfront with a 12-month minimum commitment. Payments are charged automatically
                              every month via your chosen payment method.
                            </li>
                            <li>
                              <span className="text-ivory">Custom Plan:</span> Payment schedule determined based on
                              project scope and detailed in the signed agreement.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          3.2 Missed Payment Policy
                        </h3>
                        <div className="space-y-4">
                          <p>
                            The following policy applies to all recurring monthly charges, including Monthly Plan
                            subscriptions and any additional monthly add-on services:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                            <li>
                              <span className="text-ivory">Grace Period:</span> If a payment is not received by the due
                              date, a 7-day grace period begins. A payment reminder notification will be sent via email.
                            </li>
                            <li>
                              <span className="text-ivory">Service Suspension:</span> If payment is not received within
                              14 days of the due date, the associated services (including, but not limited to, website
                              access, hosting, and add-on features) will be temporarily suspended. Services will be
                              reinstated upon receipt of full payment.
                            </li>
                            <li>
                              <span className="text-ivory">Termination:</span> If payment is not received within 30 days
                              of the due date, the service agreement will be considered terminated. The client's
                              website, if applicable, will be taken offline permanently. The client remains liable for
                              the full remaining balance of any applicable minimum contract term (e.g., the 12-month
                              commitment for the Monthly Plan). Quantum Codeworks reserves the right to pursue all
                              available legal remedies to recover outstanding debts.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Refund Policy */}
                <AccordionItem
                  value="item-4"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">Refund Policy</h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-4 leading-relaxed">
                      <p>Our refund policy varies by service type:</p>
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>
                          <span className="text-ivory">Flat Rate Plan:</span> No refunds are offered once the project
                          has started.
                        </li>
                        <li>
                          <span className="text-ivory">Monthly Plan:</span> No refunds are provided for previously paid
                          months; cancellations stop future billing.
                        </li>
                        <li>
                          <span className="text-ivory">Custom Plan:</span> Refunds are subject to the specific agreement
                          and the stage of project completion.
                        </li>
                      </ul>
                      <p>
                        By engaging our services, you acknowledge and agree to these refund terms. All sales are
                        considered final unless otherwise specified in writing.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Hosting & Maintenance */}
                <AccordionItem
                  value="item-5"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Hosting & Maintenance
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-6 leading-relaxed">
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          5.1 Hosting Services
                        </h3>
                        <div className="space-y-4">
                          <p>Our hosting services include:</p>
                          <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                            <li>Server maintenance</li>
                            <li>Uptime monitoring</li>
                            <li>Security updates and patches</li>
                            <li>Regular backups</li>
                            <li>Basic performance optimization</li>
                          </ul>
                          <p>
                            Hosting does not include unlimited custom changes or redesigns. Our hosting ensures your
                            website remains fast, secure, and accessible 24/7.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          5.2 Hosting Inclusion by Plan
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>
                            <span className="text-ivory">Flat Rate Plan:</span> Hosting is required at $29/month once
                            the website is ready to go live.
                          </li>
                          <li>
                            <span className="text-ivory">Monthly Plan:</span> Hosting is included in the $249/month
                            subscription fee.
                          </li>
                          <li>
                            <span className="text-ivory">Custom Plan:</span> Hosting arrangements will be specified in
                            your individual agreement.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">5.3 Domain Names</h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>
                            <span className="text-ivory">Monthly Plan:</span> A domain is included with no renewal fees
                            (standard domains only; premium domains may require an additional fee).
                          </li>
                          <li>
                            <span className="text-ivory">Flat Rate Plan:</span> Domain purchase is available as an
                            add-on, with pricing ranging from $25-$60/year based on registrar pricing, or you can
                            purchase and manage it independently.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          5.4 Third-Party Hosting
                        </h3>
                        <p>
                          If you choose to host your website with a third-party provider, we will provide the necessary
                          files for transfer. However, we are not responsible for setting up or configuring third-party
                          hosting environments. Additional fees may apply for assistance with third-party hosting setup.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Website Edits & Support */}
                <AccordionItem
                  value="item-6"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Website Edits & Support
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-6 leading-relaxed">
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          6.1 Minor Edits Definition
                        </h3>
                        <p>
                          "Extensive minor edits" within the Monthly Plan (and as part of the Extensive Minor Edits +
                          Technical Support add-on) are defined as changes to existing content that take no longer than
                          30 minutes per request and a total of up to 2 hours per month.
                        </p>
                        <div className="mt-4 space-y-4">
                          <div>
                            <p className="text-ivory font-medium">Includes:</p>
                            <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                              <li>Text changes on existing pages</li>
                              <li>Image swaps (client-provided images)</li>
                              <li>Updating contact information</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-ivory font-medium">Excludes:</p>
                            <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                              <li>Creating new pages</li>
                              <li>Redesigning sections of the website</li>
                              <li>Adding new features or functionality</li>
                              <li>Custom code modifications</li>
                              <li>Anything taking longer than 30 minutes per request</li>
                            </ul>
                          </div>
                        </div>
                        <p className="mt-4">
                          Quantum Codeworks reserves the right to refuse excessive or out-of-scope requests under a Fair
                          Use policy.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          6.2 Major Changes
                        </h3>
                        <p>
                          Major changes, such as layout redesigns, additional features, or custom functionality, are
                          billed at $150/hour or at a fixed price based on scope.
                        </p>
                        <p className="mt-2">
                          All change requests must be submitted in writing (email is acceptable) and must clearly detail
                          the desired changes. Any approved change requests may impact the project timeline, and a
                          revised timeline will be provided upon approval.
                        </p>
                        <p className="mt-2">
                          No work on change requests will commence until you have approved the cost and timeline impact
                          in writing.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          6.3 Technical Support
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>
                            <span className="text-ivory">Monthly Plan:</span> Technical support is included in the
                            $249/month fee.
                          </li>
                          <li>
                            <span className="text-ivory">Flat Rate Plan:</span> Technical support is not included but
                            can be added as an add-on for $99/month (includes extensive minor edits + technical
                            support).
                          </li>
                          <li>
                            <span className="text-ivory">Custom Plan:</span> Technical support is included as specified
                            in your agreement.
                          </li>
                        </ul>
                        <p className="mt-2">
                          Technical support includes troubleshooting issues with your website, fixing bugs, and ensuring
                          your website remains functional and secure.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Intellectual Property & Ownership */}
                <AccordionItem
                  value="item-7"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Intellectual Property & Ownership
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-6 leading-relaxed">
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">7.1 Ownership</h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>
                            Quantum Codeworks retains full ownership of the website until full payment is received.
                          </li>
                          <li>For Flat Rate Plan clients: "Full payment" means paying the entire project cost.</li>
                          <li>
                            For Monthly Plan clients: "Full payment" means completing the 12-month contract or paying
                            the remaining contract balance upon early termination.
                          </li>
                          <li>Once fully paid, clients receive full ownership of their website content and design.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          7.2 Website Code Licensing
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>
                            Upon full payment, Quantum Codeworks grants the Client a non-exclusive, non-transferable
                            license to use the website code for their specific website.
                          </li>
                          <li>Quantum Codeworks retains ownership of all original code and intellectual property.</li>
                          <li>
                            The Client may not resell, redistribute, or modify the core code without written permission.
                          </li>
                          <li>
                            This license does not extend to third-party components or libraries used in the project,
                            which are subject to their respective licenses.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          7.3 Client Content
                        </h3>
                        <p>
                          The Client retains ownership of all content provided to Quantum Codeworks, including text,
                          images, logos, and other media. The Client is responsible for ensuring they have the proper
                          rights to use all content provided for the website.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          7.4 Portfolio Rights
                        </h3>
                        <p>
                          Quantum Codeworks reserves the right to showcase completed websites in our portfolio unless
                          explicitly requested otherwise in writing. This includes screenshots, descriptions, and links
                          to the live website.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Cancellation & Termination */}
                <AccordionItem
                  value="item-8"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Cancellation & Termination
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-6 leading-relaxed">
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          8.1 Cancellation Terms
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>
                            <span className="text-ivory">Flat Rate Plan:</span> No refunds after work begins.
                          </li>
                          <li>
                            <span className="text-ivory">Monthly Plan:</span> Can be canceled after the 12-month
                            contract with 30 days' notice.
                          </li>
                          <li>
                            <span className="text-ivory">Custom Plan:</span> Cancellation terms will be outlined in the
                            project contract.
                          </li>
                        </ul>
                        <p className="mt-2">
                          If a client fails to pay for ongoing hosting, the website may be taken offline.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          8.2 Client-Initiated Termination
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>
                            If a Monthly Plan client cancels before 12 months, they must pay the remaining contract
                            balance.
                          </li>
                          <li>
                            If a Flat Rate client has not fully paid, they do not retain ownership of the website.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          8.3 Termination Process
                        </h3>
                        <p>To initiate cancellation:</p>
                        <ol className="list-decimal pl-6 space-y-2 text-metallic-silver">
                          <li>
                            Provide written notice (email is acceptable) at least 30 days before your intended
                            cancellation date
                          </li>
                          <li>
                            For Monthly Plan clients, this can only be done after completing the 12-month minimum
                            commitment
                          </li>
                          <li>We'll provide confirmation of your cancellation request</li>
                          <li>We'll outline any final payments or transfer procedures that may apply</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          8.4 Domain Transfer
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>
                            <span className="text-ivory">Flat Rate Clients:</span> Can transfer their domain anytime for
                            a $25 transfer fee.
                          </li>
                          <li>
                            <span className="text-ivory">Monthly Plan Clients:</span> Must complete at least 12 months
                            to transfer for free. If canceled early, you must pay the remaining balance of the contract
                            to retain ownership and transfer the domain.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Liability & Disclaimers */}
                <AccordionItem
                  value="item-9"
                  className="border-none bg-onyx-gray/50 rounded-lg overflow-hidden shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center">
                      <h2 className="font-arimo text-2xl font-bold text-prestige-gold text-left">
                        Liability & Disclaimers
                      </h2>
                    </div>
                    <ChevronDown className="h-6 w-6 text-prestige-gold transition-transform duration-300" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="font-poppins text-ivory space-y-6 leading-relaxed">
                      <div>
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          9.1 Limitation of Liability
                        </h3>
                        <p>Quantum Codeworks is not liable for:</p>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>Business losses, revenue impacts, or downtime.</li>
                          <li>SEO rankings, lead generation results, or search engine performance.</li>
                          <li>Loss of data due to client action, third-party hosting issues, or cyberattacks.</li>
                          <li>Website performance issues caused by third-party software or plugins.</li>
                          <li>Delays caused by the Client's failure to provide necessary materials on time.</li>
                          <li>
                            Non-compliance with copyright laws, privacy laws (GDPR, CCPA), or other regulations related
                            to Client content.
                          </li>
                        </ul>
                        <p className="mt-2">
                          The Client is responsible for ensuring all provided content (text, images, logos, etc.)
                          complies with legal requirements.
                        </p>
                      </div>

                      <div className="mt-4">
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          9.2 No Guarantees
                        </h3>
                        <p>Quantum Codeworks does not guarantee:</p>
                        <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                          <li>That the website will rank first in search results.</li>
                          <li>That the website will remain online permanently without hosting renewal payments.</li>
                          <li>
                            That future search engine updates (Google Core Updates, algorithm changes, etc.) will not
                            impact website performance.
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h3 className="font-poppins text-xl font-semibold text-prestige-gold mb-3">
                          9.3 Indemnification
                        </h3>
                        <p>
                          The Client agrees to indemnify and hold harmless Quantum Codeworks from any claims, damages,
                          liabilities, costs, or expenses (including reasonable attorney's fees) arising from the
                          Client's use of our services, the Client's breach of these Terms, or the Client's violation of
                          any rights of a third party.
                        </p>
                      </div>
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
                      <p>For questions regarding these Terms of Service, please contact:</p>
                      <ul className="list-disc pl-6 space-y-2 text-metallic-silver">
                        <li>Email: support@quantumcodeworks.com</li>
                        <li>Website: www.quantumcodeworks.com</li>
                      </ul>
                      <p className="mt-4 text-prestige-gold font-medium">
                        By purchasing any service from Quantum Codeworks, you acknowledge and accept these Terms of
                        Service.
                      </p>
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
