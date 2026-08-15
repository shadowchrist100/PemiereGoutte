const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAvYj9VyjBMWuAugJD-jRtKv9cHxNoxowXw6tNAvAk6aokSAkK1WnzPqD2QX8J1YENAdu6CRqapWaZjgh0m_iIFoT9Fw8o8MNZMOb-oFbzDb6TGLwr8Aw5LutQDS6mCBNTEXdmBeSGL0UaKiHd0r895izYJs1y2npOABU5_cFhtiYDOi4kZcs234mN1km2VSPw-l2StP1dzEKzZ41Gw1iltyqU11iWeVfvX4CUrZa2wFqCcI5nSPZ0R'

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-68px)] overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
        <img
          alt="Personne souriante regardant au loin avec espoir"
          className="h-full w-full object-cover object-top"
          src={heroImage}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-68px)] max-w-container-max items-center px-margin-mobile py-10 md:px-margin-desktop md:py-14">
        <div className="w-full space-y-6 md:w-[67%] md:space-y-8">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background">
            Votre sang peut permettre à quelqu'un de continuer{' '}
            <span className="text-primary italic">son histoire.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Chaque jour, des patients ont besoin de sang pour être soignés. Un don peut faire toute la
            différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#parcours"
              className="bg-primary text-on-primary font-body-md text-body-md font-bold px-8 py-4 rounded-full hover:bg-surface-tint transition-colors text-center shadow-sm"
            >
              Découvrir si je peux donner
            </a>
            <button className="bg-transparent border border-outline text-on-surface font-body-md text-body-md font-bold px-8 py-4 rounded-full hover:bg-surface-container transition-colors text-center">
              Voir comment ça se passe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
