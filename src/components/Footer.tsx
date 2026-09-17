import { Link } from "react-router-dom"
import { company, nav } from "../data/content"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="bg-horas-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Entreprise de BTP spécialisée dans l'aménagement d'espaces professionnels.
            Bureaux, commerces et solutions sur mesure, partout en France.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">Navigation</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">Contact</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-white/80">
            {company.address.street}
            <br />
            {company.address.zip} {company.address.city}
            <br />
            {company.address.region}
            <br />
            <a className="mt-3 inline-block text-white hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            {company.phone ? (
              <>
                <br />
                <a className="mt-1 inline-block text-white/70 hover:text-white" href={company.phoneHref}>
                  Tél. {company.phone}
                </a>
              </>
            ) : null}
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-white">
              Confidentialité
            </Link>
            <a href={company.linkedin} className="hover:text-white" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
