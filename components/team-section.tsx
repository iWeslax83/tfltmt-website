"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Cpu, Cable as Cube, Megaphone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Floating3DCard } from "@/components/floating-3d-card"

const departments = [
  {
    name: "Elektronik & Yazılım",
    icon: Cpu,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    members: [
      { name: "Emir Sakarya", role: "Kaptan", initials: "ES" },
      { name: "İbrahim Özdemir", role: "Elektronik", initials: "İÖ" },
      { name: "Arda Akalın", role: "Yazılım", initials: "AA" },
      { name: "Ahmet Ege Aksoy", role: "Elektronik", initials: "AEA" },
      { name: "Ezgi Baydoğan", role: "Yazılım", initials: "EB" },
      { name: "Lodos Genç", role: "Elektronik", initials: "LG" },
      { name: "Yiğit Kaya", role: "Elektronik", initials: "YK" },
      { name: "Polat Ateşoğlu", role:"Elektronik", initials: "PA"},
    ],
  },
  {
    name: "3D Tasarım & Mekanik",
    icon: Cube,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    members: [
      { name: "Demir Özcan", role: "Kaptan", initials: "DÖ" },
      { name: "Erdem Gümüş", role: "Mekanik", initials: "EG" },
      { name: "Yusuf Talha Kaya", role: "3D Tasarım", initials: "YTK" },
      { name: "Sualp Çelik", role: "Mekanik", initials: "SÇ" },
      { name: "Ekrem Yiğit Pala", role: "3D Tasarım", initials: "EYP"},
    ],
  },
  {
    name: "Reklamcılık & Sponsorluk",
    icon: Megaphone,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    members: [
      { name: "Hasan Onur Kar", role: "Reklamcılık", initials : "HOK"},

    ],
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Ekibimiz</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Yenilikçi mühendislik çözümleri oluşturmak için disiplinler arası işbirliği yapan yetenekli lise
              öğrencileri.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {departments.map((dept, deptIndex) => (
            <AnimatedSection key={dept.name} delay={deptIndex * 100}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-12 w-12 rounded-lg ${dept.bgColor} flex items-center justify-center transition-transform hover:scale-110 duration-300`}
                  >
                    <dept.icon className={`h-6 w-6 ${dept.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{dept.name}</h3>
                </div>

                {dept.members.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {dept.members.map((member, index) => (
                      <Floating3DCard key={member.name}>
                        <Card className="text-center group hover:border-primary/50 transition-all duration-300 h-full">
                          <CardHeader className="space-y-4">
                            <div className="flex justify-center">
                              <Avatar className="h-16 w-16 border-2 border-border group-hover:border-primary transition-all group-hover:scale-110 duration-300">
                                <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold group-hover:bg-primary/20 transition-colors">
                                  {member.initials}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm mb-1">{member.name}</h4>
                              <p className="text-xs text-muted-foreground">{member.role}</p>
                            </div>
                          </CardHeader>
                        </Card>
                      </Floating3DCard>
                    ))}
                  </div>
                ) : (
                  <Card className="p-8 text-center">
                    <p className="text-sm text-muted-foreground">Ekip üyeleri yakında eklenecek</p>
                  </Card>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
