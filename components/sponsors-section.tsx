"use client"

import { HeartHandshake } from "lucide-react"
import {
  getElmasSponsors,
  getAltinSponsors,
  getGumusSponsors,
  hasSponsors as checkHasSponsors,
} from "@/lib/sponsors-data"
import SponsorCard from "@/components/sponsor-card"

export function SponsorsSection() {
  const elmasSponsors = getElmasSponsors()
  const altinSponsors = getAltinSponsors()
  const gumusSponsors = getGumusSponsors()
  const sponsorsExist = checkHasSponsors()

  return (
    <section id="sponsorlar" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Destekleyen Kurumlar</h2>
          <p className="text-lg text-slate-300">TMT'yi destekleyen kurumlar ve kuruluslar</p>
        </div>

        {/* Sponsor yoksa goster */}
        {!sponsorsExist && (
          <div className="mb-12 text-center">
            <div className="bg-slate-900/50 rounded-xl p-12 border border-slate-800">
              <HeartHandshake className="w-16 h-16 text-slate-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-400 mb-3">Şu anda aktif bir sponsorumuz bulunmamaktadır</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                TMT'nin ilk sponsoru olmak ve projelerimize destek vermek ister misiniz? Bizimle iletişime geçin.
              </p>
            </div>
          </div>
        )}

        {/* Elmas Sponsorlar */}
        {elmasSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Elmas Sponsorlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {elmasSponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  sponsor={sponsor}
                  borderColor="border-cyan-500/30 hover:border-cyan-400"
                  iconColor="text-cyan-400"
                  size="large"
                />
              ))}
            </div>
          </div>
        )}

        {/* Altin Sponsorlar */}
        {altinSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-yellow-500 mb-8 text-center">Altin Sponsorlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {altinSponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  sponsor={sponsor}
                  borderColor="border-yellow-500/30 hover:border-yellow-400"
                  iconColor="text-yellow-500"
                  size="medium"
                />
              ))}
            </div>
          </div>
        )}

        {/* Gumus Sponsorlar */}
        {gumusSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 text-center">Gumus Sponsorlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {gumusSponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  sponsor={sponsor}
                  borderColor="border-gray-500/30 hover:border-gray-400"
                  iconColor="text-gray-400"
                  size="small"
                />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-slate-900 rounded-lg p-8 border border-cyan-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">TMT'yi Sponsorlamak İster Misiniz?</h3>
          <p className="text-slate-300 mb-6">Bize ulaşarak sponsorluk fırsatlarını keşfedebilirsiniz</p>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  )
}
