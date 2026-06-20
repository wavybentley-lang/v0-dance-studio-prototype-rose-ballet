"use client"

import { useEffect, useRef, useState } from "react"

export function useStagger(childCount: number, staggerDelay = 120) {
  const [visible, setVisible] = useState(false)
  const [visibleCount, setVisibleCount] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let count = 0
    const interval = setInterval(() => {
      count++
      setVisibleCount(count)
      if (count >= childCount) clearInterval(interval)
    }, staggerDelay)
    return () => clearInterval(interval)
  }, [visible, childCount, staggerDelay])

  return { ref, visibleCount, isVisible: visible }
}
