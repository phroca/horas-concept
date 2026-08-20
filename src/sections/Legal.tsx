import type { ReactNode } from "react"

type LegalProps = {
  title: string
  children: ReactNode
}

export function Legal({ title, children }: LegalProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-semibold tracking-tight text-horas-ink">{title}</h1>
      <div className="horas-legal-prose mt-8 space-y-5 text-sm leading-relaxed text-horas-muted [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-horas-ink [&_strong]:text-horas-ink">
        {children}
      </div>
    </article>
  )
}
