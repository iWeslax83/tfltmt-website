import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Trophy } from "lucide-react"
import { getProjectBySlug, projects } from "@/lib/project-data"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    }
  }

  return {
    title: `${project.name} | TMT Projeleri`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const ProjectIcon = project.icon

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Projelere Dön
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mb-6">
              <ProjectIcon className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">{project.name}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">{project.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-accent" />
              <p className="text-lg text-accent font-medium">{project.competition}</p>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About the Project */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Proje Hakkında</h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">{project.longDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Özellikler</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <p className="text-sm font-medium">{feature}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Teknik Özellikler</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {project.technicalSpecs.map((spec, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-3 border-b border-border last:border-0"
                        >
                          <span className="text-muted-foreground font-medium">{spec.label}</span>
                          <Badge variant="secondary" className="font-semibold">
                            {spec.value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Team Members */}
              {project.members.length > 0 && (
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-bold">Proje Ekibi</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.members.map((member, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-sm">{member}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Hızlı Bilgi</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Yarışma:</span>
                      <p className="font-medium mt-1">{project.competition}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Takım Üye Sayısı:</span>
                      <p className="font-medium mt-1">{project.members.length || "Ekip bilgisi ekleniyor"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Diğer Projelerimizi Keşfedin</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            TMT olarak havacılık ve robotik alanında birçok farklı projede çalışıyoruz.
          </p>
          <Link href="/#projects">
            <Button size="lg">Tüm Projeleri Gör</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
