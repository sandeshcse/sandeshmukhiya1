"use client"

import { useEffect } from "react"

export function ParticleBackground() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div")
      const types = ["particle-1", "particle-2", "particle-3"]
      const type = types[Math.floor(Math.random() * types.length)]

      particle.className = `particle ${type}`
      particle.style.left = Math.random() * 100 + "vw"
      particle.style.animationDuration = Math.random() * 3 + 2 + "s"

      document.body.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 5000)
    }

    const interval = setInterval(createParticle, 300)
    return () => clearInterval(interval)
  }, [])

  return null
}
