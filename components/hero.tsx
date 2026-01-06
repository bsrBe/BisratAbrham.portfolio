"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Navbar from "./navbar"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Bisrat Abrham
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-muted-foreground"
          >
            Backend Engineer (Node.js | TypeScript)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-xl"
          >
            Specialized in building high-performance, scalable, and secure fintech systems.
            Experienced in microservices, distributed systems, and AWS cloud deployments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Button asChild size="lg">
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/Bisrat-Abrham_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-4"
          >
            <Link href="https://github.com/bsrBe" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/bisrat-abrham" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:bsr7349@gmail.com">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
          <div className="w-5 h-10 rounded-full border-2 border-primary mx-auto flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-2 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

