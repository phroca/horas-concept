import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { SectionHeading } from "../components/SectionHeading"
import { CtaBanner } from "../sections/CtaBanner"
import { EcoBand } from "../sections/EcoBand"
import { FeaturedProject } from "../sections/FeaturedProject"
import { Hero } from "../sections/Hero"
import { ServicesGrid } from "../sections/ServicesGrid"
import { TrustBar } from "../sections/TrustBar"
import { Values } from "../sections/Values"

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <section className="bg-horas-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Savoir-faire"
              title="Transformer les espaces professionnels"
              subtitle="Conception et réalisation d'aménagements intérieurs pour le tertiaire, le commerce et les sites publics."
            />
            <Button to="/savoir-faire" variant="dark">
              Toutes les expertises
            </Button>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FeaturedProject />
      </section>
      <section className="bg-horas-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading
            eyebrow="Notre approche"
            title="Trois piliers, un seul niveau d'exigence"
            subtitle="Écoute, design durable, qualité et sécurité : le cadre de chaque intervention HORAS CONCEPT."
          />
          <div className="mt-10">
            <Values />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <EcoBand />
        <div className="mt-6">
          <CtaBanner />
        </div>
        <p className="mt-6 text-center text-sm text-horas-muted">
          En savoir plus sur{" "}
          <Link to="/a-propos" className="font-medium text-horas-blue hover:underline">
            l'entreprise
          </Link>
          .
        </p>
      </section>
    </>
  )
}
