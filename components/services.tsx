"use client"

import { motion } from "framer-motion"
import { 
  Globe, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Zap, 
  Bot,
  Layout,
  Megaphone,
  ArrowUpRight,
  Code,
  Search
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Business websites, landing pages, e-commerce, and custom platforms built with cutting-edge technologies.",
    features: ["Business Websites", "Landing Pages", "E-Commerce", "Custom Platforms"],
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Layout,
    title: "SaaS Development",
    description: "Scalable dashboards, CRM systems, ERP solutions, and enterprise software that drive business growth.",
    features: ["Dashboards", "CRM Systems", "ERP Solutions", "AI Platforms"],
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed specifically for your unique business requirements and workflows.",
    features: ["Custom Systems", "API Development", "Integrations", "Backend Solutions"],
    gradient: "from-indigo-500/20 to-violet-500/20"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that users love.",
    features: ["iOS Apps", "Android Apps", "Cross Platform", "React Native"],
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts. From wireframes to polished interfaces and design systems.",
    features: ["Product Design", "SaaS Design", "Mobile Design", "Design Systems"],
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: TrendingUp,
    title: "Branding",
    description: "Complete brand identity systems that make your business memorable and recognizable.",
    features: ["Brand Identity", "Visual Identity", "Logo Systems", "Brand Guidelines"],
    gradient: "from-orange-500/20 to-amber-500/20"
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Data-driven marketing strategies that generate leads and accelerate growth.",
    features: ["Social Media", "Performance Ads", "Content Marketing", "Email Marketing"],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Search,
    title: "SEO",
    description: "Search engine optimization strategies to improve your visibility and organic traffic.",
    features: ["On-Page SEO", "Technical SEO", "Content Strategy", "Analytics"],
    gradient: "from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline operations with intelligent automation for CRM, workflows, and business processes.",
    features: ["CRM Automation", "WhatsApp Bots", "Workflow Automation", "Process Optimization"],
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Custom AI agents, chatbots, and intelligent assistants that transform your business.",
    features: ["AI Agents", "Chatbots", "AI Assistants", "Custom Integrations"],
    gradient: "from-cyan-500/20 to-teal-500/20"
  }
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">What We Do</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Full-Service Digital Excellence
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            From concept to launch, we deliver end-to-end digital solutions that drive real business results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="h-full p-5 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://wa.me/201022298621?text=Hi!%20I%20need%20help%20with%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-accent transition-colors duration-300"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
