import { useEffect, useRef, useState } from 'react'

type Props = { to: number; prefix?: string; suffix?: string; duration?: number }

export default function Counter({ to, prefix = '', suffix = '', duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (t: number) => {
          const p = Math.min((t - t0) / duration, 1)
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref}>
      {prefix && <span className="text-teal text-[1.5rem] align-top">{prefix}</span>}
      {n}
      {suffix && <span className="text-teal text-[1.5rem] align-top">{suffix}</span>}
    </span>
  )
}
