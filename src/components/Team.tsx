import { team } from '@/content/site'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

export default function Team() {
  return (
    <section id="team" className="py-[88px] lg:py-[130px]">
      <div className="wrap">
        <Reveal><SectionTag index="06" label={team.tag} /></Reveal>
        <Reveal delay={80}>
          <h2 className="text-[clamp(2rem,4.4vw,3.15rem)] max-w-[20ch]">{team.title}</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-ink/70 max-w-[62ch] mt-[22px] text-[1.06rem]">{team.lead}</p>
        </Reveal>

        <div className="grid gap-6 mt-[60px] md:grid-cols-2 max-w-[840px]">
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 110}>
              <article className="card h-full !p-[38px]">
                {m.photo ? (
                  <img src={m.photo} alt={m.name}
                       className="w-[88px] h-[88px] rounded-full object-cover mb-[22px]" />
                ) : (
                  <div className="w-[88px] h-[88px] rounded-full mb-[22px] flex items-center justify-center
                                  bg-gradient-to-br from-teal to-ink text-cream font-display text-[1.9rem] font-bold">
                    {m.initials}
                  </div>
                )}
                <h3 className="text-[1.4rem]">{m.name}</h3>
                <div className="text-teal font-semibold text-[14.5px] mt-1 mb-3.5">{m.role}</div>
                <p className="text-ink/70 text-[15px]">{m.bio}</p>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                     className="inline-block mt-4 text-indigo font-medium text-[14.5px] hover:underline">
                    LinkedIn
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
