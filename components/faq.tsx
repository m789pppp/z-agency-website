"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Pricing depends on scope and requirements. A simple landing page starts at a different price point than a complex SaaS platform. During our free consultation, we will discuss your specific needs and provide a detailed, transparent quote with no hidden fees."
  },
  {
    question: "How long does development take?",
    answer: "It depends on your project. Every project is unique with different requirements, complexity, and scope. During our free consultation, we will assess your needs and provide a realistic timeline tailored to your specific project."
  },
  {
    question: "Do you work with companies outside Egypt?",
    answer: "Yes! We work with clients globally. Our remote team structure allows us to serve businesses anywhere in the world with excellent communication and delivery."
  },
  {
    question: "Do you build SaaS products?",
    answer: "Yes, SaaS development is one of our core specialties. We build scalable dashboards, CRM systems, ERP solutions, and custom SaaS platforms using modern technologies like Next.js, React, and cloud infrastructure."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes! We offer ongoing maintenance and support services to keep your product updated, secure, and performing optimally. We can discuss maintenance plans based on your needs."
  },
  {
    question: "Do you provide marketing services?",
    answer: "Yes, we offer comprehensive digital marketing services including social media marketing, performance ads, SEO, and content marketing to help your business grow online."
  },
  {
    question: "Can I request a custom system?",
    answer: "Absolutely! We specialize in building custom solutions tailored to your specific business needs. Whether it is automation, AI integration, or a unique platform, we can build it."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">FAQ</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Common Questions
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/30 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium text-foreground pr-8">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-accent" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <motion.a
            href="https://wa.me/201022298621?text=Hi!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent transition-colors"
          >
            Ask on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
