import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0)
  const frame = useRef<number | null>(null)
  const startedAt = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    const animate = (timestamp: number) => {
      if (startedAt.current === null) startedAt.current = timestamp
      const elapsed = timestamp - startedAt.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frame.current = requestAnimationFrame(animate)
      }
    }
    frame.current = requestAnimationFrame(animate)
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [start, target, duration])

  return value
}
