export interface CompetitionDate {
  name: string
  date: Date
  description: string
}

// Yarisma Tarihleri - Guncellemek icin buraya bakin
export const competitionDates: CompetitionDate[] = [
  {
    name: "FPV Doner Kanat IHA Yarismasi",
    date: new Date("2026-01-06"), // 6 Ocak 2026
    description: "FPV Doner Kanat kategorisi icin MEB Insansiz Hava Araci yarismasi",
  },
  {
    name: "TEKNOFEST Liseler Arasi IHA",
    date: new Date("2026-09-30"), // 30 Eylul 2026
    description: "Doner Kanat kategorisi icin ulusal yarisma",
  },
  {
    name: "VEX Robotics Pushback",
    date: new Date("2026-03-15"), // 15 Mart 2026 (tahmini)
    description: "VEX V5 2025-2026 sezon Pushback yarismasi (kesin tarih TBD)",
  },
]
