"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export function AnimatedText({ text, className, once = false }: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!once || (once && !hasAnimated.current)) {
              const spans = textElement.querySelectorAll("span")
              spans.forEach((span, index) => {
                span.style.animationDelay = `${index * 0.05}s`
                span.classList.add("animate-in")
              })
              hasAnimated.current = true
            }
          } else if (!once) {
            const spans = textElement.querySelectorAll("span")
            spans.forEach((span) => {
              span.classList.remove("animate-in")
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(textElement)
    return () => observer.disconnect()
  }, [once, text])

  return (
    <div ref={textRef} className={cn("inline-block", className)}>
      {text.split("").map((char, index) => (
        <span key={index} className="inline-block opacity-0 translate-y-[20px] transition-all duration-300">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}

