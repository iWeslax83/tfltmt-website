import { LucideComputer as Helicopter, Plane, Cpu, type LucideIcon } from "lucide-react"

export interface ProjectMember {
  name: string
  role?: string
}

export interface Project {
  slug: string
  name: string
  competition: string
  icon: LucideIcon
  description: string
  longDescription: string
  members: string[]
  technicalSpecs: {
    label: string
    value: string
  }[]
  features: string[]
  images?: {
    url: string
    caption: string
  }[]
}

export const projects: Project[] = [
  {
    slug: "doner-kanat-iha",
    name: "Döner Kanat İHA",
    competition: "TEKNOFEST Lise Döner Kanat İHA Yarışması",
    icon: Helicopter,
    description:
      "Otonom uçuş yetenekleri, özel uçuş kontrolcüsü ve hassas navigasyon sistemleri ile donatılmış gelişmiş quadcopter.",
    longDescription:
      "TEKNOFEST Lise Döner Kanat İHA Yarışması için geliştirdiğimiz quadcopter, otonom görev yetenekleri ve hassas navigasyon sistemleri ile donatılmıştır. Proje, özel uçuş kontrolcüsü yazılımı, gerçek zamanlı veri işleme ve görev planlama algoritmaları içermektedir. İHA, belirlenen görev senaryolarını başarıyla yerine getirebilecek şekilde tasarlanmış olup, yük taşıma, hedef tespit ve otonom iniş gibi kritik yeteneklere sahiptir.",
    members: ["Emir Sakarya", "Demir Özcan", "Erdem Gümüş", "Arda Akalın", "Ahmet Ege Aksoy", "İbrahim Özdemir"],
    technicalSpecs: [
      { label: "Uçuş Süresi", value: "20-25 dakika" },
      { label: "Maksimum Hız", value: "15 m/s" },
      { label: "Yük Kapasitesi", value: "500g" },
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
    slug: "sabit-kanat-iha",
    name: "Sabit Kanat İHA",
    competition: "TEKNOFEST Lise Sabit Kanat İHA Yarışması",
    icon: Plane,
    description:
      "Optimize edilmiş kanat tasarımı, otonom rota navigasyonu ve misyona özel yük teslimat sistemleri ile aerodinamik sabit kanatlı İHA.",
    longDescription:
      "TEKNOFEST Lise Sabit Kanat İHA Yarışması için tasarladığımız sabit kanatlı İHA, aerodinamik optimizasyon ve enerji verimliliği odaklı bir projedir. Uzun menzil uçuş gereksinimleri için özel olarak tasarlanan kanat profili, hafif kompozit malzeme kullanımı ve otonom navigasyon sistemleri ile donatılmıştır. Proje, rota planlama, hedef teslimat ve güvenli geri dönüş yetenekleri sunmaktadır.",
    members: [],
    technicalSpecs: [
      { label: "Kanat Açıklığı", value: "2.2m" },
      { label: "Uçuş Süresi", value: "45-60 dakika" },
      { label: "Seyir Hızı", value: "18 m/s" },
      { label: "Maksimum Menzil", value: "15 km" },
      { label: "Malzeme", value: "Karbon Fiber / EPP Köpük" },
    ],
    features: [
      "Aerodinamik kanat tasarımı",
      "Uzun menzil uçuş kapasitesi",
      "Otonom rota navigasyonu",
      "Hassas yük teslimat sistemi",
      "Enerji verimli motorlar",
      "Telemetri ve veri kaydı",
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
    members: ["Demir Özcan", "Erdem Gümüş", "Emir Sakarya", "Uras Demir Demirci", "Polat Ateşoğlu", "Arda Akalın"],
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
