"use client"

import { Users2 } from "lucide-react"

interface Sponsor {
  name: string
  category: "Platinum" | "Gold" | "Silver"
  description: string
}

const sponsors: Sponsor[] = [
  {
    name: "Şuanda yok",
    category: "Elmas",
    description: "Ana sponsor",
  },
]

export function SponsorsSection() {
  const platinumSponsors = sponsors.filter((s) => s.category === "Elmas")
  const goldSponsors = sponsors.filter((s) => s.category === "Altin")
  const silverSponsors = sponsors.filter((s) => s.category === "Gumus")

  return (
    <section id="sponsorlar" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Destekleyen Kurumlar</h2>
          <p className="text-lg text-slate-300">TMT'yi destekleyen kurumlar/kuruluşlar</p>
        </div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Elmas Sponsorlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platinumSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-lg p-8 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Users2 className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-xl font-bold text-white">{sponsor.name}</h4>
                  </div>
                  <p className="text-slate-400">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-yellow-500 mb-8 text-center">Altın Sponsorlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {goldSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-lg p-6 border border-yellow-500/30 hover:border-yellow-400 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Users2 className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-bold text-white">{sponsor.name}</h4>
                  </div>
                  <p className="text-sm text-slate-400">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 text-center">Gümüş Sponsorlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {silverSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-lg p-4 border border-gray-500/30 hover:border-gray-400 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Users2 className="w-4 h-4 text-gray-400" />
                    <h4 className="font-bold text-white text-sm">{sponsor.name}</h4>
                  </div>
                  <p className="text-xs text-slate-500">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-slate-900 rounded-lg p-8 border border-cyan-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">TMT'yi Sponsorlamak Ister misiniz?</h3>
          <p className="text-slate-300 mb-6">Bize ulasarak sponsorluk firsatlarini kesfedebilirsiniz</p>
          <a
            href="#iletisim"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Bize Ulasın
          </a>
        </div>
      </div>
    </section>
  )
}
