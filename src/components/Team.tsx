import { team } from '@/content/site'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'
import LinkedInIcon from './ui/LinkedInIcon'

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

        <div className="grid gap-7 mt-[60px] md:grid-cols-2 max-w-[900px]">
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 110}>
              <article className="card h-full overflow-hidden !p-0 group">
                <div className="relative aspect-[4/4.4] overflow-hidden bg-gradient-to-br from-teal to-indigo">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-cream font-display text-[4rem] font-bold">
                      {m.initials}
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="text-[1.5rem]">{m.name}</h3>
                  <div className="text-teal font-semibold text-[14.5px] mt-1 mb-3">{m.role}</div>
                  {m.bio && <p className="text-ink/70 text-[15px]">{m.bio}</p>}
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-indigo font-medium text-[14.5px] hover:underline"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
