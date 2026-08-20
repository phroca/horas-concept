import { Link } from "react-router-dom"

type LogoProps = {
  inverted?: boolean
  to?: string
}

export function Logo({ inverted = false, to = "/" }: LogoProps) {
  const mark = (
    <>
      <img
        src="/horas-logo.jfif"
        alt=""
        className="h-11 w-11 rounded-[10px] object-cover"
      />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] tracking-wide ${inverted ? "text-white" : "text-horas-blue"}`}
        >
          HORAS
        </span>
        <span
          className={`block font-body text-[0.78rem] font-medium tracking-[0.18em] ${inverted ? "text-white/80" : "text-horas-ink"}`}
        >
          concept
        </span>
      </span>
    </>
  )

  if (!to) {
    return <span className="inline-flex items-center gap-3">{mark}</span>
  }

  return (
    <Link to={to} className="inline-flex items-center gap-3" aria-label="HORAS CONCEPT — Accueil">
      {mark}
    </Link>
  )
}
