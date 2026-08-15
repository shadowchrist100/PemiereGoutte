const links = [
  { label: 'POURQUOI DONNER ?', href: '#pourquoi' },
  { label: 'QUI PEUT DONNER ?', href: '#eligibility' },
  { label: 'COMMENT ÇA SE PASSE ?', href: '#parcours' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-surface">
      <div className="w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
        <a
          href="#"
          className="flex items-center gap-2 font-display-lg-mobile text-display-lg-mobile text-primary font-bold tracking-tight"
        >
          <span className="material-symbols-outlined text-[28px] text-primary">favorite</span>
          Don de Sang
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="bg-primary text-on-primary font-body-md text-body-md font-bold px-6 py-3 rounded-full hover:bg-surface-tint transition-colors duration-200">
          Vérifier mon éligibilité
        </button>
      </div>
    </nav>
  )
}
