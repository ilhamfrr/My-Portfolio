import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('Nmzaki12345', 10)

  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'ilhamfrr@admin.com',
      name: 'ilhamfrr',
      password: hashedPassword,
    },
  })

  console.log({ user })

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: JSON.stringify(["React", "Node.js", "MongoDB", "Stripe", "Redux"]),
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop interface, and team features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: JSON.stringify(["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "TailwindCSS"]),
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered platform that generates marketing content, blog posts, and social media updates using OpenAI API.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: JSON.stringify(["React", "Python", "FastAPI", "OpenAI", "TailwindCSS"]),
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with video calls, file sharing, and end-to-end encryption for secure communication.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: JSON.stringify(["React", "Node.js", "WebRTC", "Socket.io", "MongoDB"]),
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with data visualization, custom reports, and real-time metrics tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: JSON.stringify(["Next.js", "D3.js", "PostgreSQL", "Redis", "Docker"]),
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Social Media Scheduler",
      description: "A tool for scheduling and managing social media posts across multiple platforms with analytics integration.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      technologies: JSON.stringify(["React", "Express", "MySQL", "Bull Queue", "AWS"]),
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  for (const p of projects) {
    await prisma.project.create({ data: p })
  }

  const experiences = [
    {
      type: "work",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2024 - Present",
      description: "Leading development of enterprise web applications using React and Node.js. Mentoring junior developers and implementing CI/CD pipelines.",
      highlights: JSON.stringify(["Led team of 5 developers", "Improved app performance by 40%", "Implemented microservices architecture"]),
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2024 - 2025",
      description: "Developed and maintained client websites and web applications. Worked with cross-functional teams to deliver projects on time.",
      highlights: JSON.stringify(["Built 20+ client projects", "Introduced React to tech stack", "Reduced deployment time by 60%"]),
    },
    {
      type: "work",
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2022 - 2024",
      description: "Contributed to frontend development using React and helped with backend APIs. Participated in agile development process.",
      highlights: JSON.stringify(["Developed responsive UI components", "Integrated third-party APIs", "Improved code coverage to 80%"]),
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      company: "University of Terbuka",
      period: "2022 - 2028",
      description: "Graduated with honors. Focused on web development, data structures, and software engineering principles.",
      highlights: JSON.stringify(["GPA: 3.8/4.0", "Dean's List", "President of Coding Club"]),
    },
  ]

  for (const e of experiences) {
    await prisma.experience.create({ data: e })
  }

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

  for (const cat of skillCategories) {
    await prisma.skillCategory.create({
      data: {
        title: cat.title,
        skills: {
          create: cat.skills.map(name => ({ name }))
        }
      }
    })
  }

  console.log("Seeding completed.")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
