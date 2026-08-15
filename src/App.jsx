import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PourquoiDonner from './components/PourquoiDonner'
import Eligibility from './components/Eligibility'
import Parcours from './components/Parcours'
import Validation from './components/Validation'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body-md text-body-md antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PourquoiDonner />
        <Eligibility />
        <Parcours />
        <Validation />
        <Faq />
      </main>
      <Cta />
      <Footer />
    </div>
  )
}
