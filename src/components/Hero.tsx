import { hero } from '@/content/site'
import Reveal from './ui/Reveal'
import { useScrollY } from '@/hooks/useReveal'

export default function Hero() {
  const y = useScrollY()

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

      <div className="wrap relative">
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
            <a href="#contact" className="btn">{hero.primaryCta}</a>
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
    </section>
  )
}
