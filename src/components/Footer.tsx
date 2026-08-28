import { company } from '@/content/site'
import LinkedInIcon from './ui/LinkedInIcon'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/50 py-11 border-t border-cream/[.12]">
      <div className="wrap flex flex-wrap items-center justify-between gap-5 text-sm">
        <div className="flex items-center gap-5">
          <img src="./logo-lockup-cream.png" alt={company.name} className="h-[30px] w-auto opacity-90" />
          <a
            href={company.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${company.name} on LinkedIn`}
            className="inline-flex text-cream/55 hover:text-teal hover:-translate-y-0.5
                       transition-all duration-300 ease-brand leading-none"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </div>
        <div className="italic text-cream/[.62]">{company.tagline}</div>
        <div>© {new Date().getFullYear()} {company.name} · {company.location}</div>
      </div>
    </footer>
  )
}
