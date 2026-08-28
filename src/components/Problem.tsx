import { problem } from '@/content/site'
import Reveal from './ui/Reveal'
import Counter from './ui/Counter'
import SectionTag from './ui/SectionTag'

export default function Problem() {
  return (
    <section id="why" className="py-[88px] lg:py-[130px]">
      <div className="wrap">
        <Reveal><SectionTag index="01" label={problem.tag} /></Reveal>
        <Reveal delay={80}>
          <h2 className="text-[clamp(2rem,4.4vw,3.15rem)] max-w-[20ch]">{problem.title}</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-ink/70 max-w-[62ch] mt-[22px] text-[1.06rem]">{problem.lead}</p>
        </Reveal>

        <div className="grid gap-6 mt-16 md:grid-cols-3">
          {problem.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <div className="card h-full !p-[38px_32px]">
                <div className="font-display text-[3.5rem] font-bold leading-none text-ink">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="font-semibold mt-3.5 text-[15.5px]">{s.label}</div>
                <div className="text-ink/45 text-[14.5px] mt-[7px] leading-relaxed">{s.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
