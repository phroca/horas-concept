import { homeServices, specialties } from "../data/content"

type ServicesGridProps = {
  variant?: "home" | "full"
}

export function ServicesGrid({ variant = "home" }: ServicesGridProps) {
  if (variant === "full") {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {specialties.map((item, index) => (
          <article
            key={item.title}
            className="rounded-horas border border-horas-line bg-white p-6"
          >
            <span className="font-display text-sm text-horas-blue">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-horas-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-horas-muted">{item.text}</p>
          </article>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {homeServices.map((item) => (
        <article key={item.title} className="overflow-hidden rounded-horas border border-horas-line bg-white">
          <img src={item.image} alt="" className="h-52 w-full object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-horas-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-horas-muted">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
