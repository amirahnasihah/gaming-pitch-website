"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  formatter?: (value: number) => string
}

export function AnimatedCounter({
  value,
  duration = 1000,
  className,
  formatter = (value) => value.toString(),
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef<number | null>(null)
  const startValueRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation()
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      observer.disconnect()
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [value])

  const startAnimation = () => {
    startTimeRef.current = null
    startValueRef.current = displayValue

    const animateCount = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const easedProgress = easeOutExpo(progress)
      const currentValue = Math.floor(startValueRef.current + (value - startValueRef.current) * easedProgress)

      setDisplayValue(currentValue)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateCount)
      }
    }

    rafRef.current = requestAnimationFrame(animateCount)
  }

  // Easing function for smoother animation
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
  }

  return (
    <div ref={counterRef} className={cn("font-bold", className)}>
      {formatter(displayValue)}
    </div>
  )
}

