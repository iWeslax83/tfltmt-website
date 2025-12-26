"use client"

import { useEffect, useState } from "react"

interface StatProps {
  end: number
  label: string
  suffix?: string
}

function AnimatedStat({ end, label, suffix = "" }: StatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="text-center group">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 transition-transform group-hover:scale-110 duration-300">
        {count}
        {suffix}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground font-medium">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <AnimatedStat end={25} label="Takım Üyesi" suffix="+" />
          <AnimatedStat end={3} label="Aktif Proje" />
          <AnimatedStat end={5} label="Yarışma Katılımı" suffix="+" />
          <AnimatedStat end={2} label="Yıllık Deneyim" />
        </div>
      </div>
    </section>
  )
}
