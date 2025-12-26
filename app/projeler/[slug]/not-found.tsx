import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Proje Bulunamadı</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Aradığınız proje mevcut değil veya kaldırılmış olabilir.
        </p>
        <Link href="/#projects">
          <Button size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Projelere Dön
          </Button>
        </Link>
      </div>
    </div>
  )
}
