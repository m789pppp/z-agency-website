"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Sparkles, GraduationCap, School, Leaf, ShoppingCart, Palmtree } from "lucide-react"

const projects = [
  {
    id: 4,
    title: "Zed Agency E-Commerce Platform",
    category: "E-Commerce",
    description: "Full-featured e-commerce platform with admin dashboard, order management, payment integration, and mobile app — all in one system.",
    image: "/project-ecommerce.jpg",
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
    image: "/project-tourism.jpg",
    technologies: ["Next.js", "CRM", "Booking API", "Custom Integrations"],
    highlights: ["Booking systems", "Excursion management", "Custom API integration", "All-in-one CRM"],
    icon: Palmtree,
    facebookUrl: "https://www.facebook.com/share/p/1DQjx8oY5j/?mibextid=wwXIfr"
  },
  {
    id: 1,
    title: "Z Admission",
    category: "Education Technology",
    description: "AI-powered platform helping students discover admissions opportunities, scholarships, competitions, summer programs, and educational guidance.",
    image: "/project-zadmission.jpg",
    technologies: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
    highlights: ["Egypt-focused education platform", "AI-powered assistant", "Student opportunity discovery", "Admissions guidance"],
    icon: GraduationCap,
    facebookUrl: null
  },
  {
    id: 2,
    title: "Red Sea STEM School Website",
    category: "Education Website",
    description: "Website created for Red Sea STEM School to showcase school activities, student achievements, educational programs, and community engagement.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Responsive Design", "CMS"],
    highlights: ["Modern school website", "Education-focused UX", "Responsive design", "Community showcase"],
    icon: School,
    facebookUrl: null
  },
  {
    id: 3,
    title: "AI Hydroponic Farm Project",
    category: "Artificial Intelligence",
    description: "AI-based hydroponic farm monitoring system using sensors and machine learning for prediction and optimization.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop",
    technologies: ["Python", "TensorFlow", "IoT Sensors", "Data Analytics"],
    highlights: ["Sensor integration", "Predictive analytics", "Sustainability focus", "Competition project"],
    icon: Leaf,
    facebookUrl: null
  }
]

const categories = ["All", "E-Commerce", "Tourism Technology", "Education Technology", "Education Website", "Artificial Intelligence"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 glass rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-foreground">{project.category}</span>
                      </div>
                    </motion.div>

                    {/* Icon */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-accent" />
                    </div>
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
