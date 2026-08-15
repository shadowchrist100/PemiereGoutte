import Icon from './Icon'

const phases = [
  {
    step: 'AVANT',
    icon: 'description',
    title: 'Avant le don',
    items: [
      'Avoir une pièce d\'identité',
      'Bien s\'hydrater et manger avant de venir',
      'Éviter l\'alcool depuis la veille',
      'Dormir suffisamment la nuit précédente',
    ],
  },
  {
    step: 'PENDANT',
    icon: 'water_drop',
    title: 'Pendant le don',
    items: [
      'Le prélèvement dure 7 à 10 minutes',
      'Rester détendu et signaler toute gêne',
      'Le personnel surveille votre état en continu',
      'Environ 450 ml sont prélevés en toute sécurité',
    ],
  },
  {
    step: 'APRÈS',
    icon: 'restaurant',
    title: 'Après le don',
    items: [
      'Profiter de la collation offerte sur place',
      'Rester allongé ou assis quelques minutes',
      'Boire abondamment au cours de la journée',
      'Éviter les efforts intenses pendant 12 h',
    ],
  },
]

export default function Preparation() {
  return (
    <section id="preparation" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-16 text-center">
        <p className="font-label-caps text-label-caps text-primary mb-3">05. SE PRÉPARER</p>
        <h2 className="font-headline-md text-headline-md text-on-background">
          Bien se préparer pour un don serein
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
          Suivez ces quelques conseils avant, pendant et après votre don pour une expérience
          agréable et en toute sécurité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {phases.map((phase) => (
          <div
            key={phase.step}
            className="rounded-3xl border border-outline-variant bg-surface-container-low p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Icon name={phase.icon} className="text-on-primary text-2xl" />
              </div>
              <span className="font-label-caps text-label-caps text-primary">{phase.step}</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">{phase.title}</h3>
            <ul className="space-y-3">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-on-surface-variant font-body-md">
                  <Icon name="check" className="text-primary text-sm mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
