"use client"

export function RobotIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g className="animate-float">
        {/* Head */}
        <rect x="100" y="50" width="100" height="80" rx="10" fill="currentColor" opacity="0.8" />

        {/* Antenna */}
        <line x1="150" y1="50" x2="150" y2="20" stroke="currentColor" strokeWidth="4" opacity="0.7" />
        <circle cx="150" cy="15" r="8" fill="currentColor" opacity="0.9" className="animate-pulse" />

        {/* Eyes */}
        <circle cx="125" cy="80" r="12" fill="currentColor" opacity="0.9" className="animate-pulse" />
        <circle cx="175" cy="80" r="12" fill="currentColor" opacity="0.9" className="animate-pulse" />

        {/* Body */}
        <rect x="80" y="140" width="140" height="120" rx="15" fill="currentColor" opacity="0.8" />

        {/* Control panel */}
        <rect x="110" y="170" width="80" height="60" rx="8" fill="currentColor" opacity="0.4" />
        <circle cx="130" cy="190" r="6" fill="currentColor" opacity="0.6" />
        <circle cx="170" cy="190" r="6" fill="currentColor" opacity="0.6" />
        <rect x="120" y="210" width="60" height="4" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="120" y="220" width="40" height="4" rx="2" fill="currentColor" opacity="0.5" />

        {/* Arms */}
        <rect x="30" y="160" width="40" height="80" rx="8" fill="currentColor" opacity="0.7" />
        <rect x="230" y="160" width="40" height="80" rx="8" fill="currentColor" opacity="0.7" />

        {/* Hands */}
        <rect x="25" y="240" width="50" height="30" rx="6" fill="currentColor" opacity="0.8" />
        <rect x="225" y="240" width="50" height="30" rx="6" fill="currentColor" opacity="0.8" />

        {/* Wheels/Base */}
        <rect x="90" y="270" width="120" height="40" rx="20" fill="currentColor" opacity="0.8" />
        <circle cx="110" cy="310" r="25" fill="currentColor" opacity="0.9" />
        <circle cx="190" cy="310" r="25" fill="currentColor" opacity="0.9" />

        {/* Wheel details */}
        <circle cx="110" cy="310" r="15" fill="currentColor" opacity="0.5" className="animate-spin-slow" />
        <circle cx="190" cy="310" r="15" fill="currentColor" opacity="0.5" className="animate-spin-slow" />
      </g>
    </svg>
  )
}
