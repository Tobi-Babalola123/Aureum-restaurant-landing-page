"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  staggerDelay?: number
  once?: boolean
}

export function AnimatedText({
  text,
  className,
  as: Component = "p",
  staggerDelay = 30,
  once = true,
}: AnimatedTextProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({ triggerOnce: once })
  const words = text.split(" ")

  return (
    <Component ref={ref as any} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className={cn(
            "inline-block mr-[0.25em] transition-all duration-500 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
          style={{ transitionDelay: `${i * staggerDelay}ms` }}
        >
          {word}
        </span>
      ))}
    </Component>
  )
}
