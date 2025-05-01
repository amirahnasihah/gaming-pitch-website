"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ParallaxScrollProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxScroll({ children, className, speed = 0.5 }: ParallaxScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [containerTop, setContainerTop] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerTop(rect.top + window.scrollY)
        setContainerHeight(rect.height)
        setWindowHeight(window.innerHeight)
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const calculateTransform = () => {
    if (scrollY + windowHeight < containerTop) return 0
    if (scrollY > containerTop + containerHeight) return 0

    const relativeScroll = scrollY - containerTop + windowHeight
    const totalVisibleArea = containerHeight + windowHeight
    const scrollProgress = relativeScroll / totalVisibleArea

    return scrollProgress * speed * 100
  }

  const transform = calculateTransform()

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <div
        style={{
          transform: `translateY(${transform}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {children}
      </div>
    </div>
  )
}

