"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & Others" },
  ]

  const skills = {
    frontend: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "JavaScript", level: 94, icon: "🟨" },
      { name: "HTML/CSS", level: 96, icon: "🌐" },
    ],
    backend: [
      { name: "Node.js", level: 87, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "MongoDB", level: 82, icon: "🍃" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "REST APIs", level: 90, icon: "🔗" },
    ],
    tools: [
      { name: "Git", level: 92, icon: "📝" },
      { name: "Docker", level: 78, icon: "🐳" },
      { name: "AWS", level: 75, icon: "☁️" },
      { name: "Vercel", level: 88, icon: "▲" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Figma", level: 70, icon: "🎨" },
    ],
  }

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-800/50 rounded-lg p-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 ${
                  activeCategory === category.id ? "bg-cyan-500 text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <Card
              key={index}
              className="glassmorphism border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                    {skill.level}%
                  </Badge>
                </div>
                <Progress value={skill.level} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
