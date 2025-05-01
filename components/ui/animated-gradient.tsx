"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function AnimatedGradient({
  children,
  className,
  containerClassName,
  gradientClassName,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  gradientClassName?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const interactive = interactiveRef.current

    if (!container || !interactive) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      interactive.style.setProperty("--x", x.toString())
      interactive.style.setProperty("--y", y.toString())
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      <div
        ref={interactiveRef}
        className={cn(
          "absolute inset-0 z-0 transition-opacity duration-300 opacity-40 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600",
          "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,0,0,0)_0%,rgba(0,0,0,1)_60%)]",
          gradientClassName,
        )}
        style={
          {
            "--x": "0.5",
            "--y": "0.5",
          } as React.CSSProperties
        }
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

