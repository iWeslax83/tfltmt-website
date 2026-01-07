"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Award, UserPlus } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Floating3DCard } from "@/components/floating-3d-card"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Misyon Odaklı",
    description: "Rekabetçi robotik ve havacılık projeleri aracılığıyla öğrenci mühendislik eğitimini geliştirmek.",
  },
  {
    icon: Lightbulb,
    title: "Yenilikçilik Odaklı",
    description: "Son teknolojileri keşfetmek ve lise mühendisliğinin sınırlarını zorlamak.",
  },
  {
    icon: Award,
    title: "Yarışma Mükemmelliği",
    description: "Tofaş Fen Lisesi'ni ulusal yarışmalarda özveri ve teknik beceriyle temsil etmek.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">TMT Hakkında</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
              Tofaş Fen Lisesi'nde kurulan TMT, robotik, havacılık ve gelişen teknolojilere odaklanan öğrenci
              liderliğinde, proje tabanlı bir mühendislik kulübüdür. TEKNOFEST ve VEX Robotics dahil ulusal yarışmalarda
              rekabet ediyor, mekanik tasarım, elektronik, yazılım geliştirme ve sistem entegrasyonunda uygulamalı
              deneyim sağlıyoruz.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-primary" />
                Kulübümüze Katılın
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Robotik, havacılık ve teknolojiye ilgi duyuyor musunuz? TMT'ye katılmak için formumuzu
                doldurabilirsiniz.
              </p>
              <Link
                href="https://docs.google.com/forms/d/1pd0rUDCUqGiR_yuounAeBwm_HhlNRGZXM_8OUbyljjU/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Başvuru Formu
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 150}>
              <Floating3DCard className="h-full">
                <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all hover:bg-primary/20 hover:scale-110 hover:rotate-6 duration-300">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </Floating3DCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
