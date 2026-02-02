// =====================================================
// TMT SPONSOR YONETIMI
// =====================================================
// Yeni sponsor eklemek icin asagidaki SPONSORS dizisine
// yeni bir obje ekleyin. Her sponsor icin:
// - name: Sponsor adi
// - logo: Logo URL'i (opsiyonel, yoksa varsayilan ikon kullanilir)
// - website: Sponsor websitesi (opsiyonel)
// - category: "Elmas" | "Altin" | "Gumus"
// - description: Kisa aciklama
// =====================================================

export interface Sponsor {
  name: string
  logo?: string
  website?: string
  category: "Elmas" | "Altin" | "Gumus"
  description: string
}

// SPONSOR LISTESI - Buraya ekleyin
export const SPONSORS: Sponsor[] = [
  // ---- ELMAS SPONSORLAR ----
  // {
  //   name: "Ornek Sirket A.S.",
  //   logo: "/images/sponsors/ornek-logo.png",
  //   website: "https://orneksirket.com",
  //   category: "Elmas",
  //   description: "Ana sponsor - Elektronik malzeme destegi",
  // },

  // ---- ALTIN SPONSORLAR ----
  // {
  //   name: "Teknoloji Ltd.",
  //   logo: "/images/sponsors/teknoloji-logo.png",
  //   website: "https://teknoloji.com",
  //   category: "Altin",
  //   description: "3D baski destegi",
  // },

  // ---- GUMUS SPONSORLAR ----
  // {
  //   name: "Yerel Isletme",
  //   category: "Gumus",
  //   description: "Malzeme destegi",
  // },
]

// Yardimci fonksiyonlar
export const getElmasSponsors = () => SPONSORS.filter((s) => s.category === "Elmas")
export const getAltinSponsors = () => SPONSORS.filter((s) => s.category === "Altin")
export const getGumusSponsors = () => SPONSORS.filter((s) => s.category === "Gumus")
export const hasSponsors = () => SPONSORS.length > 0
