"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Trophy } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Backend Engineer",
    company: "EagleLion Systems Technology",
    period: "08/2025 - Present",
    description:
      "Working on the Dashen Super App platform. Engineered core fintech microservices handled 100K+ daily transactions. Designed Kafka-based observability layers and optimized MySQL schemas for high concurrency.",
    type: "work",
    skills: ["Node.js", "TypeScript", "Kafka", "MySQL", "Distributed Systems"],
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "Lersha",
    period: "07/2025 - 08/2025",
    description:
      "Designed a permission-based authentication and authorization system reducing unauthorized access by 99.9%. Developed modular service architecture for data synchronization.",
    type: "internship",
    skills: ["Node.js", "Express", "RBAC", "Microservices"],
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Ministry of Innovation & Technology (MiNT)",
    period: "05/2022 - 08/2022",
    description:
      "Developed a full-stack inventory system enabling real-time stock visibility. Integrated JWT authentication and WebSocket dashboards for instant analytics.",
    type: "internship",
    skills: ["React", "Node.js", "JWT", "WebSockets"],
  },
  {
    id: 4,
    title: "AWS Solutions Architect - Associate",
    company: "AWS Certified",
    period: "2025",
    description: "Validated expertise in designing scalable, cost-efficient, and secure cloud architectures using EC2, Lambda, and VPC.",
    type: "achievement",
    skills: ["Cloud Architecture", "AWS", "Security"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Experience & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and notable achievements in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}>
                  <Card>
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="rounded-full p-2 bg-primary/10 text-primary">
                        {exp.type === "work" ? (
                          <Briefcase className="h-5 w-5" />
                        ) : exp.type === "internship" ? (
                          <GraduationCap className="h-5 w-5" />
                        ) : (
                          <Trophy className="h-5 w-5" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>
                          {exp.company} | {exp.period}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

