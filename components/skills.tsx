"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  core: ["TypeScript", "JavaScript", "Python"],
  architecture: ["Node.js", "Express.js", "NestJS", "REST APIs", "Distributed Systems", "Microservices", "Fault-Tolerant Design"],
  data: ["Kafka", "MongoDB", "MySQL", "PostgreSQL", "SQLite", "Redis", "WebSocket"],
  cloud: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "GitHub Actions", "Containerization"],
  frontend: ["React", "HTML/CSS", "UX/UI Design"],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Skills & Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in building high-performance, scalable, and secure fintech systems with a focus on modular design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Core Languages" skills={skills.core} delay={0.1} />
          <SkillCard title="System Architecture" skills={skills.architecture} delay={0.2} />
          <SkillCard title="Data & Messaging" skills={skills.data} delay={0.3} />
          <SkillCard title="Cloud & DevOps" skills={skills.cloud} delay={0.4} />
          <SkillCard title="Frontend & UI" skills={skills.frontend} delay={0.5} />
        </div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  title: string
  skills: string[]
  delay: number
  className?: string
}

function SkillCard({ title, skills, delay, className }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

