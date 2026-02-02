import { Cpu } from "lucide-react"
import { DroneIcon, HelicopterIcon } from "@/components/custom-icons"
import type { ComponentType, SVGProps } from "react"

export interface ProjectMember {
  name: string
  role?: string
}

type IconType = ComponentType<SVGProps<SVGSVGElement>>

export interface Project {
  slug: string
  name: string
  competition: string
  icon: IconType
  description: string
  longDescription: string
  members: string[]
  technicalSpecs: {
    label: string
    value: string
  }[]
  features: string[]
  competitionDate?: Date
  images?: {
    url: string
    caption: string
  }[]
}

export const projects: Project[] = [
  {
    slug: "doner-kanat-iha",
    name: "Otonom Döner Kanat İHA",
    competition: "TEKNOFEST Liseler Arası İnsansız Hava Araçları Yarışması",
    icon: Helicopter,
    description:
      "Otonom uçuş özellikleri, özel uçuş kontrolcüsü ve hassas navigasyon sistemleri ile donatılmış gelişmiş quadcopter.",
    longDescription:
      "TEKNOFEST Liseler Arası İHA Yarışması için geliştirdiğimiz quadcopter, otonom görev yetenekleri ve hassas navigasyon sistemleri ile donatılmıştır. Proje, özel uçuş kontrolcüsü yazılımı, gerçek zamanlı veri işleme ve görev planlama algoritmaları içermektedir. İHA, belirlenen görev senaryolarını başarıyla yerine getirebilecek şekilde tasarlanmış olup, yük taşıma, hedef tespit ve otonom iniş gibi kritik yeteneklere sahiptir. Daha fazla bilgi için https://www.teknofest.org/tr/yarismalar/liseler-arasi-insansiz-hava-araclari-yarismasi/",
    members: ["Emir Sakarya", "Demir Özcan", "Erdem Gümüş", "İbrahim Özdemir", "Arda Akalın"],
    competitionDate: new Date("2026-09-30"),
    technicalSpecs: [
      { label: "Uçuş Süresi", value: "20-25 dakika" },
      { label: "Maksimum Hız", value: "15 m/s" },
      { label: "Yük Kapasitesi", value: "515g" },
      { label: "Uçuş Kontrolcüsü", value: "Özel Yazılım" },
      { label: "GPS Hassasiyeti", value: "±2m" },
    ],
    features: [
      "Otonom görev yürütme",
      "Gerçek zamanlı telemetri",
      "Hassas hedef tespit",
      "Güvenli acil iniş sistemi",
      "Görüntü işleme entegrasyonu",
      "Özel görev planlama yazılımı",
    ],
  },
  {
    slug: "fpv-doner-kanat-iha",
    name: "FPV Döner Kanat İHA",
    competition: "MEB Robot FPV İnsansız Hava Aracı Yarışması - İHA Döner Kanat Kategorisi",
    icon: Plane,
    description:
      "Gerçek zamanlı FPV görüntü aktarımı, yüksek manevra kabiliyeti ve yarış senaryolarına özel tasarlanmış FPV drone.",
    longDescription:
      "MEB İnsansız Hava Aracı Yarışması FPV Döner Kanat kategorisi için geliştirdiğimiz FPV drone, yüksek hız, hassas kontrol ve gerçek zamanlı görüntü aktarımı özelliklerine sahiptir. Yarışma kurallarına göre tasarlanan drone'umuz, belirlenen parkurları başarıyla tamamlayabilecek çevikliğe ve dayanıklılığa sahiptir. Proje kapsamında FPV sistemleri, uçuş kontrolcüsü ayarları, batarya yönetimi ve pilot eğitimi çalışmaları yapılmaktadır. Daha fazla bilgi için: https://robot.meb.gov.tr/insansiz-hava-araci/iha-yarisma-kurallari",
    members: ["Emir Sakarya", "Demir Özcan", "Erdem Gümüş", "İbrahim Özdemir", "Arda Akalın"],
    competitionDate: new Date("2026-01-06"),
    technicalSpecs: [
      { label: "Maksimum Hız", value: "170 km/s" },
      { label: "Uçuş Süresi", value: "5-10 dk" },
      { label: "Kamera Çözünürlüğü", value: "1200TVL" },
    ],
    features: [
      "Gerçek zamanlı FPV görüntü aktarımı",
      "Yüksek manevra kabiliyeti",
      "Yarış parkurlarına özel tasarım",
      "Dayanıklı çerçeve yapısı",
      "Hızlı tepki verme yeteneği",
      "Pilot kontrol sistemleri",
    ],
  },
  {
    slug: "vex-robotics",
    name: "VEX Robotics V5 Pushback",
    competition: "VEX Robotics Yarışması",
    icon: Cpu,
    description:
      "Özel mekanik tasarım, gelişmiş sensör entegrasyonu ve VEX V5 zorlukları için stratejik otonom programlama içeren yarışma seviyesi robot.",
    longDescription:
      "VEX Robotics V5 Pushback yarışması için geliştirdiğimiz robot, stratejik oyun analizi ve mekanik tasarım mükemmelliğini bir araya getiriyor. Robot, rakip robotları etkili şekilde iter ve oyun elemanlarını manipüle edebilecek güçlü bir yapıya sahiptir. Gelişmiş sensör entegrasyonu, PID kontrol sistemleri ve otonom mod programlaması ile tam donanımlı bir yarışma robotudur. Ekip, mekanik tasarım, yazılım geliştirme ve strateji analizi konularında kapsamlı çalışmalar yürütmüştür.",
    members: ["Demir Özcan", "Erdem Gümüş", "Emir Sakarya", "Uras Demir Demirci", "Arda Akalın"],
    competitionDate: new Date("2026-03-15"),
    technicalSpecs: [
      { label: "Boyut", value: "18'' x 18'' x 18''" },
      { label: "Güç", value: "VEX V5 Battery (12.8V)" },
      { label: "Motor Sayısı", value: "8 adet V5 Smart Motor" },
      { label: "Sensörler", value: "Vision, GPS, Inertial" },
      { label: "Kontrol", value: "V5 Brain + Controller" },
    ],
    features: [
      "Güçlü itme mekanizması",
      "Hassas otonom modlar",
      "Gelişmiş sensör kullanımı",
      "PID kontrol sistemleri",
      "Stratejik oyun programlaması",
      "Hızlı manevra kabiliyeti",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
