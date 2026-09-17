import { Link } from "react-router-dom"
import { Badge } from "../components/Badge"
import { Button } from "../components/Button"
import { featuredProject } from "../data/content"

export function FeaturedProject() {
  return (
    <section className="overflow-hidden rounded-horas bg-horas-ink text-white lg:grid lg:grid-cols-2">
      <Link to={`/realisations/${featuredProject.slug}`} className="block">
        <img
          src={featuredProject.image}
          alt={featuredProject.title}
          className="h-72 w-full object-cover lg:h-full"
        />
      </Link>
      <div className="p-8 md:p-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-white/60 uppercase">
          {featuredProject.eyebrow}
        </p>
        <div className="mt-3">
          <Badge tone="blue">{featuredProject.category}</Badge>
        </div>
        <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
          <Link to={`/realisations/${featuredProject.slug}`} className="hover:underline">
            {featuredProject.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-white/80">{featuredProject.subtitle}</p>
        <p className="mt-5 text-sm leading-relaxed text-white/70">{featuredProject.context}</p>
        <ul className="mt-5 space-y-2 text-sm text-white/85">
          {featuredProject.lots.map((lot) => (
            <li key={lot} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-horas-blue" />
              {lot}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-white/50">{featuredProject.client}</p>
        <div className="mt-6">
          <Button to="/realisations" variant="white">
            Toutes les réalisations
          </Button>
        </div>
      </div>
    </section>
  )
}
