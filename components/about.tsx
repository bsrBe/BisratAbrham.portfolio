"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=500" alt="Bisrat Abrham" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Hi, I'm Bisrat Abrham</h3>
            <p className="text-muted-foreground">
              I am a Backend Engineer specialized in building high-performance, scalable, and secure fintech systems using Node.js, Express.js, and TypeScript.
              Experienced in microservice communication, database optimization, and cloud deployments (AWS).
            </p>
            <p className="text-muted-foreground">
              I focus on modular design, distributed systems, and fault-tolerant architectures that scale to millions of users.
              With a proven ability to contribute to both sophisticated backend logic and the development of intuitive user interfaces,
              I strive to create mission-critical applications with 99.9% uptime.
            </p>
            <p className="text-muted-foreground">
              Currently, I am working at EagleLion Systems Technology on the Dashen Super app platform,
              where I engineer microservices handling 100K+ daily transactions and implement robust observability layers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-primary mb-1">1+</div>
                  <div className="text-sm">Years of Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-primary mb-1">9+</div>
                  <div className="text-sm">Projects Completed</div>
                </CardContent>
              </Card>
            </div>

            {/* <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/Bisrat-Abrham_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download My Full CV
                </Link>
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

