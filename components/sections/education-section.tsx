import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      gpa: "3.8/4.0",
      description:
        "Specialized in Machine Learning and Software Engineering. Completed thesis on distributed systems optimization.",
      achievements: ["Dean's List", "Research Assistant", "Graduate Teaching Assistant"],
      courses: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Software Architecture"],
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      gpa: "3.7/4.0",
      description:
        "Focused on software development and computer systems. Active member of the Computer Science Society.",
      achievements: ["Magna Cum Laude", "ACM Programming Contest Winner", "Hackathon Champion"],
      courses: ["Data Structures", "Computer Networks", "Database Systems", "Web Development"],
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-123456",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-789012",
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-345678",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My academic journey and professional certifications
            </p>
          </div>
        </ScrollReveal>

        {/* Education */}
        <div className="mb-16">
          <ScrollReveal direction="left" delay={200}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-cyan-400" />
              Education
            </h3>
          </ScrollReveal>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <ScrollReveal key={index} direction="up" delay={300 + index * 200}>
                <Card className="glassmorphism border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                              {edu.degree}
                            </h4>
                            <h5 className="text-lg font-semibold text-white">{edu.institution}</h5>
                          </div>
                          <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                            GPA: {edu.gpa}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{edu.description}</p>

                        <div className="space-y-3">
                          <div>
                            <h6 className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements:</h6>
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.map((achievement) => (
                                <Badge key={achievement} variant="outline" className="border-cyan-400/30 text-cyan-400">
                                  <Award className="w-3 h-3 mr-1" />
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h6 className="text-sm font-semibold text-purple-400 mb-3">Relevant Coursework:</h6>
                        <div className="space-y-2">
                          {edu.courses.map((course) => (
                            <div key={course} className="text-sm text-gray-300 bg-slate-800/30 px-3 py-1 rounded-md">
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <ScrollReveal direction="right" delay={200}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="h-8 w-8 text-purple-400" />
              Professional Certifications
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} direction="up" delay={300 + index * 150}>
                <Card className="glassmorphism border-white/10 hover:border-purple-400/50 transition-all duration-300 group transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                        <Award className="h-8 w-8 text-purple-400" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                        <span>{cert.date}</span>
                        <span>•</span>
                        <span>{cert.credentialId}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
