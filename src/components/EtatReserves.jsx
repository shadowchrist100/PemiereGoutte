import Icon from './Icon'

const groups = [
  { group: 'O-', level: 'critique', pct: 90 },
  { group: 'O+', level: 'eleve', pct: 65 },
  { group: 'A-', level: 'critique', pct: 85 },
  { group: 'A+', level: 'moyen', pct: 55 },
  { group: 'B-', level: 'eleve', pct: 75 },
  { group: 'B+', level: 'moyen', pct: 50 },
  { group: 'AB-', level: 'suffisant', pct: 35 },
  { group: 'AB+', level: 'suffisant', pct: 25 },
]

const levelMeta = {
  critique: { label: 'Besoins critiques', bar: 'bg-red-500', text: 'text-red-600' },
  eleve: { label: 'Besoins élevés', bar: 'bg-orange-400', text: 'text-orange-600' },
  moyen: { label: 'Besoins moyens', bar: 'bg-amber-400', text: 'text-amber-600' },
  suffisant: { label: 'Suffisant', bar: 'bg-green-500', text: 'text-green-600' },
}

export default function EtatReserves() {
  return (
    <section id="reserves" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-16 text-center">
        <p className="font-label-caps text-label-caps text-primary mb-3">07. ÉTAT DES RÉSERVES</p>
        <h2 className="font-headline-md text-headline-md text-on-background">
          Besoins actuels par groupe sanguin
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
          Les réserves s'épuisent rapidement : certaines poches ne se conservent que 42 jours.
          Votre groupe sanguin peut manquer aujourd'hui.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((item) => {
          const meta = levelMeta[item.level]
          return (
            <div
              key={item.group}
              className="rounded-3xl border border-outline-variant bg-surface-container-low p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display-lg-mobile text-display-lg-mobile font-bold text-on-background">
                  {item.group}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold">
                  <span className={`w-2.5 h-2.5 rounded-full ${meta.bar}`}></span>
                  <span className={meta.text}>{meta.label}</span>
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-surface-container-highest overflow-hidden">
                <div className={`h-full rounded-full ${meta.bar}`} style={{ width: `${item.pct}%` }}></div>
              </div>
              <p className="text-xs text-on-surface-variant mt-3">
                Niveau de réserve estimé à {100 - item.pct}%
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-error-container px-6 py-5">
        <p className="font-body-md font-semibold text-on-error-container flex items-center gap-2">
          <Icon name="warning" className="text-xl" />
          Les groupes O- et A- sont particulièrement recherchés en urgence.
        </p>
        <button className="bg-primary text-on-primary font-body-md text-body-md font-bold px-8 py-3 rounded-full hover:bg-surface-tint transition-colors shadow-sm shrink-0">
          Je donne
        </button>
      </div>
    </section>
  )
}
