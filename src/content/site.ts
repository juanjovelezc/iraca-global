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
  email: 'team@iracaglobal.com',
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
    'We connect growing teams in North America and Europe with junior- to mid-level software engineers in Colombia. Every person we send you has already been checked for code, for English, and for the one thing most agencies never think to check at all.',
  primaryCta: 'Send us a job description',
  secondaryCta: 'See how we screen',
  meta: [
    { title: 'Zero time zone gap', sub: 'US Eastern hours' },
    { title: 'Bilingual, vetted, reliable', sub: 'Tested, not assumed' },
  ],
}

export const problem = {
  tag: 'The problem',
  title: 'The real cost of an empty seat, and how we close it fast.',
  lead:
    'Hiring an engineer usually takes too long, and every extra week costs you real work that never gets done. We built Iraca Global to close that gap quickly. We already have a pipeline of developers who are tested and ready, so instead of starting your search from zero, you start from a shortlist.',
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
  title: 'What we do for you.',
  lead:
    'We handle the whole process for you, from finding someone to making sure they are actually a good fit. Sourcing, testing their skills, checking their English, and getting a feel for how they work with people. You only meet candidates who are already ready to say yes and do great work.',
  cards: [
    {
      kicker: 'Mid-level',
      title: 'Where the volume is',
      body: 'Engineers with two to four years of experience. People who can take real ownership of a project, not just check off small tasks.',
      points: ['Full stack, frontend, backend', 'QA and test automation', 'Data and integrations'],
    },
    {
      kicker: 'Junior',
      title: 'Where we specialize',
      body: 'This is the group most agencies skip, and it is our favorite group to work with. One to two years of real experience, chosen for good judgment, not just a diploma. We place them with teams who will actually help them grow.',
      points: ['One to two years of real production work', 'Screened for judgement, not credentials', 'Placed into teams that will actually develop them'],
    },
  ],
}

export const method = {
  tag: 'Our method',
  title: 'How we choose the right person for you.',
  lead:
    'We are a new company, so instead of asking you to trust us blindly, we want to show you exactly how we work. Here is our full process.',
  criteria: [
    { weight: '25%', title: 'Reading code', body: 'We hand them a piece of code they have never seen and ask them to explain it. Most of a developer’s day is spent reading code, so this tells us a lot.' },
    { weight: '25%', title: 'Solving problems', body: 'We give them a broken piece of code and ask them to talk us through how they would fix it. We care more about how they think than the final answer.' },
    { weight: '20%', title: 'Talking things through', body: 'We ask hard questions and gently push back, in English, to see how they handle a real conversation under pressure.' },
    { weight: '15%', title: 'Being honest', body: 'We ask for a time estimate, then ask what could go wrong with it. Someone who is honest here will be honest with you later too.' },
    { weight: '15%', title: 'Curiosity', body: 'We pay close attention to the questions they ask us. A good question often tells us more than a perfect resume.' },
    { weight: '0%', title: 'Puzzle tests', body: 'We do not use them. They only show how well someone studied for a puzzle, not how well they can do the job.' },
  ],
  note:
    'A computer can score how someone writes code. It cannot tell you if that person will still be smiling on a hard Thursday, or if they will still be with you in a year. We can, because we are right there with them, in Medellín.',
}

export const faq = {
  tag: 'Straight answers',
  title: 'The questions you were already thinking, answered simply.',
  items: [
    { q: 'Who owns the code?', a: 'You do. We make sure the contract says so clearly, so there is never any confusion later.' },
    { q: 'How do we pay them the right way?', a: 'We make it simple. You can either work with them as an independent contractor, which is the fastest way to start, or use an employer of record, which gives you a bit more structure if you are planning long term. We help you pick whichever fits you best.' },
    { q: 'Is their English really good enough?', a: 'Yes, and we make sure of it in a real way. Instead of just checking a certificate, we have a real conversation with them, including moments where we interrupt or disagree, just like in a real meeting. If they can hold their own there, they can hold their own with your team.' },
    { q: 'What if it does not work out?', a: 'That is exactly why we offer a guarantee. If a placement does not work out within 90 days, we find you someone new, at no extra cost. We also walk you through what to expect from the start, so there are no surprises later.' },
    { q: 'What about holidays and time zones?', a: 'Good news here too. Medellín shares almost the exact same working hours as the US. We also give you the full holiday calendar upfront, so you can plan ahead with zero surprises.' },
    { q: 'What does it cost?', a: 'It depends on the role, so instead of guessing, just send us the job description. We will give you a real, honest number, and tell you plainly if we are not the right fit for you.' },
  ],
}

export const commitments = {
  tag: 'What we commit to',
  title: 'What we promise you, from day one.',
  lead:
    'We cannot show you a retention rate we have not earned. We can tell you exactly what we hold ourselves to, in writing, from the first search.',
  items: [
    { title: 'A shortlist in 10 business days', body: 'From the moment you sign, to real candidates in front of you.' },
    { title: 'A 90 day guarantee', body: 'If it does not work out, we search again for you, at no cost.' },
    { title: 'Every candidate is already tested', body: 'Code, English, and fit, before you ever see a name.' },
    { title: 'We tell you the truth', body: 'If we cannot fill your role, we say so in an email, not six weeks later.' },
  ],
}

export const team = {
  tag: 'Who we are',
  title: 'We built Iraca Global because we have sat on both sides of this table.',
  lead:
    'We know what it feels like to search for the right job, and we know what it feels like to search for the right person. That is why we care so much about getting the human part right, not just the paperwork.',
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
