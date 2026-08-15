const infoLinks = [
  { label: 'Pourquoi donner', href: '#why' },
  { label: 'Qui peut donner ?', href: '#eligibility' },
  { label: 'Comment ça se passe', href: '#steps' },
  { label: 'Où donner', href: '#top' },
  { label: 'État des réserves', href: '#top' },
]

const helpLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Idées reçues', href: '#faq' },
  { label: 'Contact', href: '#top' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '#top' },
  { label: 'Politique de confidentialité', href: '#top' },
]

function LinkColumn({ title, links }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <h4 className="mb-1 font-label-caps text-[10px] uppercase tracking-[.07em] text-[#bca8a5]">
        {title}
      </h4>
      {links.map((link) => (
        <a key={link.label} href={link.href} className="text-xs transition-colors hover:text-primary">
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#2b0e0d] px-margin-mobile py-12 text-white md:px-margin-desktop md:py-16">
      <div className="mx-auto flex max-w-container-max flex-col items-start justify-between gap-10 md:flex-row md:gap-20">
        <div className="flex min-w-[210px] flex-col gap-4">
          <a className="flex items-center gap-2 font-body-md text-[27px] font-bold text-white" href="#top">
            <span className="text-[30px] text-primary">&#9829;</span> Don de Sang
          </a>
          <p className="font-body-md text-xs text-[#d9c8c5]">Ensemble, sauvons des vies.</p>
          <small className="mt-7 font-body-md text-[10px] text-[#bca8a5]">
            &copy; 2024 Don de Sang. Tous droits réservés.
          </small>
        </div>
        <div className="grid w-full flex-1 grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-[1.4fr_1fr_1.15fr_1fr] md:gap-11">
          <LinkColumn title="Informations" links={infoLinks} />
          <LinkColumn title="Aide" links={helpLinks} />
          <LinkColumn title="Légal" links={legalLinks} />
          <div className="flex flex-col items-start gap-3">
            <h4 className="mb-1 font-label-caps text-[10px] uppercase tracking-[.07em] text-[#bca8a5]">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              <a aria-label="Facebook" className="text-lg font-bold transition-colors hover:text-primary" href="#top">
                f
              </a>
              <a aria-label="X" className="text-lg font-bold transition-colors hover:text-primary" href="#top">
                &#120137;
              </a>
              <a aria-label="Instagram" className="text-xl font-bold leading-none transition-colors hover:text-primary" href="#top">
                &#9678;
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
