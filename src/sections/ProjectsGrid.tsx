import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Badge } from "../components/Badge"
import { projects } from "../data/content"

export function ProjectsGrid() {
  const categories = useMemo(() => [...new Set(projects.map((item) => item.category))], [])
  const showFilters = categories.length > 1
  const [filter, setFilter] = useState("Tous")

  const visible = useMemo(
    () => (filter === "Tous" ? projects : projects.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <div>
      {showFilters ? (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les réalisations">
          {["Tous", ...categories].map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === item
                  ? "bg-horas-blue text-white"
                  : "bg-white text-horas-ink ring-1 ring-horas-line hover:bg-horas-soft"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}
      <div className={`${showFilters ? "mt-8" : ""} grid gap-6 md:grid-cols-2`}>
        {visible.map((item) => (
          <article key={item.slug} className="overflow-hidden rounded-horas border border-horas-line bg-white">
            <Link to={`/realisations/${item.slug}`} className="block">
              <img src={item.image} alt="" className="h-56 w-full object-cover" />
            </Link>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{item.category}</Badge>
                {item.real ? <Badge tone="ink">Chantier livré</Badge> : <Badge tone="ink">Chantier en cours</Badge>}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-horas-ink">
                <Link to={`/realisations/${item.slug}`} className="hover:text-horas-blue">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-horas-blue">{item.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-horas-muted">{item.text}</p>
              {!item.real ? (
                <p className="mt-3 text-xs text-horas-muted">
                  Visuel d'exemple — à remplacer par une photo de chantier HORAS CONCEPT.
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
