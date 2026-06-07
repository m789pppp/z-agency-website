"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

const comparison = {
  others: [
    "Generic templates and themes",
    "Slow delivery timelines",
    "One-size-fits-all approach",
    "Limited post-launch support",
    "Outdated technologies",
    "Poor communication"
  ],
  zagency: [
    "100% custom-built solutions",
    "Fast & agile execution",
    "Tailored to your business",
    "Long-term partnership",
    "Cutting-edge tech stack",
    "Dedicated project manager"
  ]
}

export function WhyChooseUs() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">The Difference</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Why Choose Z.AGENCY
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {"We're not just another agency. Here's what sets us apart."}
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Other Agencies */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-card/50 border border-border">
              <div className="text-center mb-8">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Other Agencies</span>
              </div>
              <ul className="space-y-4">
                {comparison.others.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Z.AGENCY */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-card border border-accent/30 border-gradient">
              <div className="text-center mb-8">
                <span className="text-sm font-medium text-accent uppercase tracking-widest">Z.AGENCY</span>
              </div>
              <ul className="space-y-4">
                {comparison.zagency.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
