import { SectionHeading } from "../components/SectionHeading"
import { AboutStory } from "../sections/AboutStory"
import { Certifications } from "../sections/Certifications"
import { CtaBanner } from "../sections/CtaBanner"
import { EcoBand } from "../sections/EcoBand"
import { PageHero } from "../sections/PageHero"
import { Partners } from "../sections/Partners"
import { Premises } from "../sections/Premises"
import { Team } from "../sections/Team"
import { Values } from "../sections/Values"

export function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="HORAS CONCEPT, l'aménagement professionnel exigeant."
        subtitle="Intervention partout en France. Entreprise fondée en 2024."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <AboutStory />
      </section>
      <section className="bg-horas-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Premises />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Team />
      </section>
      <section className="bg-horas-soft">
        <div className="mx-auto max-w-6xl px-5 pb-4 pt-16 md:pt-20">
          <Partners />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="Valeurs" title="Ce qui guide chaque chantier" />
          <div className="mt-10">
            <Values />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading eyebrow="Certifications" title="QUALIBAT · RGE" />
        <div className="mt-10">
          <Certifications />
        </div>
        <div className="mt-10">
          <EcoBand />
        </div>
        <div className="mt-6">
          <CtaBanner title="Discutons de votre projet" />
        </div>
      </section>
    </>
  )
}
