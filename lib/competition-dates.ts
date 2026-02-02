export interface CompetitionDate {
  name: string
  date: Date
  description: string
}

export const competitionDates: CompetitionDate[] = [
  {
    name: "FPV Döner Kanat İHA Yarışması",
    date: new Date("2026-05-06"),
    description: "FPV Döner Kanat kategorisi için MEB İnsansız Hava Aracı yarışması",
  },
  {
    name: "TEKNOFEST Liseler Arası İHA",
    date: new Date("2026-06-08"),
    description: "Döner Kanat kategorisi için ulusal yarışma",
  },
  {
    name: "VEX Robotics Pushback",s
    date: new Date("2026-02-28"),
    description: "VEX V5 2025-2026 sezon Pushback yarışması (kesin tarih TBD)",
  },
]
