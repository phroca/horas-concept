import { SectionHeading } from "../components/SectionHeading"
import { Certifications } from "../sections/Certifications"
import { CtaBanner } from "../sections/CtaBanner"
import { PageHero } from "../sections/PageHero"
import { Process } from "../sections/Process"
import { ServicesGrid } from "../sections/ServicesGrid"

export function SavoirFairePage() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title="Le second œuvre, de la préparation à la finition."
        subtitle="Curage, cloisons, plafonds, sols, peinture, carrelage et menuiseries intérieures — pour des espaces professionnels durables."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading
          eyebrow="Expertises"
          title="Neuf métiers, une coordination unique"
          subtitle="Des qualifications QUALIBAT et une exécution adaptée aux sites occupés."
        />
        <div className="mt-10">
          <ServicesGrid variant="full" />
        </div>
      </section>
      <section className="bg-horas-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading
            eyebrow="Méthode"
            title="Un process clair, du premier échange à la livraison"
          />
          <div className="mt-10">
            <Process />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading
          eyebrow="Qualifications"
          title="QUALIBAT et mention RGE"
          subtitle="Une reconnaissance de la qualité de notre savoir-faire et de la fiabilité de nos interventions."
        />
        <div className="mt-10">
          <Certifications />
        </div>
        <div className="mt-10">
          <CtaBanner
            title="Besoin d'un lot architectural ?"
            text="Cloisons, plafonds, sols, finitions : nous dimensionnons l'intervention à votre planning de site."
          />
        </div>
      </section>
    </>
  )
}
