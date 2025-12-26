"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, ExternalLink, UserPlus } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const contactInfo = {
  email: "tofasfentmt@gmail.com",
  instagram: "https://instagram.com/tmt",
  phone: "+90 XXX XXX XX XX",
}

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true)

    // Form normal şekilde submit edilecek, bu yüzden state'i güncelliyoruz
    setTimeout(() => {
      setSubmitted(true)
      setSubmitting(false)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">İletişime Geçin</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Projelerimizle ilgileniyor veya işbirliği yapmak mı istiyorsunuz? Bize ulaşın.
            </p>
          </div>

          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2 justify-center sm:justify-start">
                    <UserPlus className="h-5 w-5 text-primary" />
                    TMT Kulübüne Katılmak İster misiniz?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Başvuru formunu doldurarak ekibimize katılabilirsiniz.
                  </p>
                </div>
                <Link
                  href="https://docs.google.com/forms/d/1pd0rUDCUqGiR_yuounAeBwm_HhlNRGZXM_8OUbyljjU/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="whitespace-nowrap">
                    Başvuru Formu
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>İletişim Formu</CardTitle>
              <CardDescription>Bize bir mesaj gönderin, en kısa sürede size geri dönelim.</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action="https://formspree.io/f/xgvajezq"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">İsim</Label>
                  <Input id="name" name="name" placeholder="Adınız" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input id="email" name="email" type="email" placeholder="ornek@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Talebiniz hakkında bize bilgi verin..."
                    rows={5}
                    required
                  />
                </div>

                {submitted && (
                  <div className="bg-primary/10 text-primary px-4 py-3 rounded-lg text-sm text-center">
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={submitting}>
                  <Mail className="mr-2 h-4 w-4" />
                  {submitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <p className="text-sm font-semibold text-foreground mb-4">İletişim Bilgileri</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-foreground">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Instagram className="h-4 w-4 text-primary" />
                    <a
                      href={contactInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                    >
                      Instagram
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4 text-center">Sosyal medyada bizi takip edin</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
