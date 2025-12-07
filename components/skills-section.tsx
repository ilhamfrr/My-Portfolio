"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React", "Next.js", "TypeScript", "JavaScript", 
      "TailwindCSS", "HTML5", "CSS3", "Redux", 
      "React Query", "Framer Motion", "Webpack", "Vite"
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js", "Express.js", "Python", "Django", 
      "PostgreSQL", "MongoDB", "MySQL", "Redis", 
      "GraphQL", "REST APIs", "WebSockets", "Docker"
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git", "GitHub", "CI/CD", "AWS", "Vercel", 
      "Netlify", "Jest", "Cypress", "Figma", 
      "Postman", "Linux", "Agile/Scrum"
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-background rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
