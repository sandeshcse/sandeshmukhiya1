"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Download, Facebook } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import emailjs from '@emailjs/browser'
import { EMAIL_CONFIG } from "@/lib/email-config"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    console.log('Form submitted with data:', formData)
    console.log('Using EmailJS config:', EMAIL_CONFIG)

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
      
      console.log('Sending email with params:', templateParams)

      const response = await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        templateParams,
        EMAIL_CONFIG.publicKey
      )

      console.log('EmailJS response:', response)

      if (response.status === 200) {
        toast.success('Message sent successfully!')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

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

        <div className="grid md:grid-cols-2 gap-8">
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
                      <p className="text-gray-400">cse.sandesh1@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-400">+977 9821881375 / +91 8864054818</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-400">Simara Bhawanipur, Rautahat, Nepal</p>
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
                      onClick={() => window.open('https://github.com/sandeshcse', '_blank')}
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                      onClick={() => window.open('https://www.linkedin.com/in/sandesh-mukhiya-6326612b5/', '_blank')}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                      onClick={() => window.open('https://drive.google.com/file/d/1j2WJrqsmAW8HWe9kf1_AO4sdq4tEOv3i/view', '_blank')}
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
                      onClick={() => window.open('https://www.facebook.com/sandesh120', '_blank')}
                    >
                      <Facebook className="w-5 h-5" />
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
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">First Name</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">Last Name</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                      className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      required
                      className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-slate-800/50 border-gray-600 focus:border-cyan-400 resize-none transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transform hover:scale-105 transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
