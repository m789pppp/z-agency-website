"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles, GraduationCap, School, HeartPulse, ArrowUpRight } from "lucide-react"

const successStories = [
  {
    id: 1,
    title: "Z-magic",
    category: "Education Technology",
    icon: GraduationCap,
    impact: "Empowering Egyptian Students",
    description: "Built an AI-powered chat assistant that helps students discover admissions opportunities, scholarships, competitions, and program details in both Arabic and English. The assistant provides instant, personalized educational guidance to help students achieve their academic goals.",
    outcomes: [
      "AI-powered chat assistant",
      "Bilingual support (AR/EN)",
      "Instant admissions guidance",
      "Egypt-focused education resources"
    ]
  },
  {
    id: 2,
    title: "Red Sea STEM School Website",
    category: "Education Website",
    icon: School,
    impact: "Modern School Digital Presence",
    description: "Created a modern, responsive website for Red Sea STEM School that showcases school activities, student achievements, educational programs, and fosters community engagement.",
    outcomes: [
      "Professional school representation",
      "Enhanced community engagement",
      "Streamlined information access",
      "Mobile-first responsive design"
    ]
  },
  {
    id: 3,
    title: "PhysioConnect Coventry",
    category: "Education Website",
    icon: HeartPulse,
    impact: "Student Club Digital Platform",
    description: "Built the official platform for PhysioConnect, the physiotherapy student club at Coventry University Egypt, showcasing club activities, leadership, and a full year of events designed to engage and grow the student community.",
    outcomes: [
      "Activities & events hub",
      "Leadership showcase",
      "Community engagement",
      "Modern responsive design"
    ]
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextStory = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % successStories.length)
  }

  const prevStory = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextStory, 8000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  }

  const currentStory = successStories[currentIndex]
  const IconComponent = currentStory.icon

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Our Impact</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Success Stories
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Real projects creating real impact. See how our work makes a difference.
          </p>
        </motion.div>

        {/* Success Stories Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl bg-card/50 border border-border p-8 md:p-12 min-h-[400px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* Icon & Category */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-accent" />
                    </div>
                  </div>

                  {/* Title & Impact */}
                  <div className="text-center mb-6">
                    <span className="text-sm text-accent font-medium">{currentStory.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                      {currentStory.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{currentStory.impact}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                    {currentStory.description}
                  </p>

                  {/* Outcomes */}
                  <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
                    {currentStory.outcomes.map((outcome, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm text-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevStory}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-accent/50 transition-all"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-accent w-6" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextStory}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card hover:border-accent/50 transition-all"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://wa.me/201022298621?text=Hi!%20I%20want%20to%20create%20a%20success%20story%20with%20Z.AGENCY"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-card hover:border-accent/50 transition-all duration-300"
          >
            Create Your Success Story
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
