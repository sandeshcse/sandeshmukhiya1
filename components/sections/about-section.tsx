import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Lightbulb, Users, Zap } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player and communicator",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate software engineer with a love for creating digital solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-6">
              <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <Image src="/img2.jpg" alt="Sandesh Mukhiya" fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">Software Engineer & Full-Stack Developer</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm Sandesh Mukhiya, a passionate computer science student with a knack for web development and design. I'm proficient in programming languages like C, C++, Python, and SQL. As a fast learner, I'm always eager to expand my knowledge and tackle new challenges in the ever-evolving world of technology.
                </p>
                <p>
                  Currently pursuing my Diploma in Computer Science Engineering at Quantum University Roorkee, India, I specialize in web development and enjoy working on projects that challenge me to grow and learn new skills.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "C/C++", "SQL", "Python", "JavaScript", "React", "Next.js"].map((tech, index) => (
                  <ScrollReveal key={tech} direction="up" delay={400 + index * 100}>
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={200 + index * 100}>
              <Card className="glassmorphism border-white/10 hover:border-cyan-400/50 transition-all duration-300 group transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors group-hover:animate-pulse">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
