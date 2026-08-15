import Icon from './Icon'

const reasons = [
  "Vous ne savez pas si vous êtes éligible ?",
  "Vous vous demandez si ça fait mal ?",
  "Vous ne savez pas où aller ?",
]

const validationImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDjxBayYgbmrpztsqXOQ6dBvKt5buF6k_elIA_UM52kJNa49fwqRsmqkuU69QUhWEo_130pRShY7VzR3MGGhPhcj0V-FVXzQQcgEAGsbRDbcXOTj7WMVb3HixFUnnjm-OM11YgjeBM-jiqjmJbNMzv45JkXbksTluNCXy0yyuZCyDoD0s4jkHrcKkwc9ZMR2-63KOZZJdotJzuggV0t7YnN2P5OQ2l3_e-nupL89poKjlkWqgKmML7F'

export default function Validation() {
  return (
    <section id="faq" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
      <div className="mb-12">
        <p className="font-label-caps text-label-caps text-primary mb-2">04. JUSTEMENT POUR VOUS</p>
        <h2 className="font-headline-md text-headline-md text-on-background mb-4">
          Vous n'avez jamais donné votre sang ?
        </h2>
        <p className="font-body-lg text-body-lg text-primary italic">Alors commençons simplement.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-center gap-3 text-on-surface-variant font-body-md">
                <Icon name="check" className="text-primary text-sm" />
                {reason}
              </li>
            ))}
          </ul>
          <p className="font-body-md font-bold text-on-background mt-8">On vous explique tout.</p>
          <button className="bg-primary text-on-primary font-body-md text-body-md font-bold px-8 py-4 rounded-full hover:bg-surface-tint transition-colors shadow-sm mt-4">
            Je veux comprendre avant de me décider
          </button>
        </div>
        <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-auto">
          <img alt="Personne pensive" className="w-full h-full object-cover" src={validationImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
