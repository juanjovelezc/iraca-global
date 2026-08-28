import { useEffect, useState } from 'react'
import { nav, company } from '@/content/site'
import { useScrollY } from '@/hooks/useReveal'

export default function Nav() {
  const y = useScrollY()
  const [open, setOpen] = useState(false)
  const stuck = y > 40

  useEffect(() => {
    const onResize = () => window.innerWidth > 940 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
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
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-[14.5px] font-medium text-ink/70 hover:text-ink transition-colors
                         after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-teal
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn px-[22px] py-2.5 text-sm">Send us a JD</a>
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
  )
}
