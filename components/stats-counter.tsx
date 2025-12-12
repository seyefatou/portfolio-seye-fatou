"use client"

import { useEffect, useState, useRef } from "react"

interface StatItem {
  value: number
  label: string
  prefix?: string
  color: string
}

const stats: StatItem[] = [
  {
    value: 2,
    label: "Ans d'expérience",
    prefix: "+",
    color: "from-amber-500 to-orange-500"
  },
  {
    value: 7,
    label: "Projets réalisés",
    color: "from-emerald-500 to-teal-500"
  },
  {
    value: 5,
    label: "Projets complétés",
    color: "from-blue-500 to-indigo-500"
  },
  {
    value: 2,
    label: "En cours",
    color: "from-purple-500 to-pink-500"
  }
]

function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(() => {
      const duration = 1500
      const steps = 30
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timeout)
  }, [value, delay, isVisible])

  return (
    <span
      ref={ref}
      className={`tabular-nums ${isVisible ? 'animate-number-pop' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {count}
    </span>
  )
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-card group bg-gradient-to-br from-secondary/80 to-secondary rounded-xl p-3 md:p-4 border border-border/50 animate-stat-glow text-center"
          style={{
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {/* Number */}
          <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
            {stat.prefix && <span>{stat.prefix}</span>}
            <AnimatedNumber value={stat.value} delay={index * 200} />
          </div>

          {/* Label */}
          <p className="text-[10px] md:text-xs text-muted-foreground font-medium leading-tight">
            {stat.label}
          </p>

          {/* Progress bar effect */}
          <div className="mt-2 h-1 bg-border/50 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${stat.color} animate-progress-fill rounded-full`}
              style={{
                width: `${(stat.value / 7) * 100}%`,
                animationDelay: `${index * 200 + 500}ms`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
