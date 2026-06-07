"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, MessageCircle } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses",
    price: "5K",
    currency: "$",
    period: "starting at",
    features: [
      "Custom landing page",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    description: "For growing companies",
    price: "15K",
    currency: "$",
    period: "starting at",
    features: [
      "Full website (up to 10 pages)",
      "Custom UI/UX design",
      "Advanced SEO & analytics",
      "CMS integration",
      "Performance optimization",
      "Unlimited revisions",
      "3 months support",
      "Priority communication"
    ],
    cta: "Start Growing",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions at scale",
    price: "Custom",
    currency: "",
    period: "",
    features: [
      "Full-scale web application",
      "Custom SaaS development",
      "API integrations",
      "Dedicated team",
      "24/7 support",
      "SLA guarantee",
      "Ongoing maintenance",
      "Strategy consulting"
    ],
    cta: "Contact Us",
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Pricing</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Transparent Pricing
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Investment that delivers returns. Choose the plan that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-card border-accent/50 border-gradient"
                    : "bg-card/50 border-border hover:border-accent/30"
                }`}
              >
                {/* Plan Name */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-2xl">{plan.currency}</span>
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/201022298621?text=Hi!%20I%20want%20to%20learn%20more%20about%20the%20${plan.name}%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-full font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-foreground text-background hover:bg-accent"
                      : "border border-border text-foreground hover:bg-card hover:border-accent/50"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            {"Need a custom solution? Let's discuss your project."}
          </p>
          <motion.a
            href="https://wa.me/201022298621?text=Hi!%20I%20need%20a%20custom%20quote%20for%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-accent hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
