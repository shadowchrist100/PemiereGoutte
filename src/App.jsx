import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PourquoiDonner from './components/PourquoiDonner'
import Eligibility from './components/Eligibility'
import SimulateurEligibilite from './components/SimulateurEligibilite'
import Parcours from './components/Parcours'
import Preparation from './components/Preparation'
import OuDonner from './components/OuDonner'
import EtatReserves from './components/EtatReserves'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body-md text-body-md antialiased overflow-x-hidden">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Aller au contenu principal
      </a>
      <Navbar />
      <main id="contenu">
        <Hero />
        <div className="space-y-[120px] md:space-y-[160px] mt-[120px]">
          <PourquoiDonner />
          <Eligibility />
          <SimulateurEligibilite />
          <Parcours />
          <Preparation />
          <OuDonner />
          <EtatReserves />
          <Faq />
        </div>
      </main>
      <Cta />
      <Footer />
    </div>
  )
}
