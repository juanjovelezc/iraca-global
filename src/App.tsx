import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import WhatWeDo from './components/WhatWeDo'
import Method from './components/Method'
import Faq from './components/Faq'
import Commitments from './components/Commitments'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhatWeDo />
        <Method />
        <Faq />
        <Commitments />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
