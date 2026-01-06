"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

const certificates = [
    {
        id: 1,
        title: "AWS Solutions Architect - Associate",
        issuer: "Amazon Web Services (AWS)",
        date: "November 2025",
        description: "Validated expertise in designing scalable, cost-efficient, and secure cloud architectures.",
        verifyUrl: "https://www.credly.com/badges/b22eab41-58a1-41be-a119-a8655e2acc2f",
        badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    },
    {
        id: 2,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        date: "June 2025",
        description: "Foundational knowledge of AWS Cloud platform, security, and infrastructure.",
        verifyUrl: "https://www.credly.com/badges/be09e70f-130d-49cc-925b-1c2ce605fde3/public_url",
        badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    },
]

export default function Certificates() {
    return (
        <section id="certificates" className="py-20 bg-muted/30">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-2">Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications that validate my expertise in cloud architecture and backend systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="relative w-16 h-16 shrink-0">
                                        <img src={cert.badge} alt={cert.title} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="space-y-1">
                                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                                        <CardDescription>{cert.issuer} | {cert.date}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                                    <Link
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                    >
                                        Verify Certification <ExternalLink className="ml-1 h-3 w-3" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
