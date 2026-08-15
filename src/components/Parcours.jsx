import Icon from './Icon'

const steps = [
  { num: '1', title: 'Accueil', text: 'On vous accueille, on vous explique les étapes.' },
  { num: '2', title: 'Entretien', text: 'Un professionnel évalue votre éligibilité.' },
  { num: 'heart', title: 'Vérification', text: 'Votre tension, votre hémoglobine sont vérifiées.' },
  { num: '4', title: 'Don', text: 'Le prélèvement dure entre 7 et 10 minutes.' },
  { num: '5', title: 'Pause', text: 'Un temps de repos et une collation vous sont offerts.' },
]

export default function Parcours() {
  return (
    <section id="parcours" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
      <div className="mb-16 text-center md:text-left">
        <p className="font-label-caps text-label-caps text-primary mb-2">03. COMMENT ÇA SE PASSE ?</p>
        <h2 className="font-headline-md text-headline-md text-on-background">
          Un parcours simple et encadré
        </h2>
      </div>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute top-8 left-8 right-8 h-[2px] bg-outline-variant hidden md:block z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div
                className={`w-16 h-16 mx-auto bg-white border-2 rounded-full flex items-center justify-center font-bold text-xl ${
                  index === 0 ? 'border-primary text-primary' : 'border-outline-variant text-on-surface-variant'
                }`}
              >
                {step.num === 'heart' ? <Icon name="favorite_border" /> : step.num}
              </div>
              <h3 className="font-body-md font-bold text-on-background">{step.title}</h3>
              <p className="text-sm text-on-surface-variant">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-on-surface-variant font-medium">
          Durée totale : environ 45 minutes
        </div>
      </div>
    </section>
  )
}
