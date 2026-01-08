"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
  label?: string
}

export function CountdownTimer({ targetDate, label = "Kalan Süre" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="grid grid-cols-4 gap-2">
          {[0, 0, 0, 0].map((_, i) => (
            <div key={i} className="bg-muted rounded-lg p-3 text-center animate-pulse">
              <div className="h-6 bg-muted-foreground/20 rounded w-full" />
              <div className="h-3 bg-muted-foreground/20 rounded mt-2 w-full" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground font-medium">{label}:</p>
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
          <div className="text-2xl font-bold text-primary">{String(timeLeft.days).padStart(2, "0")}</div>
          <div className="text-xs text-muted-foreground mt-1 font-medium">Gun</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
          <div className="text-2xl font-bold text-primary">{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="text-xs text-muted-foreground mt-1 font-medium">Saat</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
          <div className="text-2xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="text-xs text-muted-foreground mt-1 font-medium">Dakika</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20">
          <div className="text-2xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div className="text-xs text-muted-foreground mt-1 font-medium">Saniye</div>
        </div>
      </div>
    </div>
  )
}
