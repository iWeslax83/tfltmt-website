"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    category: "Kulübe Katılım",
    items: [
      {
        question: "TMT kulübüne nasıl katılabilirim?",
        answer:
          "Katılmak için başvuru formunu doldurmanız yeterli. Formu iletişim bölümünde bulabilirsiniz.",
      },
      {
        question: "Teknik bilgi sahibi olmam gerekir mi?",
        answer:
          "Hayır, temel bilgilerinizin ve merakınızın olması yeterli. Deneyimsiz üyelere deneyimli üyeler tarafından eğitim verilmektedir.",
      },
    ],
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section id="faq" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Sık Sorulan Sorular</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              TMT hakkında merak ettiklerinizi burada bulabilirsiniz. Cevabınızı bulamazsanız bize ulaşın.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  {category.category}
                </h3>

                <div className="space-y-3 mb-8">
                  {category.items.map((item, itemIndex) => {
                    const itemId = `${catIndex}-${itemIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <Card
                        key={itemId}
                        className="overflow-hidden border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full text-left p-4 sm:p-6 hover:bg-secondary/30 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="font-semibold text-sm sm:text-base text-foreground pr-4">{item.question}</h4>
                            <ChevronDown
                              className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </button>

                        {isOpen && (
                          <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/30">
                            {item.answer}
                          </CardContent>
                        )}
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Sorununuzun cevabını bulamadın mı?</p>
                <p className="text-foreground font-semibold">
                  <a href="#contact" className="text-primary hover:underline">
                    Bize ulaşın
                  </a>{" "}
                  - Yardımcı olmaktan mutluyuz!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
