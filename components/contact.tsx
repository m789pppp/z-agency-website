"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MessageCircle, Calendar, ArrowRight, Send, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Build WhatsApp message
    const message = `Hi Z.AGENCY! I am interested in working with you.

Name: ${formData.name}
Company: ${formData.company}
Service Needed: ${formData.service}
Budget: ${formData.budget}

Project Details: ${formData.message}`

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/201022298621?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-blur" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Start Your Project
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Ready to transform your digital presence? Reach out and let&apos;s discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* WhatsApp - Primary */}
            <motion.a
              href="https://wa.me/201022298621"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 8 }}
              className="block p-6 rounded-2xl bg-green-500/10 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">WhatsApp (Fastest)</h3>
                  <p className="text-sm text-muted-foreground">Get a response within minutes</p>
                </div>
                <ArrowRight className="w-5 h-5 text-green-500 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:m789pppp@gmail.com"
              whileHover={{ scale: 1.02, x: 8 }}
              className="block p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                  <p className="text-sm text-muted-foreground">m789pppp@gmail.com</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>

            {/* Book Free Consultation */}
            <motion.a
              href="https://wa.me/201022298621?text=Hi!%20I%20want%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 8 }}
              className="block p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">Book Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">Discuss your project with us</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>

            {/* Contact Info */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Suez, Egypt</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-accent" />
                <span>+20 102 229 8621</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card/50 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
              
              <div className="space-y-4">
                {/* Name & Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm text-muted-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Service & Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm text-muted-foreground mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="SaaS Development">SaaS Development</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Mobile Apps">Mobile Apps</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Branding">Branding</option>
                      <option value="Marketing">Marketing</option>
                      <option value="SEO">SEO</option>
                      <option value="Automation">Automation</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm text-muted-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select budget</option>
                      <option value="Under $1K">Under $1K</option>
                      <option value="$1K - $5K">$1K - $5K</option>
                      <option value="$5K - $10K">$5K - $10K</option>
                      <option value="$10K - $25K">$10K - $25K</option>
                      <option value="$25K+">$25K+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send to WhatsApp
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Your message will be sent directly to WhatsApp for instant response.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
