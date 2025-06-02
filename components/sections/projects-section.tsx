"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built to showcase my work and connect with potential clients. Features a responsive design and smooth animations.",
      image: "/portfolioproject.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      liveUrl: "https://sandeshcse.github.io/sandeshmukhiya/",
      githubUrl: "https://github.com/sandeshcse/sandeshmukhiya",
      featured: true,
    },
    {
      title: "ShopVista E-commerce",
      description: "A modern e-commerce platform featuring user authentication, product browsing, and a seamless shopping experience. Includes demo login functionality for easy testing.",
      image: "/ecommerceproject.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://sandeshcse.github.io/ecommercestatic/",
      githubUrl: "https://github.com/sandeshcse/ecommercestatic",
      featured: true,
    },
    {
      title: "Weather Website",
      description: "Stay informed with the latest weather updates, forecasts, and alerts. Our site offers real-time data, accurate predictions, and detailed weather reports for your area.",
      image: "/weatherproject.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
      liveUrl: "https://sandeshcse.github.io/SandeshWeatherWebsite/",
      githubUrl: "https://github.com/sandeshcse/SandeshWeatherWebsite",
      featured: true,
    },
    {
      title: "TO-DO-LIST APP",
      description: "A simple, user-friendly to-do list app built with HTML, CSS, and JavaScript. Stay organized and boost productivity!",
      image: "/todoproject.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://sandeshcse.github.io/To-Do-List-App/",
      githubUrl: "https://github.com/sandeshcse/To-Do-List-App",
      featured: false,
    },
    {
      title: "School Website",
      description: "A responsive and feature-rich Boarding school website built with HTML, CSS, JS, and Bootstrap.",
      image: "/schoolproject.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://sandeshcse.github.io/schoolwebsite/",
      githubUrl: "https://github.com/sandeshcse/schoolwebsite",
      featured: false,
    },
    {
      title: "English & Nepali Typing Practice",
      description: "A specialized typing practice website for Nepali and English, designed especially for PSC aspirants. Features include language selection, custom text input, font options, and timed practice sessions.",
      image: "/typingproject.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      liveUrl: "https://sandeshtyping.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={200 + index * 150}>
              <Card
                className={`glassmorphism border-white/10 hover:border-cyan-400/50 transition-all duration-500 group transform hover:scale-105 ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-t-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4">
                      {project.featured && <Badge className="bg-cyan-500 text-black animate-pulse">Featured</Badge>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-600 text-black transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={600}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://github.com/sandeshcse/', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
