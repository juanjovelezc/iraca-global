const phrases = [
  'Zero time zone gap',
  'Bilingual, vetted, reliable',
  'Shortlist in 10 business days',
  '90-day guarantee',
  'Tested, not assumed',
]

export default function Marquee() {
  const row = [...phrases, ...phrases]
  return (
    <div className="overflow-hidden border-y border-ink/[.08] bg-cream py-[15px]">
      <div className="flex w-max animate-[marquee_30s_linear_infinite]">
        {row.map((p, i) => (
          <span key={i}
                className="flex items-center gap-7 pr-7 text-[12.5px] font-semibold tracking-[.16em]
                           uppercase text-ink/50 whitespace-nowrap">
            {p}
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-indigo/70 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
