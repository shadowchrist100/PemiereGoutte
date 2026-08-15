import { useState } from 'react'
import Icon from './Icon'

const MIN_AGE = 18
const MAX_AGE = 70
const MIN_WEIGHT = 50
const DELAI_HOMME_JOURS = 90
const DELAI_FEMME_JOURS = 120

const fieldClass =
  'w-full rounded-xl border border-outline bg-surface px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
const fieldErrorClass =
  'w-full rounded-xl border-2 border-red-500 bg-red-50/40 px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500'

export default function SimulateurEligibilite() {
  const [sexe, setSexe] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [lastDon, setLastDon] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  function compute() {
    setErrors({})
    const nextErrors = {}
    const reasons = []
    let nextEligible = null
    let delayDays = null

    if (!sexe) nextErrors.sexe = 'Veuillez sélectionner votre sexe.'

    const ageNum = Number(age)
    if (age === '' || Number.isNaN(ageNum)) {
      nextErrors.age = 'Veuillez indiquer votre âge.'
    } else if (ageNum < MIN_AGE) {
      nextErrors.age = `\u00c2ge minimum requis : ${MIN_AGE} ans.`
      reasons.push(`Vous devez avoir au moins ${MIN_AGE} ans pour donner votre sang.`)
    } else if (ageNum > MAX_AGE) {
      nextErrors.age = `Don possible jusqu'à ${MAX_AGE} ans selon le centre.`
      reasons.push(`Le don est possible jusqu'à ${MAX_AGE} ans, selon le centre.`)
    }

    const weightNum = Number(weight)
    if (weight === '' || Number.isNaN(weightNum)) {
      nextErrors.weight = 'Veuillez indiquer votre poids.'
    } else if (weightNum < MIN_WEIGHT) {
      nextErrors.weight = `Poids minimum requis : ${MIN_WEIGHT} kg.`
      reasons.push(`Votre poids doit être d'au moins ${MIN_WEIGHT} kg.`)
    }

    if (sexe === 'homme') delayDays = DELAI_HOMME_JOURS
    else if (sexe === 'femme') delayDays = DELAI_FEMME_JOURS

    if (lastDon && delayDays) {
      const last = new Date(lastDon)
      if (Number.isNaN(last.getTime())) {
        nextErrors.lastDon = 'Date invalide.'
      } else {
        const diff = Math.floor((Date.now() - last.getTime()) / (1000 * 60 * 60 * 24))
        if (diff < delayDays) {
          const next = new Date(last.getTime() + delayDays * 24 * 60 * 60 * 1000)
          nextEligible = next.toLocaleDateString('fr-FR')
          const mois = sexe === 'homme' ? 3 : 4
          const genre = sexe === 'homme' ? 'un homme' : 'une femme'
          reasons.push(
            `Votre dernier don est trop récent (${diff} jours). Un délai d'au moins ${mois} mois est requis entre deux dons pour ${genre}.`
          )
        }
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setResult({ state: 'invalid', reasons: Object.values(nextErrors) })
      return
    }

    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setLoading(false)
      const eligible = reasons.length === 0
      setResult({ eligible, reasons, nextEligible })
    }, 700)
  }

  const showResult = !loading && result !== null

  return (
    <section id="simulateur" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-10 text-center">
        <p className="font-label-caps text-label-caps text-primary mb-3">03. TEST DE PRÉ-ÉLIGIBILITÉ</p>
        <h2 className="font-headline-md text-headline-md text-on-background">
          Simulez votre éligibilité au don de sang
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">
          Répondez à quelques questions simples. Ce test est indicatif : la décision finale revient
          toujours au médecin de l'établissement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault()
            compute()
          }}
          className="rounded-3xl border border-outline-variant bg-surface-container-low p-6 md:p-8 space-y-6"
        >
          <div>
            <label htmlFor="sexe" className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
              SEXE
            </label>
            <select
              id="sexe"
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
              className={errors.sexe ? fieldErrorClass : fieldClass}
              aria-invalid={!!errors.sexe}
            >
              <option value="">— Sélectionnez —</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </select>
            {errors.sexe && (
              <p className="mt-1.5 text-sm text-red-600 font-medium" role="alert">
                {errors.sexe}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="age" className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
              ÂGE
            </label>
            <input
              id="age"
              type="number"
              min="0"
              max="120"
              inputMode="numeric"
              placeholder="Ex : 25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={errors.age ? fieldErrorClass : fieldClass}
              aria-invalid={!!errors.age}
            />
            {errors.age && (
              <p className="mt-1.5 text-sm text-red-600 font-medium" role="alert">
                {errors.age}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="poids" className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
              POIDS (KG)
            </label>
            <input
              id="poids"
              type="number"
              min="0"
              inputMode="decimal"
              step="0.1"
              placeholder="Ex : 62"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={errors.weight ? fieldErrorClass : fieldClass}
              aria-invalid={!!errors.weight}
            />
            {errors.weight && (
              <p className="mt-1.5 text-sm text-red-600 font-medium" role="alert">
                {errors.weight}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="date-don" className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
              DATE DE VOTRE DERNIER DON
            </label>
            <input
              id="date-don"
              type="date"
              value={lastDon}
              onChange={(e) => setLastDon(e.target.value)}
              className={errors.lastDon ? fieldErrorClass : fieldClass}
              aria-invalid={!!errors.lastDon}
            />
            <p className="text-xs text-on-surface-variant mt-2">
              Laissez vide si vous n'avez jamais donné. Délai minimum entre deux dons :{' '}
              <span className="font-semibold">3 mois (homme)</span>,{' '}
              <span className="font-semibold">4 mois (femme)</span>.
            </p>
            {errors.lastDon && (
              <p className="mt-1.5 text-sm text-red-600 font-medium" role="alert">
                {errors.lastDon}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary font-body-md text-body-md font-bold px-8 py-4 rounded-full hover:bg-surface-tint transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Vérification en cours…' : 'Vérifier mon éligibilité'}
          </button>
        </form>

        <div
          className={`rounded-3xl border p-8 ${
            result?.state === 'invalid'
              ? 'border-amber-300 bg-amber-50'
              : !showResult
                ? 'border-outline-variant bg-surface-container-low'
                : result.eligible
                  ? 'border-green-300 bg-green-50'
                  : 'border-red-300 bg-red-50'
          }`}
      >
          {loading ? (
            <div className="text-center py-10" role="status" aria-live="polite">
              <div className="w-12 h-12 mx-auto rounded-full border-4 border-primary border-t-transparent animate-spin mb-4"></div>
              <p className="font-body-md font-semibold text-on-background">
                Analyse de vos informations…
              </p>
              <p className="text-on-surface-variant text-sm mt-2">
                Merci de patienter un instant.
              </p>
            </div>
          ) : !showResult ? (
            <div className="text-center py-10">
              <Icon name="bloodtype" className="text-5xl text-primary mx-auto mb-4" />
              <p className="font-body-md font-semibold text-on-background">
                Votre résultat s'affichera ici.
              </p>
              <p className="text-on-surface-variant text-sm mt-2 max-w-sm mx-auto">
                Renseignez vos informations puis cliquez sur « Vérifier mon éligibilité ».
              </p>
            </div>
          ) : result.state === 'invalid' ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <Icon name="edit_off" className="text-white text-2xl" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-amber-700">
                  Merci de corriger le formulaire
                </h3>
              </div>
              <ul className="space-y-3 mt-4">
                {result.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-amber-800 text-body-md">
                    <Icon name="error" className="text-amber-500 text-lg shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : result.eligible ? (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-4">
                <Icon name="check" className="text-white text-3xl" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-green-700">
                Vous êtes pré-éligible !
              </h3>
              <p className="text-on-surface-variant text-body-md mt-3">
                D'après vos informations, vous pouvez envisager un don. Présentez-vous dans un centre
                pour la confirmation médicale finale.
              </p>
              <a
                href="#ou-donner"
                className="inline-block mt-6 bg-primary text-on-primary font-body-md font-bold px-8 py-3.5 rounded-full hover:bg-surface-tint transition-colors"
              >
                Trouver un centre
              </a>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <Icon name="close" className="text-white text-2xl" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-red-700">
                  Non éligible pour le moment
                </h3>
              </div>
              <ul className="space-y-3 mt-4">
                {result.reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-red-800 text-body-md">
                    <Icon name="error" className="text-red-500 text-lg shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
              {result.nextEligible && (
                <div className="mt-5 rounded-xl bg-white/70 border border-red-200 p-4 text-sm">
                  <span className="font-bold text-red-700">Prochaine éligibilité possible : </span>
                  <span className="text-red-800">{result.nextEligible}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
