import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Lightbulb, Users, Zap } from "lucide-react"
import Image from "next/image"

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate software engineer with a love for creating digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden">
              <Image src="/images/hero-image.jpg" alt="Sandesh Mukhiya" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Software Engineer & Full-Stack Developer</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm Sandesh Mukhiya, a passionate software engineer with expertise in full-stack development. I love
                creating innovative solutions and building applications that make a difference in people's lives.
              </p>
              <p>
                My journey in technology has been driven by curiosity and a desire to solve complex problems. I
                specialize in modern web technologies and enjoy working on projects that challenge me to grow and learn
                new skills.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and sharing
                knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="glassmorphism border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
