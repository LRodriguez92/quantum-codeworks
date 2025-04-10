"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

function FloatingPaths({ position, color = "rgba(222,197,91," }: { position: number; color?: string }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `${color}${0.03 + i * 0.01})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Decorative Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.03 + path.id * 0.01}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="text-prestige-gold"
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundPaths({
  title = "Crafting Elite Digital Experiences",
  subtitle = "Custom-built, high-performance websites designed for brands that demand excellence.",
  buttonText = "Start Your Project",
}: {
  title?: string
  subtitle?: string
  buttonText?: string
}) {
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mx-auto mb-8 w-48 md:w-56">
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quantum-gold-transparent-EdKV0yEOuegb4yhLN7yjBL7IZxoozW.png"
              alt="Quantum Codeworks Logo"
              width={300}
              height={300}
              className="w-full gold-glow-hover hero-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tighter overflow-visible">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.5 + wordIndex * 0.1 + letterIndex * 0.02,
                      duration: 0.4,
                      ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for smoother motion
                    }}
                    className="inline-block text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#DEC55B] to-[#DEC55B]/80 
                    gold-glow-hover"
                    style={{
                      display: "inline-block",
                      height: "auto",
                      lineHeight: "1.4",
                      paddingBottom: "0.2em",
                      marginBottom: "0.1em",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="font-poppins mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed md:text-xl text-ivory"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="inline-block group relative bg-gradient-to-b from-[#DEC55B]/30 to-[#DEC55B]/10 
                        p-px rounded-lg backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              className="group bg-prestige-gold px-8 py-6 text-obsidian hover:bg-prestige-gold/90 btn-hover-effect"
              onClick={() => {
                document.getElementById("contact-section")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
              aria-label={buttonText}
            >
              <span className="font-poppins text-base font-semibold uppercase tracking-wider transition-transform group-hover:scale-105">
                {buttonText}
              </span>
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
