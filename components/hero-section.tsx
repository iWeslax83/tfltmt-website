"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, UserPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedSection } from "@/components/animated-section"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />
      </ParallaxSection>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow effects */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating circuit patterns */}
        <svg className="absolute top-1/4 left-1/4 w-32 h-32 text-primary/10 animate-float" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
          <circle cx="80" cy="50" r="3" fill="currentColor" />
          <line x1="50" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="20" r="3" fill="currentColor" />
          <line x1="50" y1="50" x2="20" y2="70" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="70" r="3" fill="currentColor" />
        </svg>

        {/* Rotating gear */}
        <svg className="absolute bottom-1/3 right-1/4 w-24 h-24 text-accent/10 animate-spin-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={angle}
              x="48"
              y="20"
              width="4"
              height="10"
              fill="currentColor"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>

        {/* Binary code rain */}
        <div className="absolute top-0 left-1/3 text-primary/5 text-xs font-mono animate-scroll-down">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="mb-1">
              {Math.random().toString(2).substring(2, 12)}
            </div>
          ))}
        </div>

        {/* Propeller animation */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16">
          <svg className="w-full h-full text-primary/10 animate-spin-fast" viewBox="0 0 100 100">
            <ellipse cx="50" cy="50" rx="40" ry="8" fill="currentColor" opacity="0.6" />
            <ellipse cx="50" cy="50" rx="8" ry="40" fill="currentColor" opacity="0.6" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative h-32 w-32 animate-float">
                <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                <div className="relative h-full w-full overflow-hidden bg-transparent shadow-2xl p-2">
                  <Image src="/images/tmt-logo.png" alt="TMT Logo" fill className="object-contain" priority />
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 animate-pulse">
              <Rocket className="h-4 w-4" />
              <span>Tofaş Fen Lisesi</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="text-foreground">Teknoloji ve Mekatronik Takımı</span>
              <br />
              <span className="text-primary bg-clip-text">TMT</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Robotik, havacılık ve gelişen teknolojilerde sınırları zorlayan, takım çalışması ve yenilikçilikle öncü
              öğrenci mühendislik kulübü.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="https://docs.google.com/forms/d/1pd0rUDCUqGiR_yuounAeBwm_HhlNRGZXM_8OUbyljjU/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full sm:w-auto group">
                  <UserPlus className="mr-2 h-4 w-4" />
                  TMT'ye Katıl
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/#projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto group bg-transparent">
                  Projeleri Gör
                </Button>
              </Link>
              <Link href="/#team">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent group">
                  Ekiple Tanış
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
