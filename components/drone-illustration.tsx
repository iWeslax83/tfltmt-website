"use client"

export function DroneIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Drone body */}
      <g className="animate-float">
        {/* Center body */}
        <rect x="170" y="130" width="60" height="40" rx="8" fill="currentColor" opacity="0.8" />

        {/* Camera gimbal */}
        <circle cx="200" cy="160" r="15" fill="currentColor" opacity="0.6" />
        <circle cx="200" cy="160" r="10" fill="currentColor" opacity="0.9" />

        {/* Arms */}
        <line x1="180" y1="140" x2="80" y2="80" stroke="currentColor" strokeWidth="6" opacity="0.7" />
        <line x1="220" y1="140" x2="320" y2="80" stroke="currentColor" strokeWidth="6" opacity="0.7" />
        <line x1="180" y1="160" x2="80" y2="220" stroke="currentColor" strokeWidth="6" opacity="0.7" />
        <line x1="220" y1="160" x2="320" y2="220" stroke="currentColor" strokeWidth="6" opacity="0.7" />

        {/* Propellers */}
        <g className="animate-spin-slow origin-[80px_80px]">
          <ellipse cx="80" cy="80" rx="30" ry="8" fill="currentColor" opacity="0.3" />
          <ellipse cx="80" cy="80" rx="8" ry="30" fill="currentColor" opacity="0.3" />
        </g>

        <g className="animate-spin-slow origin-[320px_80px]">
          <ellipse cx="320" cy="80" rx="30" ry="8" fill="currentColor" opacity="0.3" />
          <ellipse cx="320" cy="80" rx="8" ry="30" fill="currentColor" opacity="0.3" />
        </g>

        <g className="animate-spin-slow origin-[80px_220px]">
          <ellipse cx="80" cy="220" rx="30" ry="8" fill="currentColor" opacity="0.3" />
          <ellipse cx="80" cy="220" rx="8" ry="30" fill="currentColor" opacity="0.3" />
        </g>

        <g className="animate-spin-slow origin-[320px_220px]">
          <ellipse cx="320" cy="220" rx="30" ry="8" fill="currentColor" opacity="0.3" />
          <ellipse cx="320" cy="220" rx="8" ry="30" fill="currentColor" opacity="0.3" />
        </g>

        {/* Motors */}
        <circle cx="80" cy="80" r="12" fill="currentColor" opacity="0.9" />
        <circle cx="320" cy="80" r="12" fill="currentColor" opacity="0.9" />
        <circle cx="80" cy="220" r="12" fill="currentColor" opacity="0.9" />
        <circle cx="320" cy="220" r="12" fill="currentColor" opacity="0.9" />
      </g>
    </svg>
  )
}
