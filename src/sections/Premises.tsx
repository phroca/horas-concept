import { premises } from "../data/content"
import { SectionHeading } from "../components/SectionHeading"

export function Premises() {
  return (
    <div>
      <SectionHeading eyebrow={premises.eyebrow} title={premises.title} subtitle={premises.text} />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {premises.images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={index === 0 ? "Bureaux HORAS CONCEPT" : "Locaux HORAS CONCEPT"}
            className="h-64 w-full rounded-horas object-cover"
          />
        ))}
      </div>
    </div>
  )
}
