"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Sparkles, GraduationCap, School, HeartPulse, ShoppingCart, Palmtree, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 4,
    title: "Zed Agency E-Commerce Platform",
    category: "E-Commerce",
    description: "Full-featured e-commerce platform with admin dashboard, order management, payment integration, and mobile app — all in one system.",
    images: ["/project-ecommerce.jpg"],
    technologies: ["React", "Node.js", "Stripe", "Mobile App"],
    highlights: ["Admin dashboard", "Order management", "Payment integration", "Mobile storefront"],
    icon: ShoppingCart,
    facebookUrl: "https://www.facebook.com/share/p/1DQjx8oY5j/?mibextid=wwXIfr"
  },
  {
    id: 5,
    title: "Tourism Software System",
    category: "Tourism Technology",
    description: "Tailored tourism platform with booking systems, excursion management, custom API integration, and all-in-one CRM for travel businesses.",
    images: ["/project-tourism.jpg"],
    technologies: ["Next.js", "CRM", "Booking API", "Custom Integrations"],
    highlights: ["Booking systems", "Excursion management", "Custom API integration", "All-in-one CRM"],
    icon: Palmtree,
    facebookUrl: "https://www.facebook.com/share/p/1DQjx8oY5j/?mibextid=wwXIfr"
  },
  {
    id: 1,
    title: "Z-magic",
    category: "Education Technology",
    description: "AI-powered chat assistant helping students discover admissions opportunities, scholarships, competitions, and program details through natural conversation in Arabic and English.",
    images: ["/zmagic-landing.jpg", "/zmagic-chat-en.jpg", "/zmagic-chat-ar.jpg"],
    technologies: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
    highlights: ["Bilingual AI assistant", "Instant student support", "University admissions guidance", "Conversational UX"],
    icon: GraduationCap,
    facebookUrl: null
  },
  {
    id: 2,
    title: "Red Sea STEM School Website",
    category: "Education Website",
    description: "Website created for Red Sea STEM School to showcase school activities, student achievements, educational programs, and community engagement.",
    images: ["/redseastem-home.jpg", "/redseastem-innovations.jpg"],
    technologies: ["React", "Node.js", "Responsive Design", "CMS"],
    highlights: ["Modern school website", "Education-focused UX", "Responsive design", "Community showcase"],
    icon: School,
    facebookUrl: null
  },
  {
    id: 3,
    title: "PhysioConnect Coventry",
    category: "Education Website",
    description: "Official platform for the PhysioConnect physiotherapy student club at Coventry University Egypt, featuring activities, leadership, and a full year of events and programs.",
    images: ["/project-physioconnect.jpg"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    highlights: ["Club activities hub", "Leadership showcase", "Event programming", "Student community platform"],
    icon: HeartPulse,
    facebookUrl: null
  }
]

const categories = ["All", "E-Commerce", "Tourism Technology", "Education Technology", "Education Website"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [imageIndices, setImageIndices] = useState<Record<number, number>>({})

  const getImageIndex = (projectId: number) => imageIndices[projectId] ?? 0

  const goToImage = (projectId: number, direction: 1 | -1, total: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setImageIndices((prev) => {
      const current = prev[projectId] ?? 0
      const next = (current + direction + total) % total
      return { ...prev, [projectId]: next }
    })
  }

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Our Work</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Real projects delivering real impact. Explore our portfolio of successful digital solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500">
                  {/* Image Carousel */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={getImageIndex(project.id)}
                        src={project.images[getImageIndex(project.id)]}
                        alt={`${project.title} - screenshot ${getImageIndex(project.id) + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </AnimatePresence>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 glass rounded-lg px-3 py-2 pointer-events-none"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-foreground">{project.category}</span>
                      </div>
                    </motion.div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center pointer-events-none">
                      <project.icon className="w-5 h-5 text-accent" />
                    </div>

                    {/* Carousel Navigation - only show if multiple images */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => goToImage(project.id, -1, project.images.length, e)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent hover:text-background z-10"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => goToImage(project.id, 1, project.images.length, e)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent hover:text-background z-10"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {project.images.map((_, imgIdx) => (
                            <button
                              key={imgIdx}
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setImageIndices((prev) => ({ ...prev, [project.id]: imgIdx }))
                              }}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                imgIdx === getImageIndex(project.id)
                                  ? "bg-accent w-5"
                                  : "bg-foreground/40 w-1.5 hover:bg-foreground/60"
                              }`}
                              aria-label={`Go to image ${imgIdx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.facebookUrl && (
                      <a
                        href={project.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-600/20 hover:bg-blue-600/20 transition-colors"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        View on Facebook
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://wa.me/201022298621?text=Hi!%20I%20want%20to%20discuss%20a%20project%20like%20the%20ones%20in%20your%20portfolio."
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
