import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function EducationSection() {
  const education = [
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "Quantum University",
      location: "Roorkee, Uttarakhand, India",
      period: "2022 - 2025",
      gpa: "--/10",
      description: `Completed Diploma in Computer Science with hands-on experience in software development. Developed an E-commerce website featuring a location-based "Shop Near Me" functionality as part of the final project.`,
      achievements: [" Completed Major Project: E-commerce Web App", "Top Performer in Programming Lab", "Built and Deployed Multiple Mini Projects"],
      courses: ["Operating System", "Computer Network", "Programming in C/C++", "Software Engineering"],
    },
    {
      degree: "Secondary Education (10th)",
      institution: "Shree Model Secondary School",
      location: "Simara Bhawanipur, Rautahat, Nepal",
      period: "2019 - 2022",
      gpa: "3.45/4.0",
      description:
        "Ranked top of the class with excellent academic performance across all subjects. Developed a deep interest in computer science and digital technology. Recognized for leadership, discipline, and consistent academic excellence.",
      achievements: ["BS2078 Batch SEE Topper"],
      courses: ["Science", "English", "Math", "Social Studies", "Nepali", "Account" , "Optional Math"],
    },
  ]

  const certifications = [
    {
      name: "Certified Frontend Developer",
      issuer: "W3Schools",
      date: "2023",
      
    },
    {
      name: "Certified AI Expert",
      issuer: "Freedom with AI",
      date: "2024",
    },
    // {
    //   name: "Google IT Support Professional Certificate",
    //   issuer: "Coursera",
    //   date: "2024",
    // },
    {
      name: " IBM Full Stack Software Developer",
      issuer: "Coursera",
      date: "2025",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-white">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My academic journey and professional certifications
            </p>
          </div>
        </ScrollReveal>

        {/* Education */}
        <div>
          <ScrollReveal direction="left" delay={200}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <GraduationCap className="h-8 w-8 text-cyan-400" />
              Education
            </h3>
          </ScrollReveal>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <ScrollReveal key={index} direction="up" delay={300 + index * 200}>
                <Card className="bg-slate-800/50 border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
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

                        <div className="flex items-center gap-4 mb-4 text-gray-300">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-cyan-400" />
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
                            <div key={course} className="text-sm text-gray-300 bg-slate-900/50 px-3 py-1 rounded-md">
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
        <div className="mt-16">
          <ScrollReveal direction="right" delay={200}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
              <Award className="h-8 w-8 text-purple-400" />
              Professional Certifications
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} direction="up" delay={300 + index * 150}>
                <Card className="bg-slate-800/50 border-white/10 hover:border-purple-400/50 transition-all duration-300 group transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                        <Award className="h-8 w-8 text-purple-400" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors text-white">
                        {cert.name}
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-center gap-4 text-xs text-gray-300">
                        <span>{cert.date}</span>
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
