import { Button } from "../components/Button"
import { company, images } from "../data/content"

type HeroProps = {
  title?: string
  subtitle?: string
  image?: string
}

export function Hero({
  title = company.tagline,
  subtitle = "Aménagement d'espaces professionnels : bureaux, commerces et second œuvre, avec exigence, réactivité et engagement environnemental.",
  image = images.hero,
}: HeroProps) {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-horas-ink text-white">
      <img
        src={image}
        alt="Espace de travail tertiaire aménagé"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horas-ink/90 via-horas-ink/75 to-horas-ink/35" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 py-24">
        <p className="text-xs font-semibold tracking-[0.28em] text-white/70 uppercase">
          Second œuvre · Aménagement intérieur
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-tight font-semibold md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/contact">Demander un devis</Button>
          <Button to="/realisations" variant="outline">
            Voir nos réalisations
          </Button>
        </div>
      </div>
    </section>
  )
}
