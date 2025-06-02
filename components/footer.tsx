"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Download, Facebook } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900/80 border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <ScrollReveal direction="up" delay={100}>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-bold text-gradient">Sandesh Mukhiya</h3>
              <p className="text-gray-400 max-w-sm">
                Passionate software engineer creating innovative digital solutions with modern technologies.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://github.com/sandeshcse', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/sandesh-mukhiya-6326612b5/', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://drive.google.com/file/d/1j2WJrqsmAW8HWe9kf1_AO4sdq4tEOv3i/view', '_blank')}
                >
                  <Download className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                  onClick={() => window.open('https://www.facebook.com/sandesh120', '_blank')}
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase())
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>cse.sandesh1@gmail.com</p>
                <p>+91 8864054818</p>
                <p>Rautahat, Nepal</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Sandesh Mukhiya</span>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
              <Button
                onClick={scrollToTop}
                size="icon"
                className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 transform hover:scale-110 transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
