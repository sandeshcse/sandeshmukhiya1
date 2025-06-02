import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing using Stripe.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A productivity app for managing tasks, projects, and deadlines with real-time updates and team collaboration.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather forecast application with location detection and 7-day predictions using OpenWeather API.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glassmorphism border-white/10 hover:border-cyan-400/50 transition-all duration-300 group ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4">
                    {project.featured && <Badge className="bg-cyan-500 text-black">Featured</Badge>}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-800 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-black">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
