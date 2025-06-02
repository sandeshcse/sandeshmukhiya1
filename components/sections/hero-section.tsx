"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
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

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Passionate about creating innovative solutions and building exceptional digital experiences with modern
              technologies. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold animate-glow"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-cyan-400">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cyan-400">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cyan-400">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 animate-float">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Sandesh Mukhiya"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-cyan-400" />
        </div>
      </div>
    </section>
  )
}
