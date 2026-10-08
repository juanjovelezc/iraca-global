import { hero, method } from '@/content/site'
import Reveal from './ui/Reveal'
import { useScrollY } from '@/hooks/useReveal'

export default function Hero() {
  const y = useScrollY()
  const criteria = method.criteria.filter((c) => c.weight !== '0%')

  return (
    <section id="top" className="relative overflow-hidden flex items-center min-h-[100svh] pt-[150px] pb-[90px] lg:pt-[150px]">
      {/* resplandores de marca — nunca detras de texto largo */}
      <div aria-hidden className="pointer-events-none absolute rounded-full blur-[64px] bg-teal
        opacity-[.16] w-[300px] h-[300px] -top-[140px] -right-[120px]
        lg:opacity-[.32] lg:w-[620px] lg:h-[620px] lg:-top-[190px] lg:-right-[190px]" />
      <div aria-hidden className="pointer-events-none hidden lg:block absolute rounded-full blur-[64px]
        bg-indigo opacity-[.16] w-[430px] h-[430px] -bottom-[170px] -left-[150px]" />

      <img
        aria-hidden
        src="./isotype-ink.png"
        alt=""
        className="pointer-events-none hidden lg:block absolute -right-[90px] top-1/2 w-[640px] opacity-[.05]"
        style={{ transform: `translateY(calc(-50% + ${y * 0.16}px)) rotate(${y * 0.02}deg)` }}
      />

      <div className="wrap relative grid lg:grid-cols-[1fr_minmax(340px,380px)] lg:gap-[70px] lg:items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 text-[12.5px] font-semibold tracking-[.16em]
                            uppercase text-ink/70 mb-[30px] before:content-[''] before:w-[34px] before:h-0.5 before:bg-teal">
              {hero.eyebrow}
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="text-[clamp(2.9rem,7vw,5.3rem)] max-w-[15ch]">
              {hero.titleLead}{' '}
              <span className="relative whitespace-nowrap after:absolute after:inset-x-0 after:bottom-[.09em]
                               after:h-[.30em] after:bg-teal after:opacity-40 after:-z-10 after:rounded">
                {hero.titleAccent}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="text-[clamp(1.05rem,2vw,1.3rem)] text-ink/70 max-w-[56ch] mt-[30px]">{hero.lead}</p>
          </Reveal>

          <Reveal delay={270}>
            <div className="flex flex-wrap gap-4 mt-11">
              <a href="#contact" className="btn group">{hero.primaryCta}
                <span aria-hidden className="ml-2.5 inline-block transition-transform duration-300 ease-brand group-hover:translate-x-1.5">→</span>
              </a>
              <a href="#method" className="btn btn-ghost">{hero.secondaryCta}</a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="flex flex-wrap gap-x-9 gap-y-5 mt-14 text-sm text-ink/45">
              {hero.meta.map((m) => (
                <div key={m.title}>
                  <b className="block text-ink font-semibold text-[15px]">{m.title}</b>
                  {m.sub}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* tarjeta de candidato evaluado */}
        <div className="hidden lg:block relative">
          <Reveal delay={220}>
            <div className="card !p-7 relative">
              <span className="absolute -top-3 -right-3 bg-ink text-cream text-[11px] font-bold tracking-[.12em]
                               uppercase px-3.5 py-1.5 rounded-full shadow-[0_10px_24px_rgba(22,24,50,.28)]">
                ✓ Cleared
              </span>
              <div className="flex items-center gap-4">
                <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-teal to-indigo
                                flex items-center justify-center text-cream shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[1.02rem]">Vetted developer</div>
                  <div className="text-ink/45 text-[13px]">Medellín, Colombia · UTC−5</div>
                </div>
              </div>

              <div className="mt-6 space-y-3.5">
                {criteria.map((c) => (
                  <div key={c.title}>
                    <div className="flex items-baseline justify-between text-[13px] mb-1.5">
                      <span className="text-ink/70">{c.title}</span>
                      <span className="font-semibold text-ink">{c.weight}</span>
                    </div>
                    <div className="h-[6px] rounded-full bg-ink/[.08] overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-teal to-indigo" style={{ width: c.weight }} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[12.5px] text-ink/45">{hero.meta[1].sub}</p>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="absolute -bottom-6 -left-8 bg-white border border-ink/[.1] rounded-2xl px-5 py-4
                            shadow-[0_18px_44px_rgba(22,24,50,.12)] flex items-center gap-3">
              <div className="w-[38px] h-[38px] rounded-full bg-teal flex items-center justify-center font-bold text-ink text-[15px]">10</div>
              <div className="text-[13px] leading-tight">
                <b className="block">business days</b>
                <span className="text-ink/50">to a shortlist</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* indicador de scroll */}
      <a href="#why" aria-label="Scroll to content"
         className="hidden md:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2.5
                    text-ink/40 hover:text-ink transition-colors">
        <span className="text-[11px] font-semibold tracking-[.22em] uppercase">Scroll</span>
        <span className="relative w-[2px] h-[34px] bg-ink/[.15] rounded-full overflow-hidden">
          <span className="absolute left-0 top-0 w-full h-1/2 bg-teal rounded-full
                           animate-[scroll-line_1.6s_ease-in-out_infinite]" />
        </span>
      </a>
    </section>
  )
}
