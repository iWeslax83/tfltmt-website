"use client"

import Image from "next/image"
import { Users2, ExternalLink } from "lucide-react"
import type { Sponsor } from "@/lib/sponsors-data"

interface SponsorCardProps {
  sponsor: Sponsor
  borderColor: string
  iconColor: string
  size: "large" | "medium" | "small"
}

export default function SponsorCard({ sponsor, borderColor, iconColor, size }: SponsorCardProps) {
  const sizeClasses = {
    large: "p-8",
    medium: "p-6",
    small: "p-4",
  }

  const logoSizes = {
    large: { width: 80, height: 80 },
    medium: { width: 60, height: 60 },
    small: { width: 40, height: 40 },
  }

  const iconSizes = {
    large: "w-6 h-6",
    medium: "w-5 h-5",
    small: "w-4 h-4",
  }

  const titleSizes = {
    large: "text-xl",
    medium: "text-base",
    small: "text-sm",
  }

  const descSizes = {
    large: "text-base",
    medium: "text-sm",
    small: "text-xs",
  }

  const CardContent = (
    <div
      className={`bg-slate-900 rounded-lg ${sizeClasses[size]} border ${borderColor} transition-all duration-300 hover:scale-[1.02] group`}
    >
      <div className="flex items-center gap-3 mb-2">
        {sponsor.logo ? (
          <div className="relative overflow-hidden rounded-lg bg-white/10 p-2">
            <Image
              src={sponsor.logo || "/placeholder.svg"}
              alt={`${sponsor.name} logosu`}
              width={logoSizes[size].width}
              height={logoSizes[size].height}
              className="object-contain"
              unoptimized
            />
          </div>
        ) : (
          <Users2 className={`${iconSizes[size]} ${iconColor}`} />
        )}
        <div className="flex-1">
          <h4 className={`${titleSizes[size]} font-bold text-white flex items-center gap-2`}>
            {sponsor.name}
            {sponsor.website && (
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </h4>
        </div>
      </div>
      <p className={`${descSizes[size]} text-slate-400`}>{sponsor.description}</p>
    </div>
  )

  if (sponsor.website) {
    return (
      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    )
  }

  return CardContent
}
