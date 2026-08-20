import { values } from "../data/content"

type ValueItem = { title: string; text: string }

type ValuesProps = {
  items?: readonly ValueItem[]
}

export function Values({ items = values }: ValuesProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-horas border border-horas-line bg-white p-6">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-horas-blue" />
          <h3 className="text-lg font-semibold text-horas-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-horas-muted">{item.text}</p>
        </article>
      ))}
    </div>
  )
}
