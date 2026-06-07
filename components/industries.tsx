"use client"

import { motion } from "framer-motion"
import { 
  Heart, 
  GraduationCap, 
  Home, 
  ShoppingCart, 
  Rocket, 
  Building2, 
  Truck, 
  UtensilsCrossed, 
  Landmark
} from "lucide-react"

const industries = [
  { icon: Heart, name: "Healthcare", description: "Digital health solutions" },
  { icon: GraduationCap, name: "Education", description: "EdTech platforms" },
  { icon: Home, name: "Real Estate", description: "Property tech" },
  { icon: ShoppingCart, name: "E-Commerce", description: "Online retail" },
  { icon: Rocket, name: "Startups", description: "MVP development" },
  { icon: Building2, name: "Enterprise", description: "Corporate solutions" },
  { icon: Truck, name: "Logistics", description: "Supply chain tech" },
  { icon: UtensilsCrossed, name: "Restaurants", description: "F&B technology" },
  { icon: Landmark, name: "Finance", description: "FinTech solutions" }
]

export function Industries() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Industries</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Expertise Across Sectors
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Deep domain knowledge across multiple industries, delivering tailored solutions that understand your unique challenges.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/30 hover:bg-card transition-all duration-300 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <industry.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{industry.name}</h3>
                <p className="text-xs text-muted-foreground">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
