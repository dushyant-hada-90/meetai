"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Brain,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/* ---------------------------------- utils --------------------------------- */

const Fade = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.4, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
)

/* ---------------------------------- page ---------------------------------- */

export const HomeView = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="flex flex-col min-h-screen">
        <Hero />
        <SocialProof />
      </div>
      <Features />
      <ProductPreview />
      <CTA />
    </main>
  )
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative border-b overflow-hidden flex-1 flex flex-col justify-center">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/10 via-background to-background" />

      <div className="container mx-auto px-4 py-20 text-center max-w-4xl">
        <Fade>
          <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-foreground border-emerald-500/30">
            <Sparkles className="w-3 h-3 mr-1 text-emerald-600" />
            AI Meeting Intelligence
          </Badge>
        </Fade>

        <Fade delay={0.05}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Meetings that{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-400 bg-clip-text text-transparent">
              work for you
            </span>
          </h1>
        </Fade>

        <Fade delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            MeetAI joins your calls, captures decisions, extracts action items,
            and turns conversations into structured knowledge.
          </p>
        </Fade>

        <Fade delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg hover:opacity-90"
              asChild
            >
              <Link href="/sign-up">
                Get started free <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/demo">View product demo</Link>
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  )
}

/* ------------------------------- social proof ------------------------------ */

function SocialProof() {
  return (
    <section className="py-10 bg-muted/30 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat value="12k+" label="Meetings analyzed" />
          <Stat value="94%" label="Action items captured" />
          <Stat value="<2s" label="Post-call summary" />
          <Stat value="SOC-2" label="Security ready" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs mt-1 text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
}

/* -------------------------------- features -------------------------------- */

function Features() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <Fade>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Designed for real teams
          </h2>
        </Fade>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Feature
            icon={<Brain />}
            title="Autonomous agents"
            text="Agents that attend meetings, understand context, and continuously improve summaries."
            gradient="from-emerald-500 to-green-500"
            delay={0}
          />
          <Feature
            icon={<LayoutDashboard />}
            title="Unified workspace"
            text="All transcripts, decisions, and action items searchable in one place."
            gradient="from-green-500 to-teal-400"
            delay={0.05}
          />
          <Feature
            icon={<ShieldCheck />}
            title="Enterprise-grade security"
            text="Encrypted by default. Designed to meet SOC-2 and GDPR standards."
            gradient="from-teal-400 to-emerald-500"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  )
}

function Feature({
  icon,
  title,
  text,
  gradient,
  delay,
}: {
  icon: React.ReactNode
  title: string
  text: string
  gradient: string
  delay: number
}) {
  return (
    <Fade delay={delay}>
      <Card className="h-full relative overflow-hidden">
        <div
          className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${gradient}`}
        />
        <CardHeader>
          <div
            className={`w-11 h-11 rounded-xl bg-gradient-to-r ${gradient} text-white flex items-center justify-center mb-4`}
          >
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{text}</p>
        </CardContent>
      </Card>
    </Fade>
  )
}

/* ----------------------------- product preview ----------------------------- */

function ProductPreview() {
  return (
    <section className="py-28 bg-gradient-to-b from-muted/30 to-background border-y">
      <div className="container mx-auto px-4 max-w-5xl">
        <Fade>
          <h2 className="text-3xl font-bold text-center">
            From call → clarity in seconds
          </h2>
        </Fade>

        <Fade delay={0.1}>
          <div className="mt-12 rounded-xl border bg-background/70 backdrop-blur p-6 shadow-sm">
            <ul className="space-y-4 text-sm">
              <PreviewItem text="Automatic meeting summary generated instantly" />
              <PreviewItem text="Action items with owners and deadlines" />
              <PreviewItem text="Export to Notion, Slack, CRM" />
              <PreviewItem text="Search across every meeting you've ever had" />
            </ul>
          </div>
        </Fade>
      </div>
    </section>
  )
}

function PreviewItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
      <span>{text}</span>
    </li>
  )
}

/* ---------------------------------- cta ---------------------------------- */

function CTA() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500 text-white px-8 py-20 text-center shadow-xl">
          <Fade>
            <h2 className="text-4xl font-bold">
              Stop taking notes. Start making decisions.
            </h2>
          </Fade>

          <Fade delay={0.1}>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              MeetAI works silently in the background so you can focus on the
              conversation.
            </p>
          </Fade>

          <Fade delay={0.15}>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/sign-up">Create free account</Link>
              </Button>
              <p className="mt-4 text-xs text-white/70">
                No credit card required
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
