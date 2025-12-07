"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2024 - Present",
    description: "Leading development of enterprise web applications using React and Node.js. Mentoring junior developers and implementing CI/CD pipelines.",
    highlights: ["Led team of 5 developers", "Improved app performance by 40%", "Implemented microservices architecture"],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2024 - 2025",
    description: "Developed and maintained client websites and web applications. Worked with cross-functional teams to deliver projects on time.",
    highlights: ["Built 20+ client projects", "Introduced React to tech stack", "Reduced deployment time by 60%"],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "StartUp Hub",
    period: "2022 - 2024",
    description: "Contributed to frontend development using React and helped with backend APIs. Participated in agile development process.",
    highlights: ["Developed responsive UI components", "Integrated third-party APIs", "Improved code coverage to 80%"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University of Terbuka",
    period: "2022 - 2028",
    description: "Graduated with honors. Focused on web development, data structures, and software engineering principles.",
    highlights: ["GPA: 3.8/4.0", "Dean's List", "President of Coding Club"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                {exp.type === "work" ? (
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                ) : (
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                )}
              </div>
              
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-border" />
              )}
              
              <motion.div
                className="bg-background rounded-lg p-6 shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
