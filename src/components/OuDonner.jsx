import { useMemo, useState } from 'react'
import Icon from './Icon'

const centres = [
  {
    name: 'Centre National de Transfusion Sanguine (CNTS)',
    nature: 'Centre national de référence',
    city: 'Cotonou',
    addr: 'Lot 307, Rue des 500 Logements, Zogbo, Cotonou',
    region: 'Littoral',
    open: 8,
    close: 17,
    phone: '+229 21 30 28 44',
    email: 'cnts@cnts.bj',
    types: ['Sang total', 'Plasma', 'Plaquettes'],
    rdv: 'Sur place / prise de RDV recommandée',
  },
  {
    name: "Unité de Transfusion - CHU de la Mère et de l'Enfant Lagune",
    nature: 'Hôpital universitaire',
    city: 'Cotonou',
    addr: 'Boulevard de la Marina, Cotonou 05 BP 1208',
    region: 'Littoral',
    open: 8,
    close: 16,
    phone: '+229 21 30 02 03',
    email: 'chu-mel@chu-bj.org',
    types: ['Sang total'],
    rdv: 'Sur place',
  },
  {
    name: 'Unité de Transfusion - Hôpital de zone de Suru-Léré',
    nature: 'Hôpital de zone',
    city: 'Cotonou',
    addr: 'Suru-Léré, Akpakpa, 01 BP 517 Cotonou',
    region: 'Littoral',
    open: 8,
    close: 16,
    phone: '+229 21 33 22 55',
    email: 'surulere@hopital.bj',
    types: ['Sang total', 'Plasma'],
    rdv: 'Sur place',
  },
  {
    name: "Unité de Transfusion - CHU Départemental de l'Ouémé-Plateau",
    nature: 'Hôpital universitaire départemental',
    city: 'Porto-Novo',
    addr: 'Avenue Jean-Paul II, Porto-Novo',
    region: 'Ouémé',
    open: 8,
    close: 16,
    phone: '+229 20 22 25 81',
    email: 'chudop@hopital.bj',
    types: ['Sang total', 'Plasma'],
    rdv: 'Sur place / sur rendez-vous',
  },
  {
    name: 'Unité de Transfusion - CHU Départemental du Borgou',
    nature: 'Hôpital universitaire départemental',
    city: 'Parakou',
    addr: 'Route de Malanville, Parakou BP 13',
    region: 'Borgou',
    open: 8,
    close: 16,
    phone: '+229 23 61 36 38',
    email: 'chudb@hopital.bj',
    types: ['Sang total', 'Plasma', 'Plaquettes'],
    rdv: 'Sur place / sur rendez-vous',
  },
  {
    name: 'Unité de Transfusion - Hôpital Saint Jean de Dieu',
    nature: 'Hôpital confessionnel',
    city: 'Tanguiéta',
    addr: 'Borgou, Aire de Tanguiéta (Atacora)',
    region: 'Atacora',
    open: 7,
    close: 17,
    phone: '+229 23 90 70 01',
    email: 'sjd.tanguieta@hsjd.bj',
    types: ['Sang total'],
    rdv: 'Sur place',
  },
  {
    name: 'Unité de Transfusion - CHU Départemental du Zou-Collines',
    nature: 'Hôpital universitaire départemental',
    city: 'Abomey',
    addr: "Avenue de l'indépendance, Abomey",
    region: 'Zou',
    open: 8,
    close: 16,
    phone: '+229 20 50 31 63',
    email: 'chudzc@hopital.bj',
    types: ['Sang total', 'Plasma'],
    rdv: 'Sur place / sur rendez-vous',
  },
  {
    name: "Unité de Transfusion - CHU Départemental de l'Atlantique",
    nature: 'Hôpital universitaire départemental',
    city: 'Ouidah',
    addr: 'Boulevard de la Résistance, Ouidah',
    region: 'Atlantique',
    open: 8,
    close: 16,
    phone: '+229 97 55 10 20',
    email: 'chuda@hopital.bj',
    types: ['Sang total'],
    rdv: 'Sur place',
  },
]

const allTypes = ['Sang total', 'Plasma', 'Plaquettes']

const now = new Date()
const currentHour = now.getHours() + now.getMinutes() / 60

function isOpen(centre) {
  return currentHour >= centre.open && currentHour < centre.close
}

function formatTime(h) {
  const hours = Math.floor(h)
  const minutes = Math.round((h - hours) * 60)
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

export default function OuDonner() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('Tous')
  const [availability, setAvailability] = useState('Tous')

  const filtered = useMemo(() => {
    return centres.filter((centre) => {
      const matchesSearch =
        search.trim() === '' ||
        `${centre.name} ${centre.city} ${centre.region}`
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      const matchesType = typeFilter === 'Tous' || centre.types.includes(typeFilter)
      const open = isOpen(centre)
      const matchesAvailability =
        availability === 'Tous' ||
        (availability === 'Ouvert' && open) ||
        (availability === 'Fermé' && !open)
      return matchesSearch && matchesType && matchesAvailability
    })
  }, [search, typeFilter, availability])

  const selectClass =
    'rounded-full border border-outline bg-surface px-4 py-2.5 text-sm font-medium text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer'

  return (
    <section id="ou-donner" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-10 text-center">
        <p className="font-label-caps text-label-caps text-primary mb-3">06. OÙ DONNER ?</p>
        <h2 className="font-headline-md text-headline-md text-on-background">
          Les établissements de don au Bénin
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
          Recherchez un centre par ville, type de don ou disponibilité, puis filtrez la liste.
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:flex-row gap-3 mb-8 p-4 rounded-2xl bg-surface-container-low"
      >
        <label className="sr-only" htmlFor="recherche-centre">
          Rechercher un centre
        </label>
        <div className="relative flex-1">
          <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" />
          <input
            id="recherche-centre"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom, ville ou région…"
            className="w-full rounded-full border border-outline bg-surface pl-11 pr-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>
        <label className="sr-only" htmlFor="filtre-type">
          Filtrer par type de don
        </label>
        <select
          id="filtre-type"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className={selectClass}
        >
          <option value="Tous">Tous les dons</option>
          {allTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="filtre-disponibilite">
          Filtrer par disponibilité
        </label>
        <select
          id="filtre-disponibilite"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className={selectClass}
        >
          <option value="Tous">Toutes disponibilités</option>
          <option value="Ouvert">Ouvert maintenant</option>
          <option value="Fermé">Fermé</option>
        </select>
      </form>

      <p className="text-sm text-on-surface-variant mb-5" role="status">
        {filtered.length} établissement{filtered.length > 1 ? 's' : ''} affiché
        {filtered.length > 1 ? 's' : ''}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-outline-variant bg-surface-container-low p-8 md:p-14 text-center">
          <p className="font-body-md font-semibold text-on-background">
            Aucun centre ne correspond à vos critères.
          </p>
          <button
            onClick={() => {
              setSearch('')
              setTypeFilter('Tous')
              setAvailability('Tous')
            }}
            className="mt-4 text-primary font-semibold underline underline-offset-4 hover:text-surface-tint"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((centre) => {
            const open = isOpen(centre)
            return (
              <div
                key={centre.name}
                className="rounded-3xl border border-outline-variant bg-surface-container-low p-6 md:p-7 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-background leading-snug">
                      {centre.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold mt-1">
                      {centre.nature} · {centre.city}
                    </p>
                  </div>
                  <span
                    className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full shrink-0 ${
                      open ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-600' : 'bg-red-600'}`}></span>
                    {open ? 'OUVERT' : 'FERMÉ'}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-on-surface-variant flex-1">
                  <p className="flex items-start gap-2.5">
                    <Icon name="location_on" className="text-primary text-lg shrink-0" />
                    <span>
                      {centre.addr}
                      <span className="block text-xs text-on-surface-variant/80">
                        Région {centre.region}
                      </span>
                    </span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Icon name="schedule" className="text-primary text-lg shrink-0" />
                    <span>
                      {formatTime(centre.open)} – {formatTime(centre.close)}
                    </span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Icon name="call" className="text-primary text-lg shrink-0" />
                    <span>{centre.phone}</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <Icon name="mail" className="text-primary text-lg shrink-0" />
                    <span>{centre.email}</span>
                  </p>
                </div>

                <div className="mt-5 pt-5 border-t border-outline-variant space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {centre.types.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold bg-surface-container-high text-on-surface px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                    <Icon name="event_available" className="text-primary text-lg shrink-0" />
                    <span>
                      <span className="font-semibold text-on-background">Accueil : </span>
                      {centre.rdv}
                    </span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
