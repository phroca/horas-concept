import { fleet } from "../data/content"

export function Fleet() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] text-horas-blue uppercase">{fleet.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-horas-ink md:text-4xl">{fleet.title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-horas-muted">{fleet.text}</p>
      </div>
      <img
        src={fleet.image}
        alt="Parc automobile HORAS CONCEPT devant le siège"
        className="h-72 w-full rounded-horas object-cover lg:h-80"
      />
    </div>
  )
}
