"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Palette, Code, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business, understanding your goals, challenges, and target audience to build a solid foundation.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description: "Our team crafts a comprehensive strategy with clear milestones, timelines, and KPIs aligned with your business objectives.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    number: "03",
    icon: Palette,
    title: "Design",
    description: "We create stunning, user-centered designs that not only look beautiful but drive conversions and engagement.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    number: "04",
    icon: Code,
    title: "Development",
    description: "Our engineers build robust, scalable solutions using cutting-edge technologies and industry best practices.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description: "We ensure a smooth launch with thorough testing, optimization, and seamless deployment to production.",
    color: "from-pink-500 to-rose-500"
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Growth",
    description: "Post-launch, we continue to optimize, scale, and evolve your product based on real user data and feedback.",
    color: "from-rose-500 to-orange-500"
  }
]

export function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-blur opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">How We Work</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Our Process
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A proven methodology that delivers results. From ideation to launch and beyond.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/30 transition-all duration-300"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground font-mono">{step.number}</span>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="hidden lg:flex flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-accent items-center justify-center z-10">
                  <span className="text-lg font-bold text-accent">{step.number}</span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
