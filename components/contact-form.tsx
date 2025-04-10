"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import HCaptcha from "@hcaptcha/react-hcaptcha"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    focused: null as string | null,
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const captcha = useRef<HCaptcha>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Check for a selected plan message when the component mounts
  useEffect(() => {
    const selectedPlanMessage = sessionStorage.getItem("selectedPlanMessage")
    if (selectedPlanMessage) {
      setFormState((prev) => ({ ...prev, message: selectedPlanMessage }))
      // Clear the stored message to prevent it from persisting on page refresh
      sessionStorage.removeItem("selectedPlanMessage")
    }
  }, [])

  // Clear form status after 5 seconds
  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => {
        setFormStatus(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [formStatus])

  const handleFocus = (field: string) => {
    setFormState((prev) => ({ ...prev, focused: field }))
  }

  const handleBlur = () => {
    setFormState((prev) => ({ ...prev, focused: null }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Get form data first to check botcheck
    const formData = new FormData(formRef.current as HTMLFormElement)
    
    // Check if botcheck is checked (spam bot)
    if (formData.get('botcheck')) {
      setFormStatus({
        success: false,
        message: "Form submission failed.",
      })
      return
    }

    if (!captchaToken) {
      setFormStatus({
        success: false,
        message: "Please complete the CAPTCHA verification",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // The hCaptcha token is already in the form data via the hidden input
      // No need to append it again
      
      // Convert FormData to a plain object
      const formObject = Object.fromEntries(formData)
      
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formObject),
      })

      const data = await response.json()

      if (data.success) {
        // Reset form
        setFormState({
          name: "",
          email: "",
          company: "",
          message: "",
          focused: null,
        })

        // Reset captcha
        if (captcha.current) {
          captcha.current.resetCaptcha()
        }
        setCaptchaToken(null)

        // Show success message
        setFormStatus({
          success: true,
          message: "Thank you for your message. We will be in touch shortly.",
        })
      } else {
        // Reset captcha on error too
        if (captcha.current) {
          captcha.current.resetCaptcha()
        }
        setCaptchaToken(null)

        // Show error message
        setFormStatus({
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      // Reset captcha on error
      if (captcha.current) {
        captcha.current.resetCaptcha()
      }
      setCaptchaToken(null)

      // Show error message
      setFormStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms access key - hidden input */}
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"}
      />

      {/* Optional: Subject field for emails */}
      <input type="hidden" name="subject" value="New contact form submission from Quantum Codeworks" />

      {/* Optional: From Name for emails */}
      <input type="hidden" name="from_name" value="Quantum Codeworks Website" />

      {/* Redirect URL after form submission - optional */}
      <input type="hidden" name="redirect" value="" />

      {/* Honeypot field to prevent spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      {/* Hidden hCaptcha response field */}
      <input type="hidden" name="h-captcha-response" value={captchaToken || ""} />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative">
          <div
            className={cn(
              "group border-b-2 border-onyx-gray pb-1 transition-all duration-300",
              formState.focused === "name" || formState.name ? "border-prestige-gold" : "",
            )}
          >
            <Label
              htmlFor="name"
              className={cn(
                "font-poppins absolute left-0 top-0 text-metallic-silver transition-all duration-300",
                formState.focused === "name" || formState.name ? "-translate-y-6 text-xs text-prestige-gold" : "",
              )}
            >
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className="border-none bg-transparent p-0 text-ivory focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />
          </div>
        </div>

        <div className="relative">
          <div
            className={cn(
              "group border-b-2 border-onyx-gray pb-1 transition-all duration-300",
              formState.focused === "email" || formState.email ? "border-prestige-gold" : "",
            )}
          >
            <Label
              htmlFor="email"
              className={cn(
                "font-poppins absolute left-0 top-0 text-metallic-silver transition-all duration-300",
                formState.focused === "email" || formState.email ? "-translate-y-6 text-xs text-prestige-gold" : "",
              )}
            >
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className="border-none bg-transparent p-0 text-ivory focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "group border-b-2 border-onyx-gray pb-1 transition-all duration-300",
            formState.focused === "company" || formState.company ? "border-prestige-gold" : "",
          )}
        >
          <Label
            htmlFor="company"
            className={cn(
              "font-poppins absolute left-0 top-0 text-metallic-silver transition-all duration-300",
              formState.focused === "company" || formState.company ? "-translate-y-6 text-xs text-prestige-gold" : "",
            )}
          >
            Company Name
          </Label>
          <Input
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            onFocus={() => handleFocus("company")}
            onBlur={handleBlur}
            className="border-none bg-transparent p-0 text-ivory focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "group border-b-2 border-onyx-gray pb-1 transition-all duration-300",
            formState.focused === "message" || formState.message ? "border-prestige-gold" : "",
          )}
        >
          <Label
            htmlFor="message"
            className={cn(
              "font-poppins absolute left-0 top-0 text-metallic-silver transition-all duration-300",
              formState.focused === "message" || formState.message ? "-translate-y-6 text-xs text-prestige-gold" : "",
            )}
          >
            Your Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            className="min-h-[100px] resize-none border-none bg-transparent p-0 text-ivory focus-visible:ring-0 focus-visible:ring-offset-0"
            required
          />
        </div>
      </div>

      {/* hCaptcha integration */}
      <div className="flex justify-center my-6">
        <HCaptcha
          ref={captcha}
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" // Web3Forms free plan site key
          onVerify={(token) => setCaptchaToken(token)}
          theme="dark"
          size="normal"
          onExpire={() => setCaptchaToken(null)}
          reCaptchaCompat={false} // Important: Set to false as recommended
        />
      </div>

      {/* Form status message */}
      {formStatus && (
        <div
          className={cn(
            "p-4 border rounded-md text-center transition-all duration-300",
            formStatus.success
              ? "bg-prestige-gold/10 border-prestige-gold text-prestige-gold"
              : "bg-red-500/10 border-red-500 text-red-400",
          )}
        >
          <p className="font-medium">{formStatus.message}</p>
        </div>
      )}

      <div className="text-center">
        <Button
          type="submit"
          className="bg-prestige-gold px-8 py-6 text-obsidian hover:bg-prestige-gold/90"
          disabled={isSubmitting || !captchaToken}
        >
          <span className="font-poppins relative z-10 text-base font-semibold uppercase tracking-wider transition-transform group-hover:scale-105">
            {isSubmitting ? "Sending..." : "Get a Free Consultation"}
          </span>
        </Button>
      </div>
    </form>
  )
}
