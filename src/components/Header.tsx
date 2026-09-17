import { useState } from "react"
import { NavLink } from "react-router-dom"
import { company, nav } from "../data/content"
import { Button } from "./Button"
import { Logo } from "./Logo"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-horas-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-horas-soft text-horas-blue" : "text-horas-ink hover:bg-horas-soft"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={company.phoneHref} className="text-sm font-semibold text-horas-ink hover:text-horas-blue">
            {company.phone}
          </a>
          <Button to="/contact">Demander un devis</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-horas-sm border border-horas-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="block h-0.5 bg-horas-ink" />
            <span className="block h-0.5 bg-horas-ink" />
            <span className="block h-0.5 bg-horas-ink" />
          </span>
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-horas-line bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium ${
                    isActive ? "bg-horas-soft text-horas-blue" : "text-horas-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4">
            <Button to="/contact" className="w-full" onClick={() => setOpen(false)}>
              Demander un devis
            </Button>
          </div>
          <p className="mt-3 text-center text-xs text-horas-muted">
            <a href={company.phoneHref} className="font-medium text-horas-ink">
              {company.phone}
            </a>
            <span className="mx-2 text-horas-line">·</span>
            {company.email}
          </p>
        </div>
      ) : null}
    </header>
  )
}
