import { certifications } from "../data/content"

export function Certifications() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {certifications.map((item) => (
        <article key={item.code} className="rounded-horas border border-horas-line bg-white p-6">
          <p className="font-display text-horas-blue">QUALIBAT {item.code}</p>
          <h3 className="mt-3 text-lg font-semibold text-horas-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-horas-muted">{item.text}</p>
        </article>
      ))}
    </div>
  )
}
