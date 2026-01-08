export interface CompetitionDate {
  name: string
  date: Date
  description: string
}

export const competitionDates: CompetitionDate[] = [
  {
    name: "FPV Döner Kanat İHA Yarışması",
    date: new Date("2026-06-01"),
    description: "FPV Döner Kanat kategorisi için MEB İnsansız Hava Aracı yarışması",
  },
  {
    name: "TEKNOFEST Liseler Arası İHA",
    date: new Date("2026-09-30"),
    description: "Döner Kanat kategorisi için ulusal yarışma",
  },
  {
    name: "VEX Robotics Pushback",
    date: new Date("2026-03-15"),
    description: "VEX V5 2025-2026 sezon Pushback yarışması (kesin tarih TBD)",
  },
]
