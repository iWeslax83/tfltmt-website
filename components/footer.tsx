import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-foreground mb-1">TMT - Teknoloji ve Mekatronik Takımı</p>
            <p className="text-xs text-muted-foreground">Tofaş Fen Lisesi Mühendislik Kulübü</p>
          </div>

          <div className="flex gap-6">
            <Link href="/#home" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/#projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Projeler
            </Link>
            <Link href="/#team" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Ekip
            </Link>
            <Link href="/#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Hakkımızda
            </Link>
            <Link href="/#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              İletişim
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TMT. Özveri ve yenilikçilikle inşa edildi.
          </p>
        </div>
      </div>
    </footer>
  )
}
