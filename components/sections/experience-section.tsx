import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "2025 - Present",
      description:
        "Leading development of cloud-based solutions, mentoring junior developers, and implementing CI/CD pipelines. Improved application performance by 40% and reduced deployment time by 60%.",
      technologies: ["React", "Node.js", "AWS", "Next.js", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      location: "Remote",
      period: "2024 - 2025",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studios",
      location: "Remote",
      period: "2022 - 2023",
      description:
        "Created responsive user interfaces and implemented design systems for various client projects. Worked closely with designers to bring mockups to life.",
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "Sass"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">My professional journey and key achievements</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-600 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={200 + index * 200}>
                <div
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform md:-translate-x-1/2 z-10 animate-pulse" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="glassmorphism border-white/10 hover:border-cyan-400/50 transition-all duration-500 group transform hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                              {exp.title}
                            </h3>
                            <h4 className="text-lg font-semibold text-white">{exp.company}</h4>
                          </div>
                          <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                            {exp.period}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 mb-4 text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                              style={{ animationDelay: `${techIndex * 100}ms` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
