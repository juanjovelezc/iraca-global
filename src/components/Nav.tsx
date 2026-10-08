import { useEffect, useState } from 'react'
import { nav, company } from '@/content/site'
import { useScrollY } from '@/hooks/useReveal'

export default function Nav() {
  const y = useScrollY()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const stuck = y > 40

  useEffect(() => {
    const onResize = () => window.innerWidth > 940 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s))
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-teal to-indigo"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand',
          stuck ? 'py-3 bg-cream/[.82] backdrop-blur-md shadow-[0_1px_0_rgba(22,24,50,.12)]' : 'py-5',
        ].join(' ')}
      >
        <div className="wrap flex items-center justify-between">
          <a href="#top" aria-label={company.name}>
            <img
              src="./logo-lockup-ink.png"
              alt={company.name}
              className={`w-auto transition-all duration-500 ease-brand ${stuck ? 'h-[29px]' : 'h-[34px]'}`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((n) => {
              const isActive = active === n.href.slice(1)
              return (
                <a
                  key={n.href}
                  href={n.href}
                  className={`relative text-[14.5px] font-medium transition-colors
                              after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:bg-teal
                              after:transition-all after:duration-300
                              ${isActive ? 'text-ink after:w-full' : 'text-ink/70 hover:text-ink after:w-0 hover:after:w-full'}`}
                >
                  {n.label}
                </a>
              )
            })}
            <a href="#contact" className="btn px-[22px] py-2.5 text-sm group">
              Send us a JD
              <span aria-hidden className="ml-2 inline-block transition-transform duration-300 ease-brand group-hover:translate-x-1">→</span>
            </a>
          </nav>

          <button
            className="lg:hidden p-1.5"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block w-6 h-0.5 bg-ink my-[5px] transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink my-[5px] transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink my-[5px] transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>

        {open && (
          <nav className="lg:hidden wrap mt-4">
            <div className="flex flex-col gap-1 bg-cream rounded-2xl p-5 shadow-[0_20px_46px_rgba(22,24,50,.14)] border border-ink/[.08]">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                   className="py-2.5 font-medium text-ink/80 hover:text-ink">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn mt-3">Send us a JD</a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
