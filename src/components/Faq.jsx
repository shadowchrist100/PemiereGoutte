import { useState } from 'react'
import Icon from './Icon'

const faqs = [
  {
    q: "Est-ce que ça fait mal ?",
    a: "Une sensation brève lors de l'insertion de l'aiguille peut être ressentie, puis le don se déroule normalement.",
  },
  {
    q: "Combien de temps ça prend ?",
    a: "Le don en lui-même dure entre 7 et 10 minutes. En comptant l'accueil, l'entretien et la pause, comptez environ 45 minutes au total.",
  },
  {
    q: "Et si je suis stressé ?",
    a: "C'est tout à fait normal. Le personnel est là pour vous accueillir et vous rassurer. Vous pouvez poser toutes vos questions avant de commencer.",
  },
  {
    q: "Et si je ne peux finalement pas donner ?",
    a: "Pas d'inquiétude : l'entretien préalable permet de faire le point avec un professionnel. Si le don n'est pas possible ce jour-là, vous pourrez peut-être le faire plus tard, et votre présence reste précieuse.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-8">
        <p className="font-label-caps text-label-caps text-primary mb-2">08. QUESTIONS FRÉQUENTES</p>
        <h2 className="font-headline-md text-headline-md text-on-background">
          Vous vous posez ces questions ?
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const open = openIndex === index
          const panelId = `faq-panel-${index}`
          const buttonId = `faq-button-${index}`
          return (
            <div key={index} className="border-b border-outline-variant pb-4">
              <button
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="w-full flex justify-between items-center gap-4 text-left cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
              >
                <span className="font-body-lg font-bold text-on-background">{faq.q}</span>
                <Icon
                  name="add"
                  className={`text-primary shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
                />
              </button>
              {open && (
                <p id={panelId} role="region" aria-labelledby={buttonId} className="text-on-surface-variant mt-2 text-sm">
                  {faq.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
