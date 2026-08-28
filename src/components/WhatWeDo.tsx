import { whatWeDo } from '@/content/site'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

export default function WhatWeDo() {
  return (
    <section id="what" className="py-[88px] lg:py-[130px] bg-white border-y border-ink/[.12]">
      <div className="wrap">
        <Reveal><SectionTag index="02" label={whatWeDo.tag} /></Reveal>
        <Reveal delay={80}>
          <h2 className="text-[clamp(2rem,4.4vw,3.15rem)] max-w-[20ch]">{whatWeDo.title}</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-ink/70 max-w-[62ch] mt-[22px] text-[1.06rem]">{whatWeDo.lead}</p>
        </Reveal>

        <div className="grid gap-6 mt-15 md:grid-cols-2 mt-[60px]">
          {whatWeDo.cards.map((c, i) => (
            <Reveal key={c.kicker} delay={i * 110}>
              <div className="card h-full">
                <span className="inline-block text-xs font-bold tracking-[.13em] uppercase
                                 bg-teal text-ink px-3.5 py-1.5 rounded-full mb-5">{c.kicker}</span>
                <h3 className="text-[1.55rem] mb-3.5">{c.title}</h3>
                <p className="text-ink/70 text-[15.5px]">{c.body}</p>
                <ul className="mt-5 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="relative pl-6 text-[15px] text-ink/70
                                           before:absolute before:left-0 before:top-[.62em]
                                           before:w-2.5 before:h-2.5 before:rounded-full before:bg-teal">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
