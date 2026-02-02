"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ArrowRight, Sparkles, Brain, LayoutDashboard, 
  ShieldCheck, CheckCircle2, PlayCircle, Zap 
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- Utility Components ---

const DotPattern = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-background [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[background-image:radial-gradient(#1f2937_1px,transparent_1px)]"></div>
)

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

// --- Main View ---

export const HomeView = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      
      {/* HERO SECTION 
        Changes: Added min-h-[100dvh] to ensure it fits the viewport exactly.
        Added flex layout to center content vertically.
      */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-16 lg:pt-0 lg:pb-0 overflow-hidden">
        <DotPattern />
        
        {/* Responsive Ambient Gradients - used VW/percentages instead of fixed PX to prevent mobile overflow */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/10 rounded-full blur-[80px] lg:blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-blue-500/10 rounded-full blur-[80px] lg:blur-[100px] translate-y-1/2 -translate-x-1/4 opacity-50 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center h-full flex flex-col justify-center">
          
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background/50 backdrop-blur-sm text-xs sm:text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-colors cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>AI-Powered Meeting Intelligence</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] sm:leading-[1.1]">
                Turn Conversations into <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-pulse">
                  Actionable Intelligence
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                MeetAI deploys autonomous agents to your calls to transcribe, summarize, and extract insights in real-time. Stop taking notes; start listening.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button size="lg" className="rounded-full w-full sm:w-auto px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105" asChild>
                <Link href="/agents">
                  Start for Free <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto px-8 h-12 text-base bg-background/50 backdrop-blur hover:bg-muted transition-all" asChild>
                 <Link href="/demo">
                   <PlayCircle className="mr-2 w-4 h-4" /> View Demo
                 </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Abstract Dashboard Preview - Adjusted margins and visibility for mobile */}
          <FadeIn delay={0.5} className="mt-12 lg:mt-20 relative max-w-5xl mx-auto w-full">
            <div className="rounded-xl border bg-background/50 backdrop-blur-sm shadow-2xl p-2 lg:p-4">
               <div className="rounded-lg border bg-card overflow-hidden aspect-[16/9] relative shadow-inner flex items-center justify-center bg-muted/20">
                   
                   <div className="text-center space-y-4 px-4">
                      <div className="flex justify-center -space-x-3 sm:-space-x-4">
                          {[1,2,3,4].map((i) => (
                            <div key={i} className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-background flex items-center justify-center font-bold text-xs sm:text-sm text-white shadow-sm ${
                              ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-yellow-500'][i-1]
                            }`}>
                              {['JD', 'AS', 'MK', 'AI'][i-1]}
                            </div>
                          ))}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium animate-pulse">
                          Analyzing conversation stream...
                      </p>
                   </div>
                   
                   {/* Floating Elements - Hidden on mobile to reduce clutter */}
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-6 right-6 lg:top-10 lg:right-10 w-40 lg:w-48 p-3 lg:p-4 bg-background/90 backdrop-blur border rounded-lg shadow-xl text-left text-xs space-y-2 hidden sm:block"
                   >
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <Zap className="w-3 h-3 fill-current" /> Insight Detected
                      </div>
                      <p className="text-muted-foreground line-clamp-2">"Action Item: Update the Q3 Roadmap by Friday."</p>
                   </motion.div>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section - Adjusted Grid */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <StatItem value="10k+" label="Meetings Analyzed" />
            <StatItem value="500+" label="Active Agents" />
            <StatItem value="99.9%" label="Uptime SLA" />
            <StatItem value="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for Modern Teams</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to streamline your meeting workflows and capture every important detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard 
              icon={<Brain className="w-6 h-6 text-primary" />}
              title="Intelligent Agents"
              description="Agents that listen, learn, and adapt. Deploy them to any meeting platform instantly."
              delay={0}
            />
            <FeatureCard 
               icon={<LayoutDashboard className="w-6 h-6 text-indigo-500" />}
              title="Centralized Hub"
              description="Manage all your transcripts, recordings, and summaries from a unified dashboard."
              delay={0.1}
            />
             <FeatureCard 
               icon={<ShieldCheck className="w-6 h-6 text-emerald-500" />}
              title="Enterprise Security"
              description="Your data is encrypted at rest and in transit. SOC2 compliant controls."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Interactive / Demo Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/50">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border bg-card text-card-foreground shadow-2xl overflow-hidden relative group">
               {/* Decorative gradients */}
               <div className="absolute top-0 right-0 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
               
               <div className="grid lg:grid-cols-2 gap-0">
                     <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 lg:space-y-8 z-10 order-2 lg:order-1">
                        <Badge variant="secondary" className="w-fit px-4 py-1 text-sm">Smart Analysis</Badge>
                        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                           Instant Summaries, <br/>
                           <span className="text-muted-foreground">Zero Effort.</span>
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                           Stop taking manual notes. MeetAI automatically generates concise meeting minutes, action items, and topic breakdowns the moment your call ends.
                        </p>
                        <ul className="space-y-3 pt-2">
                           <CheckItem text="Speaker identification" />
                           <CheckItem text="Sentiment analysis & engagement" />
                           <CheckItem text="Export to Notion, Slack, and CRM" />
                        </ul>
                        <div className="pt-4">
                          <Button variant="default" className="rounded-full px-8 h-12 w-full sm:w-auto" asChild>
                              <Link href="/meetings">Try on your next call</Link>
                          </Button>
                        </div>
                     </div>
                     
                     <div className="relative bg-muted/50 border-l p-6 md:p-12 min-h-[350px] md:min-h-[450px] flex items-center justify-center order-1 lg:order-2">
                         {/* Abstract UI Representation */}
                         <div className="w-full max-w-md bg-background rounded-2xl shadow-xl border overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                             {/* Mock Header */}
                             <div className="h-10 border-b bg-muted/30 flex items-center px-4 gap-2">
                                 <div className="flex gap-1.5">
                                   <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                                   <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                                 </div>
                                 <div className="ml-auto w-16 h-2 bg-muted rounded-full"></div>
                             </div>
                             
                             {/* Mock Body */}
                             <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                 {/* Chat Bubble 1 */}
                                 <div className="flex gap-3 sm:gap-4 items-start opacity-50">
                                     <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] sm:text-xs text-blue-600 font-bold shrink-0">AS</div>
                                     <div className="flex-1 space-y-2">
                                         <div className="w-20 h-2 bg-muted rounded"></div>
                                         <div className="w-full h-2 bg-muted/50 rounded"></div>
                                         <div className="w-3/4 h-2 bg-muted/50 rounded"></div>
                                     </div>
                                 </div>
                                 
                                 {/* Chat Bubble 2 (Active) */}
                                 <div className="flex gap-3 sm:gap-4 items-start">
                                     <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-100 flex items-center justify-center text-[10px] sm:text-xs text-purple-600 font-bold ring-2 ring-purple-100 ring-offset-2 shrink-0">AI</div>
                                     <div className="flex-1 space-y-2">
                                         <div className="flex justify-between items-center">
                                            <div className="w-16 h-2 bg-muted rounded"></div>
                                            <Badge variant="outline" className="text-[10px] py-0 h-4 border-purple-200 text-purple-600 bg-purple-50">Summary</Badge>
                                         </div>
                                         <div className="w-full bg-primary/5 rounded-xl border border-primary/10 p-3 sm:p-4 text-xs sm:text-sm text-foreground/80 leading-relaxed shadow-sm">
                                              <p className="font-semibold text-primary mb-1 text-[10px] sm:text-xs uppercase tracking-wide">Key Takeaway</p>
                                              Team to prioritize <span className="font-bold text-primary">Q3 Roadmap</span>. Deadline: Friday.
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
         </div>
      </section>
      
      {/* CTA Section - Mobile Optimized Padding and Radii */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-primary text-primary-foreground rounded-3xl md:rounded-[2.5rem] p-8 md:p-24 relative overflow-hidden text-center shadow-2xl">
               {/* Abstract Shapes */}
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 md:w-72 md:h-72 bg-black/10 rounded-full blur-3xl"></div>
               
               <div className="relative z-10 max-w-3xl mx-auto">
                   <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Ready to transform your workflow?</h2>
                   <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto">
                       Join thousands of professionals who save hours every week with MeetAI.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                       <Button variant="secondary" size="lg" className="rounded-full w-full sm:w-auto px-10 h-14 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300" asChild>
                           <Link href="/sign-up">Get Started Free</Link>
                       </Button>
                   </div>
                   <p className="mt-8 text-sm opacity-60">No credit card required · Cancel anytime</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

// --- Sub Components ---

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center space-y-2">
      <div className="text-3xl lg:text-5xl font-bold text-primary tracking-tight">{value}</div>
      <div className="text-xs lg:text-sm font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  )
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <FadeIn delay={delay} className="h-full">
      <Card className="h-full border-muted/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
        <CardHeader>
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
            {icon}
          </div>
          <CardTitle className="text-lg lg:text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </FadeIn>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
      <span className="text-sm sm:text-base text-muted-foreground font-medium">{text}</span>
    </div>
  )
}