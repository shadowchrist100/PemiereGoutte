export default function Hero() {
  return (
    <section className="relative isolate w-full min-h-[calc(100svh-68px)]">
      <div className="absolute inset-0 -z-10">
        <img
          alt="Personne souriante regardant au loin avec espoir"
          className="h-full w-full object-cover"
          src="/hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-68px)] max-w-container-max items-center px-margin-mobile py-12 md:px-margin-desktop md:py-16">
        <div className="w-full max-w-2xl space-y-7 md:space-y-9">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white drop-shadow-sm">
            Votre sang peut permettre à quelqu'un de continuer{' '}
            <span className="text-primary italic">son histoire.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 max-w-2xl">
            Chaque jour, des patients ont besoin de sang pour être soignés. Un don peut faire toute la
            différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#simulateur"
              className="bg-primary text-on-primary font-body-md text-body-md font-bold px-8 py-4 rounded-full hover:bg-surface-tint transition-colors text-center shadow-sm sm:inline-block"
            >
              Découvrir si je peux donner
            </a>
            <a
              href="#parcours"
              className="bg-white text-on-background border border-white/40 font-body-md text-body-md font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors text-center shadow-sm inline-block"
            >
              Voir comment ça se passe
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
