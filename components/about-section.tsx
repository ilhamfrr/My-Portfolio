"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Palette, Rocket, Users } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating beautiful, responsive interfaces with attention to detail.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed, efficiency, and user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams using agile methodologies and Git workflows.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Turning ideas into reality through code and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I&apos;m Ilham Faturrahman 👋
            </h3>
            <p className="text-muted-foreground mb-4">
              I&apos;m a passionate Full Stack Developer with 5+ years of experience 
              building web applications that solve real-world problems. My journey 
              in tech started with a curiosity about how things work on the internet, 
              and has evolved into a career focused on creating impactful digital solutions.
            </p>
            <p className="text-muted-foreground mb-4">
              I specialize in React, Next.js, Node.js, and modern web technologies. 
              I love tackling complex challenges and turning them into simple, 
              elegant solutions that users love.
            </p>
            <p className="text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new technologies, 
              contributing to open source, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
