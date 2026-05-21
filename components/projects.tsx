"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const PROJECT_IMAGES = {
  dashen: "/dashen.png",
  scholarshub: "/scholarshub.png",
  reboot: "/RebootAdventures.jpg",
  bookcompass: "/bookcompass.jpg",
  proforma: "/Proforma.jpg",
  comfy: "/comfyJournal.png",
  auth: "/authJS.png",
  lersha: "/lersha.jpg",
  kenis: "/kenis.png",
}

const projects = [
  {
    id: 1,
    title: "Dashen Branch Portal",
    type: "Enterprise Banking Portal",
    isPrivate: true,
    description: "National branch management system serving 700+ branches and millions of users across Ethiopia.",
    features: [
      "Comprehensive authentication system & logging",
      "Customer action workflows & transaction processing",
      "Branch operations management",
      "Real-time reporting & analytics",
      "Enterprise security & audit trails",
    ],
    image: PROJECT_IMAGES.dashen,
    objectFit: "contain" as const,
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Redis", "JWT Auth"],
    liveUrl: "#",
    githubUrl: "#",
    roles: [
      "Backend Developer - Core Infrastructure",
      "Designed & implemented comprehensive authentication system",
      "Built logging & audit trail infrastructure",
      "Developed customer action processing workflows",
      "Supported 700+ branches across Ethiopia",
      "Served millions of users",
    ],
    group: "fintech",
  },
  {
    id: 2,
    title: "Dashen Paperless Services",
    type: "Enterprise Automation System",
    isPrivate: true,
    description: "Automated ticketing and fund transfer system with central system integration.",
    features: [
      "Automated ticket management & routing",
      "Fund transfer orchestration & reconciliation",
      "Central system configuration alignment",
      "Real-time transaction processing",
      "Compliance & audit logging",
    ],
    image: PROJECT_IMAGES.dashen,
    objectFit: "contain" as const,
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Redis", "Message Queue"],
    liveUrl: "#",
    githubUrl: "#",
    roles: [
      "Backend Developer",
      "Architected paperless automation system",
      "Implemented automated ticket processing",
      "Integrated with central banking systems",
      "Developed fund transfer orchestration",
    ],
    group: "fintech",
  },
  {
    id: 3,
    title: "Dashen Internet Banking System",
    type: "Digital Banking Platform",
    isPrivate: true,
    description: "Comprehensive internet banking solution with third-party payment integrations.",
    features: [
      "Enterprise authentication system",
      "Telebirr wallet integration",
      "M-Pesa transfer capabilities",
      "Real-time transaction processing",
      "Security & fraud detection",
      "Multi-channel fund transfers",
    ],
    image: PROJECT_IMAGES.dashen,
    objectFit: "contain" as const,
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Third-party APIs", "Payment Gateway"],
    liveUrl: "#",
    githubUrl: "#",
    roles: [
      "Backend Developer",
      "Built enterprise authentication system",
      "Integrated Telebirr wallet services",
      "Integrated M-Pesa transfer capabilities",
      "Implemented secure payment processing",
      "Ensured banking compliance & security",
    ],
    group: "fintech",
  },
  {
    id: 4,
    title: "Scholarshub",
    type: "Full-stack SaaS",
    description: "A complete system for managing scholarship applicants and agency operations.",
    features: [
      "Document submission & task workflow",
      "Real-time messaging & Video conferencing",
      "Admin dashboard for FAQs, Blogs & Users",
      "Enterprise-level access control",
    ],
    image: PROJECT_IMAGES.scholarshub,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Nodemailer"],
    liveUrl: "https://scholarshubglobal.com",
    githubUrl: "https://github.com/bsrBe/scholarsHub",
  },
  {
    id: 5,
    title: "Reboot Adventures",
    type: "Multi-platform + Telegram Automation",
    description: "Telegram-integrated event registration system with deep platform integration.",
    features: [
      "Register via web app inside Telegram",
      "One-click event signup through bot",
      "Broadcast engine for Telegram users",
      "Telebirr payment verification via scraping",
    ],
    image: PROJECT_IMAGES.reboot,
    objectFit: "contain" as const,
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "Telegraf", "Webhooks"],
    liveUrl: "https://t.me/Reboot_Adventures_bot",
    liveLabel: "Telegram Bot",
    githubUrl: "https://the-reboot-adventures-admin-portal.vercel.app",
    githubLabel: "Admin Portal",
    sampleEmail: "bsr7349@gmail.com",
    samplePassword: "BgFPa5cnS3x25si",
  },
  {
    id: 6,
    title: "Keni's Design",
    type: "Multi-platform + Telegram Automation",
    description: "Telegram-integrated Order acceptance system with deep platform integration.",
    features: [
      "Register via web app inside Telegram",
      "multi-form  order form",
      "Authentication using jwt and telegram",
      "notification sent to users based on interaction , action taken by the admin and order status",
    ],
    image: PROJECT_IMAGES.kenis,
    objectFit: "contain" as const,
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "Telegraf", "Webhooks"],
    liveUrl: "https://t.me/kofiDesign_bot",
    liveLabel: "Telegram Bot",
    githubUrl: "https://kofi-design-admin.vercel.app",
    githubLabel: "Admin Portal",
    sampleEmail: "kofiG@example.com",
    samplePassword: "securepassword123",
  },
  {
    id: 7,
    title: "BookCompass",
    type: "Enterprise-grade Backend",
    description: "Multi-tenant online book marketplace with complex backend logic.",
    features: [
      "Multi-shop management & RBAC",
      "Auto stock reduction & Delivery system",
      "Distance-based price calculation",
      "Secure E-books access control",
    ],
    image: PROJECT_IMAGES.bookcompass,
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Chapa Payments", "Geo-API"],
    liveUrl: "https://bookcompass.onrender.com/api-docs",
    githubUrl: "https://github.com/bsrBe/BookCompass",
  },
  {
    id: 8,
    title: "Proforma Invoice System",
    type: "Desktop Application",
    description: "Offline-first desktop system for generating and managing proforma invoices.",
    features: [
      "Generate, store, and print invoices",
      "Automatic cloud backup strategies",
      "Offline-first architecture with SQLite",
      "Reduced prep time by 60%",
    ],
    image: PROJECT_IMAGES.proforma,
    tags: ["Electron.js", "React", "Express", "SQLite"],
    liveUrl: "https://github.com/bsrBe/Proforma/releases/tag/Versioned",
    githubUrl: "https://github.com/bsrBe/Proforma.git",
  },
  {
    id: 9,
    title: "Comfy Journal",
    type: "Personal Mood & Diary Platform",
    description: "User-centric app for mood tracking and personal journaling with real-time sync.",
    features: [
      "Emoji-based mood interactions",
      "Emotional pattern visualization",
      "Real-time data synchronization",
    ],
    image: PROJECT_IMAGES.comfy,
    tags: ["Next.js", "Node.js", "Express", "MongoDB"],
    liveUrl: "http://bit.ly/3EHfdTY",
    githubUrl: "https://github.com/bsrBe/Vent",
  },
  {
    id: 10,
    title: "JS Auth Starter",
    type: "Reusable Auth Boilerplate",
    description: "A fully built backend starter with advanced security and RBAC.",
    features: [
      "JWT & bcrypt implementation",
      "Role-based permission system",
      "Secured routing templates",
    ],
    image: PROJECT_IMAGES.auth,
    tags: ["Node.js", "Express", "JWT", "bcrypt", "RBAC"],
    liveUrl: "https://github.com/bsrBe/Mern-Auth",
    githubUrl: "https://github.com/bsrBe/Mern-Auth",
  },
  {
    id: 11,
    title: "Lersha Auth Service",
    type: "Internal Authorization Service",
    isPrivate: true,
    description: "Centralized permission engine for multiple microservices.",
    features: [
      "Centralized permission mapping",
      "Reduced unauthorized access by 99.9%",
      "High-efficiency token validation",
    ],
    image: PROJECT_IMAGES.lersha,
    tags: ["Node.js", "Express", "RBAC", "Redis", "MongoDB"],
  },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="h-full overflow-hidden group border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            project.objectFit === "contain" && "object-contain bg-muted p-4"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant="default" className="bg-primary/90">
            {project.type}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-xs opacity-80">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>

        {project.roles && (
          <div className="mt-3 p-2.5 rounded-md bg-primary/5 border border-primary/10">
            <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2">My Roles & Contributions:</p>
            <ul className="space-y-1.5">
              {project.roles.map((role, i) => (
                <li key={i} className="text-[10px] flex items-start text-muted-foreground">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1 mr-2" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="space-y-1.5">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="text-xs flex items-center text-muted-foreground">
              <CheckCircle2 className="h-3 w-3 mr-2 text-primary shrink-0" />
              <span className="truncate">{feature}</span>
            </li>
          ))}
        </ul>

        {(project.sampleEmail || project.samplePassword) && (
          <div className="mt-4 p-2.5 rounded-md bg-primary/5 border border-primary/10 text-[10px] space-y-1">
            <p className="font-semibold text-primary uppercase tracking-wider">Sample Admin Access:</p>
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Email: <span className="text-foreground select-all">{project.sampleEmail}</span></span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Pass: <span className="text-foreground select-all">{project.samplePassword}</span></span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 pb-6">
        {project.isPrivate ? (
          <div className="w-full">
            <Badge variant="outline" className="w-full justify-center py-2 text-sm border-primary/20 bg-primary/5 text-primary">
              Enterprise Project (Code Private)
            </Badge>
          </div>
        ) : (
          <div className="flex gap-3 w-full">
            <Button asChild size="sm" variant="outline" className="flex-1">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                {project.githubLabel && project.githubLabel.includes("Portal") ? (
                  <ExternalLink className="h-4 w-4 mr-2" />
                ) : (
                  <Github className="h-4 w-4 mr-2" />
                )}
                {project.githubLabel || "Code"}
              </Link>
            </Button>
            <Button asChild size="sm" className="flex-1">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> {project.liveLabel || "View"}
              </Link>
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

export default function Projects() {
  const fintechProjects = projects.filter((p) => p.group === "fintech")
  const otherProjects = projects.filter((p) => !p.group)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work ranging from fintech super apps to enterprise-grade backends and desktop solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FinTech Dashen Bank Group with top line */}
          {fintechProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                index === 0 && "relative"
              )}
            >
              {index === 0 && (
                <div className="absolute -top-8 left-0 right-0 flex items-center gap-3">
                  <div className="flex-1 h-0.5 bg-primary"></div>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">FinTech Dashen Bank</span>
                  <div className="flex-1 h-0.5 bg-primary"></div>
                </div>
              )}
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {/* Other Projects */}
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (fintechProjects.length + index) * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="https://github.com/bsrBe" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
