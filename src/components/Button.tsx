import { Link } from "react-router-dom"
import type { ReactNode } from "react"

type Variant = "primary" | "dark" | "outline" | "white"

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  type?: "button" | "submit"
  variant?: Variant
  className?: string
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary:
    "bg-horas-blue text-white hover:bg-horas-blue-dark",
  dark: "bg-horas-ink text-white hover:bg-black",
  outline:
    "border border-white/70 bg-transparent text-white hover:bg-white hover:text-horas-ink",
  white: "bg-white text-horas-ink hover:bg-horas-soft",
}

export function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-horas-sm px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
