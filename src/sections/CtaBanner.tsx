import { Button } from "../components/Button"
import { company } from "../data/content"

type CtaBannerProps = {
  title?: string
  text?: string
}

export function CtaBanner({
  title = "Un projet d'aménagement ?",
  text = "Parlons de vos espaces, de vos contraintes de site et de vos délais. Nous intervenons partout en France.",
}: CtaBannerProps) {
  return (
    <section className="rounded-horas bg-horas-blue px-6 py-10 text-white md:flex md:items-center md:justify-between md:px-10">
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{text}</p>
      </div>
      <div className="mt-6 flex flex-col items-start gap-3 md:mt-0 md:items-end">
        <Button to="/contact" variant="white">
          Demander un devis
        </Button>
        <a href={`mailto:${company.email}`} className="text-sm text-white/85 hover:text-white">
          {company.email}
        </a>
      </div>
    </section>
  )
}
