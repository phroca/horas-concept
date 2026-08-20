import { Contact } from "../sections/Contact"
import { PageHero } from "../sections/PageHero"

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre espace."
        subtitle="Devis, visite de site, question technique : une seule adresse, une équipe réactive."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Contact />
      </section>
    </>
  )
}
