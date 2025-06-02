"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, Facebook } from "lucide-react"
import Image from "next/image"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const texts = ["Full-Stack Developer", "Software Engineer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[currentIndex].length) {
        setCurrentText((prev) => prev + texts[currentIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      } else {
        setTimeout(() => {
          setCurrentText("")
          setCharIndex(0)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }, 2000)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [charIndex, currentIndex, texts])

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  Hi, I'm <span className="text-gradient font-orbitron">Sandesh</span>
                </h1>
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <span className="text-2xl md:text-3xl lg:text-4xl text-cyan-400 font-mono">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={400}>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Passionate about creating innovative solutions and building exceptional digital experiences with modern
                technologies. Let's build something amazing together.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold animate-glow transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://drive.google.com/file/d/1j2WJrqsmAW8HWe9kf1_AO4sdq4tEOv3i/view', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={800}>
              <div className="flex gap-6 justify-center lg:justify-start">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/sandesh-mukhiya-6326612b5/', '_blank')}
                >
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://drive.google.com/file/d/1j2WJrqsmAW8HWe9kf1_AO4sdq4tEOv3i/view', '_blank')}
                >
                  <Download className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://github.com/sandeshcse', '_blank')}
                >
                  <Github className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://www.facebook.com/sandesh120', '_blank')}
                >
                  <Facebook className="h-6 w-6" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal direction="right" delay={300}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 animate-float">
                  <Image
                    src="/img1.jpg"
                    alt="Sandesh Mukhiya"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <ScrollReveal direction="fade" delay={1000}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-cyan-400" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
