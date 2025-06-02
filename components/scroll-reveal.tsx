"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getTransformClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} opacity-0 translate-y-20`
        case "down":
          return `${baseClasses} opacity-0 -translate-y-20`
        case "left":
          return `${baseClasses} opacity-0 translate-x-20`
        case "right":
          return `${baseClasses} opacity-0 -translate-x-20`
        case "fade":
          return `${baseClasses} opacity-0`
        default:
          return `${baseClasses} opacity-0 translate-y-20`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0`
  }

  return (
    <div ref={ref} className={`${getTransformClasses()} ${className}`}>
      {children}
    </div>
  )
}
