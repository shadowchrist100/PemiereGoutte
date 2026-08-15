import { useState } from 'react'
import Icon from './Icon'

const links = [
  { label: 'SE PRÉPARER', href: '#preparation' },
  { label: 'OÙ DONNER', href: '#ou-donner' },
  { label: 'RÉSERVES', href: '#reserves' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-surface border-b border-outline-variant/60">
      <div className="w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3">
        <a
          href="#contenu"
          className="flex items-center gap-2 font-display-lg-mobile text-display-lg-mobile text-primary font-bold tracking-tight text-[30px] md:text-[36px] whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[28px] text-primary shrink-0">favorite</span>
          Première goutte
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

        <div className="hidden md:block">
          <a
            href="#simulateur"
            className="bg-primary text-on-primary font-body-md text-body-md font-bold px-6 py-3 rounded-full hover:bg-surface-tint transition-colors duration-200 whitespace-nowrap"
          >
            Vérifier mon éligibilité
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full hover:bg-surface-container transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Icon name={open ? 'close' : 'menu'} className="text-on-surface text-[28px]" />
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="md:hidden bg-surface border-t border-outline-variant/60 px-margin-mobile py-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-surface-container"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#simulateur"
            onClick={() => setOpen(false)}
            className="block mt-3 bg-primary text-on-primary font-body-md text-body-md font-bold px-6 py-3.5 rounded-full hover:bg-surface-tint transition-colors text-center"
          >
            Vérifier mon éligibilité
          </a>
        </div>
      )}
    </nav>
  )
}
