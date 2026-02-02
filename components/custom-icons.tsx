"use client"

import type { SVGProps } from "react"

export function DroneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Drone body */}
      <rect x="9" y="9" width="6" height="6" rx="1" />
      {/* Arms */}
      <line x1="9" y1="12" x2="4" y2="7" />
      <line x1="15" y1="12" x2="20" y2="7" />
      <line x1="9" y1="12" x2="4" y2="17" />
      <line x1="15" y1="12" x2="20" y2="17" />
      {/* Propellers */}
      <circle cx="4" cy="7" r="2" />
      <circle cx="20" cy="7" r="2" />
      <circle cx="4" cy="17" r="2" />
      <circle cx="20" cy="17" r="2" />
    </svg>
  )
}

export function HelicopterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Main rotor */}
      <line x1="2" y1="5" x2="22" y2="5" />
      <line x1="12" y1="5" x2="12" y2="9" />
      {/* Body */}
      <path d="M6 9h12l-2 8H8l-2-8z" />
      {/* Tail */}
      <line x1="18" y1="13" x2="22" y2="13" />
      <line x1="22" y1="11" x2="22" y2="15" />
      {/* Landing skid */}
      <line x1="7" y1="17" x2="7" y2="19" />
      <line x1="17" y1="17" x2="17" y2="19" />
      <line x1="5" y1="19" x2="19" y2="19" />
    </svg>
  )
}
