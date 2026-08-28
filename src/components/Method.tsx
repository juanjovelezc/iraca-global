import { method } from '@/content/site'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

export default function Method() {
  return (
    <section id="method" className="py-[88px] lg:py-[130px] bg-ink text-cream">
      <div className="wrap">
        <Reveal><SectionTag index="03" label={method.tag} dark /></Reveal>
        <Reveal delay={80}>
          <h2 className="text-[clamp(2rem,4.4vw,3.15rem)] max-w-[20ch] text-cream">{method.title}</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-cream/[.68] max-w-[62ch] mt-[22px] text-[1.06rem]">{method.lead}</p>
        </Reveal>

        <div className="grid gap-5 mt-[60px] md:grid-cols-2 lg:grid-cols-3">
          {method.criteria.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="h-full rounded-[18px] p-8 bg-cream/[.05] border border-cream/[.13]
                              transition-all duration-500 ease-brand
                              hover:bg-teal/[.11] hover:border-teal hover:-translate-y-1.5">
                <div className="font-display text-[2.4rem] font-bold text-teal leading-none">{c.weight}</div>
                <h3 className="text-[1.18rem] mt-3.5 mb-2.5 text-cream">{c.title}</h3>
                <p className="text-[14.5px] text-cream/[.66] leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 py-7 px-8 border-l-[3px] border-teal bg-cream/[.04]
                        rounded-r-2xl text-base text-cream/[.82] max-w-[78ch]">
            {method.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
