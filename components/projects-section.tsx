"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/project-data"
import { AnimatedSection } from "@/components/animated-section"
import { Floating3DCard } from "@/components/floating-3d-card"
import { DroneIllustration } from "@/components/drone-illustration"
import { RobotIllustration } from "@/components/robot-illustration"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-10 right-20 w-80 h-60 text-primary/5 pointer-events-none hidden lg:block animate-float">
        <DroneIllustration className="w-full h-full" />
      </div>
      <div className="absolute top-1/3 left-10 w-64 h-48 text-accent/5 pointer-events-none hidden lg:block animate-float-delayed">
        <RobotIllustration className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 right-1/4 w-72 h-54 text-primary/5 pointer-events-none hidden xl:block animate-float-slow">
        <DroneIllustration className="w-full h-full rotate-45" />
      </div>
      <div className="absolute bottom-10 left-1/3 w-56 h-72 text-accent/5 pointer-events-none hidden xl:block animate-float">
        <RobotIllustration className="w-full h-full -rotate-12" />
      </div>

      {/* Circuit patterns */}
      <svg
        className="absolute top-1/4 left-10 w-40 h-40 text-primary/5 pointer-events-none hidden lg:block"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="5" fill="currentColor" />
        <line x1="100" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2" />
        <circle cx="160" cy="100" r="5" fill="currentColor" />
        <line x1="100" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="40" r="5" fill="currentColor" />
        <line x1="100" y1="100" x2="40" y2="140" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="140" r="5" fill="currentColor" />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Projelerimiz</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Ulusal düzeyde mühendislik yarışmalarında rekabet ediyor, gelişmiş robotik ve havacılık sistemleri inşa
              ediyoruz.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon
            return (
              <AnimatedSection key={project.slug} delay={index * 100}>
                <Floating3DCard className="h-full">
                  <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300 group-hover:rotate-12">
                        <ProjectIcon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <CardDescription className="text-xs font-medium text-accent">
                        {project.competition}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                      {project.members.length > 0 && (
                        <div className="pt-4 border-t border-border mb-4">
                          <p className="text-xs font-semibold text-foreground mb-2">Proje Ekibi:</p>
                          <p className="text-xs text-muted-foreground">{project.members.join(", ")}</p>
                        </div>
                      )}
                      <Link href={`/projeler/${project.slug}`} className="mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                        >
                          Detayları Gör
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Floating3DCard>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
