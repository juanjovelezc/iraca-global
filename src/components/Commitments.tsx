import { commitments } from '@/content/site'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

export default function Commitments() {
  return (
    <section className="py-[88px] lg:py-[130px] bg-white border-t border-ink/[.12]">
      <div className="wrap">
        <Reveal><SectionTag index="05" label={commitments.tag} /></Reveal>
        <Reveal delay={80}>
          <h2 className="text-[clamp(2rem,4.4vw,3.15rem)] max-w-[20ch]">{commitments.title}</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-ink/70 max-w-[62ch] mt-[22px] text-[1.06rem]">{commitments.lead}</p>
        </Reveal>

        <div className="grid gap-5 mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.items.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="h-full text-center rounded-[18px] p-8 bg-white border border-ink/[.12]
                              transition-all duration-500 ease-brand hover:border-teal hover:-translate-y-1.5
                              hover:shadow-[0_20px_44px_rgba(22,24,50,.08)]">
                <div className="w-[46px] h-[46px] rounded-[13px] bg-teal mx-auto mb-[18px]
                                flex items-center justify-center font-bold text-ink text-[19px]">
                  {i + 1}
                </div>
                <h3 className="font-sans font-semibold text-[1.06rem] tracking-normal mb-2">{c.title}</h3>
                <p className="text-sm text-ink/45 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
