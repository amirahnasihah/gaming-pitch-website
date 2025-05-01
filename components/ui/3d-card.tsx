"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ThreeDCardProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  cardClassName?: string
  glareClassName?: string
  rotationIntensity?: number
  glareOpacity?: number
  glareEnabled?: boolean
}

export function ThreeDCard({
  children,
  className,
  containerClassName,
  cardClassName,
  glareClassName,
  rotationIntensity = 10,
  glareOpacity = 0.2,
  glareEnabled = true,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    setRotation({
      x: -y * rotationIntensity,
      y: x * rotationIntensity,
    })

    if (glareEnabled && glareRef.current) {
      setGlarePosition({
        x: e.clientX - left,
        y: e.clientY - top,
      })
    }
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      className={cn("perspective-1000px", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={cn("relative transition-transform duration-200 ease-out", cardClassName)}
        style={{
          transform: isMounted ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : "none",
        }}
      >
        {glareEnabled && (
          <div
            ref={glareRef}
            className={cn("absolute inset-0 pointer-events-none overflow-hidden rounded-inherit", glareClassName)}
          >
            <div
              className="absolute inset-0 opacity-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${glarePosition.x}px ${glarePosition.y}px, rgba(255, 255, 255, ${glareOpacity}) 0%, rgba(255, 255, 255, 0) 80%)`,
                opacity: Math.sqrt(rotation.x ** 2 + rotation.y ** 2) / (rotationIntensity / 2),
              }}
            />
          </div>
        )}
        <div className={className}>{children}</div>
      </div>
    </div>
  )
}

