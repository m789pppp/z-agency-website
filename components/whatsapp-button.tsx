"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false)

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true)
        setHasShownExitIntent(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShownExitIntent])

  const whatsappUrl = "https://wa.me/201022298621?text=Hi!%20I%27m%20interested%20in%20your%20services."

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 flex items-center justify-center"
          aria-label="Open WhatsApp chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Chat Popup */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 right-0 w-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-green-500 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Z.AGENCY</div>
                    <div className="text-xs text-green-100">Typically replies instantly</div>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="bg-card p-4">
                <div className="bg-secondary rounded-lg p-3 mb-4">
                  <p className="text-sm text-foreground">
                    {"Hi there! 👋 How can we help you today? We're here to discuss your project."}
                  </p>
                  <span className="text-xs text-muted-foreground mt-2 block">Just now</span>
                </div>

                {/* Quick Replies */}
                <div className="space-y-2 mb-4">
                  <a
                    href={`${whatsappUrl}&text=I%20need%20a%20website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-2 text-sm text-center border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
                  >
                    I need a website
                  </a>
                  <a
                    href={`${whatsappUrl}&text=I%20need%20a%20mobile%20app`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-2 text-sm text-center border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
                  >
                    I need a mobile app
                  </a>
                  <a
                    href={`${whatsappUrl}&text=I%20want%20to%20discuss%20a%20project`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-2 text-sm text-center border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
                  >
                    Discuss my project
                  </a>
                </div>

                {/* Open WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Open WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Bottom Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-card/80 backdrop-blur-lg border-t border-border md:hidden z-40"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white font-medium rounded-full"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </motion.div>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setShowExitIntent(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full p-8 rounded-2xl bg-card border border-border text-center"
            >
              <button
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {"Wait! Don't Leave Yet"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {"Have questions about your project? Let's chat on WhatsApp and discuss how we can help."}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
