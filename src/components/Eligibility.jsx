import Icon from './Icon'

const criteria = [
  { icon: 'calendar_today', title: 'Âge', text: '18 à 70 ans' },
  { icon: 'monitor_weight', title: 'Poids', text: 'Plus de 50 kg' },
  { icon: 'favorite', title: 'Santé', text: 'Être en bonne santé générale', active: true },
  { icon: 'medical_information', title: 'Antécédents', text: 'Certaines situations peuvent différer' },
  { icon: 'flight_takeoff', title: 'Situations', text: 'Voyages, médicaments, piercings, etc.' },
]

export default function Eligibility() {
  return (
    <section
      id="eligibility"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap bg-surface-container-low py-20 rounded-[3rem]"
    >
      <div className="mb-16">
        <p className="font-label-caps text-label-caps text-primary mb-2">02. PUIS-JE DONNER ?</p>
        <h2 className="font-headline-md text-headline-md text-on-background mb-4">
          Vérifiez votre éligibilité
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {criteria.map((item) => (
          <div key={item.title} className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full border border-outline flex items-center justify-center">
              <Icon
                name={item.icon}
                className={`text-2xl ${item.active ? 'text-primary' : 'text-on-surface-variant'}`}
              />
            </div>
            <h3 className="font-body-md font-bold text-on-background">{item.title}</h3>
            <p className="text-sm text-on-surface-variant">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-primary text-on-primary font-body-md text-body-md font-bold px-8 py-4 rounded-full hover:bg-surface-tint transition-colors shadow-sm">
          Faire le test d'éligibilité
        </button>
      </div>
    </section>
  )
}
