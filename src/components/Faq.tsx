import { useState } from 'react'
import { faq } from '@/content/site'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-[88px] lg:py-[130px]">
      <div className="wrap">
        <Reveal><SectionTag index="04" label={faq.tag} /></Reveal>
        <Reveal delay={80}>
          <h2 className="text-[clamp(2rem,4.4vw,3.15rem)] max-w-[20ch]">{faq.title}</h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 border-t border-ink/[.12]">
            {faq.items.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q} className="border-b border-ink/[.12]">
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="w-full text-left py-7 pr-12 font-display text-[1.32rem] font-semibold
                                 text-ink relative tracking-[-.01em]"
                    >
                      {item.q}
                      <span
                        aria-hidden
                        className={`absolute right-1.5 top-1/2 -translate-y-1/2 font-sans text-[1.7rem]
                                    font-light text-teal transition-transform duration-300 ease-brand
                                    ${isOpen ? 'rotate-45' : ''}`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    className="grid transition-[grid-template-rows] duration-500 ease-brand"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-[30px] text-ink/70 max-w-[74ch] text-base">{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
