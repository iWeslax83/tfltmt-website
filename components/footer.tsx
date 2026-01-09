import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-foreground mb-1">TMT - Türbinli Motor Teknolojileri</p>
            <p className="text-xs text-muted-foreground">Tofaş Fen Lisesi Robotik & Havacılık Kulübü</p>
          </div>

          <div className="flex gap-6">
            <Link href="/#home" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Hakkımızda
            </Link>
            <Link href="/#projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Projeler
            </Link>
            <Link href="/#team" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Ekip
            </Link>
            <Link href="/#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              İletişim
            </Link>
            <a
              href="https://github.com/iWeslax83/tfltmt-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Github className="h-3 w-3" />
              Kaynak Kod
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} TMT. Özveriyle inşa edildi.</p>
        </div>
      </div>
    </footer>
  )
}
