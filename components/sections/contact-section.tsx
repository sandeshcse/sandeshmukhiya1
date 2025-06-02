import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Let's discuss your next project or just say hello</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={200}>
              <Card className="glassmorphism border-white/10 transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-400">sandesh.mukhiya@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={400}>
              <Card className="glassmorphism border-white/10 transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={300}>
            <Card className="glassmorphism border-white/10 transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Subject</label>
                  <Input
                    placeholder="Project Discussion"
                    className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 resize-none transition-colors"
                  />
                </div>

                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transform hover:scale-105 transition-all duration-300">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
