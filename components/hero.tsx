"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="gradient-blur absolute inset-0" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-muted-foreground">Web • SaaS • Mobile • Branding • SEO</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-balance"
          >
            We Build Websites
            <br />
            <span className="text-gradient">SaaS Products & Digital Brands</span>
            <br />
            That Grow Businesses
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            From websites and mobile apps to SaaS platforms and marketing systems, 
            we help companies launch, scale, and dominate their market.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://wa.me/201022298621?text=Hi!%20I%20want%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-accent transition-colors duration-300"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://wa.me/201022298621?text=Hi!%20I%20want%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-card hover:border-accent/50 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-accent" />
              Book Free Consultation
            </motion.a>
          </motion.div>

          {/* Floating Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 relative"
          >
            <div className="relative mx-auto max-w-4xl">
              {/* Main Dashboard Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass rounded-2xl p-6 border-gradient"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">Total Users</div>
                    <div className="text-2xl font-bold text-foreground">22</div>
                    <div className="text-xs text-accent">+4 this week</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">Monthly Revenue</div>
                    <div className="text-2xl font-bold text-foreground">$840</div>
                    <div className="text-xs text-accent">+12% vs last month</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-2">Conversion</div>
                    <div className="text-2xl font-bold text-foreground">3.2%</div>
                    <div className="text-xs text-accent">+0.8% vs last month</div>
                  </div>
                </div>
                {/* Chart placeholder */}
                <div className="mt-4 h-32 bg-secondary/30 rounded-lg flex items-end justify-around px-4 pb-4">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.05 }}
                      className="w-4 bg-gradient-to-t from-accent/50 to-accent rounded-t"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-16 top-1/4 glass rounded-xl p-4 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Project Started</div>
                    <div className="text-xs text-muted-foreground">New client onboarded</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-12 top-1/3 glass rounded-xl p-4 hidden lg:block"
              >
                <div className="text-3xl font-bold text-accent">+38%</div>
                <div className="text-xs text-muted-foreground">Growth Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
