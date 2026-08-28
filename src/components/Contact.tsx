import { useState, type FormEvent } from 'react'
import { contact, company } from '@/content/site'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(company.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('bad response')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const info: Record<string, { value: string; href?: string }> = {
    Email: { value: company.email, href: `mailto:${company.email}` },
    'Phone / WhatsApp': { value: company.phoneDisplay, href: `https://wa.me/${company.phoneWhatsApp}` },
    LinkedIn: { value: company.linkedinLabel, href: company.linkedin },
  }

  const field =
    'w-full bg-cream/[.06] border border-cream/[.16] rounded-xl px-4 py-3.5 text-cream ' +
    'text-[15.5px] transition-colors focus:outline-none focus:border-teal focus:bg-cream/[.09] ' +
    'placeholder:text-cream/35'
  const label = 'block text-[13px] font-semibold tracking-[.06em] uppercase text-cream/60 mt-[22px] mb-2'

  return (
    <section id="contact" className="py-[88px] lg:py-[130px] bg-ink text-cream">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-[70px] items-start">
        <div>
          <Reveal><SectionTag index="07" label={contact.tag} dark /></Reveal>
          <Reveal delay={80}>
            <h2 className="text-[clamp(2rem,4.4vw,3.15rem)] max-w-[16ch] text-cream">{contact.title}</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-cream/[.68] max-w-[56ch] mt-[22px] text-[1.06rem]">{contact.lead}</p>
          </Reveal>

          <Reveal delay={240}>
            <dl className="mt-11">
              {contact.info.map((row, i) => {
                const data = info[row.label]
                const isLast = i === contact.info.length - 1
                return (
                  <div key={row.label} className={`py-5 ${isLast ? '' : 'border-b border-cream/[.13]'}`}>
                    <dt className="text-[12.5px] tracking-[.14em] uppercase text-cream/45 mb-1.5">{row.label}</dt>
                    <dd className="text-[17px]">
                      {data?.href ? (
                        <a href={data.href} target={row.type === 'text' ? undefined : '_blank'}
                           rel="noopener noreferrer"
                           className="text-teal border-b border-transparent hover:border-teal transition-colors">
                          {data.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <form onSubmit={onSubmit} className="w-full">
            <label className={label} htmlFor="name">{contact.fields.name}</label>
            <input className={field} id="name" name="name" required autoComplete="name" />

            <label className={label} htmlFor="email">{contact.fields.email}</label>
            <input className={field} id="email" name="email" type="email" required autoComplete="email" />

            <label className={label} htmlFor="company">{contact.fields.company}</label>
            <input className={field} id="company" name="company" required autoComplete="organization" />

            <label className={label} htmlFor="role">{contact.fields.role}</label>
            <textarea className={`${field} min-h-[132px] resize-y`} id="role" name="role"
                      placeholder={contact.fields.rolePlaceholder} required />

            <button type="submit" disabled={status === 'sending'}
                    className="btn w-full mt-7 py-4 disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'sending' ? contact.fields.sending : contact.fields.submit}
            </button>

            <p aria-live="polite" className="mt-4 text-[14.5px] min-h-[1.5em]">
              {status === 'sent' && <span className="text-teal">{contact.fields.success}</span>}
              {status === 'error' && (
                <span className="text-cream/70">
                  {contact.fields.error}
                  <a href={`mailto:${company.email}`} className="text-teal underline">{company.email}</a>.
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
