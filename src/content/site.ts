/**
 * Todo el texto del sitio vive aqui.
 * Para cambiar copy no hace falta tocar ningun componente.
 * Para una version en espanol: duplicar este archivo como site.es.ts
 * y seleccionar el idioma en App.tsx.
 */

export const company = {
  name: 'Iraca Global',
  tagline: 'Bilingual. Vetted. Reliable.',
  location: 'Medellín, Colombia',
  email: 'iracaglobal@gmail.com',
  phoneDisplay: '+57 312 226 7397',
  phoneWhatsApp: '573122267397',
  linkedin: 'https://www.linkedin.com/company/iraca-global/',
  linkedinLabel: 'linkedin.com/company/iraca-global',
  /** Reemplazar por el ID real de Formspree, Tally o el backend que uses */
  formEndpoint: 'https://formspree.io/f/REEMPLAZA_ESTE_ID',
} as const

export const nav = [
  { href: '#why', label: 'Why nearshore' },
  { href: '#what', label: 'What we do' },
  { href: '#method', label: 'Our method' },
  { href: '#faq', label: 'Questions' },
  { href: '#team', label: 'Team' },
] as const

export const hero = {
  eyebrow: 'Medellín, Colombia',
  titleLead: 'Vetted bilingual developers,',
  titleAccent: 'ready to ship.',
  lead:
    'We place junior-to-mid software engineers from Colombia with engineering teams across North America and Europe. Screened for code, for English, and for the thing nobody screens for.',
  primaryCta: 'Send us a job description',
  secondaryCta: 'See how we screen',
  meta: [
    { title: 'US Eastern hours', sub: 'Zero time zone gap' },
    { title: 'Junior to mid-level', sub: 'Where nearshore returns most' },
    { title: 'Bilingual. Vetted. Reliable.', sub: 'Tested, not assumed' },
  ],
}

export const problem = {
  tag: 'The problem',
  title: 'Hiring engineers is slow, and the slow part is expensive.',
  lead:
    'These are the numbers behind every open role. They are not our metrics — they are what the market reports, and they are what an unfilled seat costs you.',
  stats: [
    {
      value: 39, prefix: '', suffix: '',
      label: 'Days to fill one role',
      detail: 'Average time to close a junior engineering position. Every one of those days is unshipped work.',
    },
    {
      value: 25, prefix: '', suffix: '%',
      label: 'Annual attrition',
      detail: 'Industry retention through staffing partners runs 75–82%. On a team of five, that predicts one or two departures a year.',
    },
    {
      value: 60, prefix: '$', suffix: 'K',
      label: 'To replace one engineer',
      detail: 'Recruiting, ramp, and lost context. On a junior role it can exceed the savings that justified going nearshore.',
    },
  ],
}

export const whatWeDo = {
  tag: 'What we do',
  title: 'End-to-end hiring for the layer most agencies skip.',
  lead:
    'Sourcing, technical screening, English assessment, and cultural fit. You get a shortlist of people already tested on what usually breaks a distributed hire.',
  cards: [
    {
      kicker: 'Mid-level',
      title: 'Where the volume is',
      body: 'Engineers with two to four years who can own a surface, not just close tickets. This is the deepest part of the Latin American market and the fastest place to add capacity without a senior price tag.',
      points: ['Full stack, frontend, backend', 'QA and test automation', 'Data and integrations'],
    },
    {
      kicker: 'Junior',
      title: 'Where we specialize',
      body: 'A deliberate focus, not a ceiling. Senior engineers are a crowded, expensive market. The real bottleneck for growing teams is the layer underneath — and it is the layer almost nobody wants to recruit for properly.',
      points: ['One to two years of real production work', 'Screened for judgement, not credentials', 'Placed into teams that will actually develop them'],
    },
  ],
}

export const method = {
  tag: 'Our method',
  title: 'The rubric we screen with. All of it.',
  lead:
    'We are new, so we are not going to ask you to trust a track record we have not built yet. Here is the entire scoring rubric instead. Judge the method.',
  criteria: [
    { weight: '25%', title: 'Code reading', body: 'Given an unfamiliar pull request, can they explain what it does and spot the risk? Juniors spend more time reading code than writing it, and almost nobody screens for it.' },
    { weight: '25%', title: 'Debugging', body: 'A broken function. Not "fix it" — narrate how you would find the problem. We score the path, not the answer.' },
    { weight: '20%', title: 'Communication under pressure', body: 'We interrupt. We disagree. Can they hold the thread, in English, and push back politely without folding?' },
    { weight: '15%', title: 'Estimation honesty', body: 'Ask for an estimate, then ask what could make it wrong. Someone who invents an answer in a low-stakes call will invent one in sprint planning.' },
    { weight: '15%', title: 'Curiosity', body: 'What they ask us. For a junior hire, the ability to ask a good question predicts more of the next twelve months than anything on the CV.' },
    { weight: '0%', title: 'Algorithm puzzles', body: 'We do not use them. They measure preparation for algorithm puzzles. Nobody\u2019s job is inverting a binary tree.' },
  ],
  note:
    'A platform can now score how someone builds. What it cannot do is tell you whether they can disagree with a product manager in English on a Thursday afternoon, whether they will still be here in month nine, or what is actually happening in their week. We are in Medellín, in the same city as the people we place. That is the part that does not automate.',
}

export const faq = {
  tag: 'Straight answers',
  title: 'The questions you were going to ask anyway.',
  items: [
    { q: 'Who owns the code?', a: 'You do, when the contract says so — with an explicit IP assignment clause under the law you choose. Colombia recognizes work-for-hire arrangements and is a signatory to the major international IP conventions. This is a solved problem, but it is also where a weak contract creates real exposure, so do not use a template you found online.' },
    { q: 'How do we pay them legally?', a: 'Two clean paths. An independent contractor agreement, where the developer invoices you directly and handles their own tax obligations in Colombia. Or an employer of record, where a third party holds the employment relationship and you pay one invoice. Contractor is simpler and faster. EOR gives you more control and suits benefits, equity, or a long horizon.' },
    { q: 'Is their English actually good enough?', a: 'Interview English and working English are different skills. An interview is a prepared performance. Working English is a planning call with four people talking over each other and an idiom you have to catch in real time. So we interrupt candidates deliberately, ask them to disagree with us, and read a written sample. A certificate is not the bar. The bar is whether they can be understood when it is inconvenient.' },
    { q: "What happens if it doesn't work out?", a: 'It depends on the structure you chose. Contractor agreements end with notice. Employment relationships in Colombia carry more worker protection than most US states, and severance rules are real. Know which structure you are in before you need to know. We are not lawyers and this is not legal advice — talk to counsel who knows Colombian labor law before signing. But you should walk in knowing what to ask.' },
    { q: 'What about holidays and time zones?', a: 'Medellín is UTC-5. Zero hours from US Eastern, one from Central, three from Pacific — a real overlap window every working day. Colombia has 18 public holidays against roughly 11 in the US, and they mostly do not align. Put the calendar in the contract on day one rather than discovering it in November.' },
    { q: 'What does it cost?', a: 'It depends on the role, the seniority, and whether you want contractor or EOR. We would rather quote something real than publish a number that turns out to be wrong for your situation. Send us the job description and you will get a straight answer, including whether we think we are the right fit at all.' },
  ],
}

export const commitments = {
  tag: 'What we commit to',
  title: 'No case studies yet. Commitments instead.',
  lead:
    'We cannot show you a retention rate we have not earned. We can tell you exactly what we hold ourselves to, in writing, from the first search.',
  items: [
    { title: 'First shortlist in 10 business days', body: 'From signed brief to candidates in front of you.' },
    { title: '90-day replacement guarantee', body: 'If the placement does not hold, we run the search again.' },
    { title: 'Screening included', body: 'Technical assessment and English evaluation, before you see anyone.' },
    { title: 'We say no', body: 'If we cannot fill your role, we tell you in an email — not six weeks into a search.' },
  ],
}

export const team = {
  tag: 'Who we are',
  title: 'We have been on both sides of this table.',
  lead:
    'As the ones hiring, and as the ones being hired. That is why we screen for the things that never appear on a CV.',
  members: [
    {
      initials: 'PV',
      name: 'Paulina Vélez',
      role: 'CEO & Co-Founder',
      bio: '[PENDIENTE: 2-3 frases sobre su trayectoria, que dirige en Iraca Global y por que fundo la empresa.]',
      photo: '', // ruta en /public, ej. '/paulina.jpg'
      linkedin: '',
    },
    {
      initials: 'JV',
      name: 'Juan José Vélez',
      role: 'Operations Manager & Co-Founder',
      bio: '[PENDIENTE: 2-3 frases sobre su trayectoria en desarrollo de software y datos, que dirige y por que fundo la empresa.]',
      photo: '',
      linkedin: '',
    },
  ],
}

export const contact = {
  tag: 'Start here',
  title: 'Send us a job description.',
  lead:
    'We will read it and tell you one of three things: we can fill this and here is roughly how long; we can fill this but the description will attract the wrong people, here is what to change; or we cannot fill this, and here is who can.',
  fields: {
    name: 'Your name',
    email: 'Work email',
    company: 'Company',
    role: "The role you're hiring for",
    rolePlaceholder: 'Paste the job description, or describe the role and the team it joins.',
    submit: 'Send it over',
    sending: 'Sending…',
    success: 'Got it. We will read it and come back to you within two business days.',
    error: 'Something went wrong. Email us directly at ',
  },
  info: [
    { label: 'Email', type: 'email' as const },
    { label: 'Phone / WhatsApp', type: 'phone' as const },
    { label: 'LinkedIn', type: 'linkedin' as const },
    { label: 'Based in', type: 'text' as const, value: 'Medellín, Colombia · Working US Eastern hours' },
  ],
}
