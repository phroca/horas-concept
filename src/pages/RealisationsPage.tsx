import { SectionHeading } from "../components/SectionHeading"
import { CtaBanner } from "../sections/CtaBanner"
import { FeaturedProject } from "../sections/FeaturedProject"
import { PageHero } from "../sections/PageHero"
import { ProjectsGrid } from "../sections/ProjectsGrid"

export function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des chantiers livrés, des typologies maîtrisées."
        subtitle="Cinq réalisations tertiaire public : Finances publiques et Douanes, en site occupé ou inoccupé."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FeaturedProject />
        <div className="mt-16">
          <SectionHeading
            eyebrow="Portfolio"
            title="Sélection de projets"
            subtitle="Photos et descriptifs fournis par HORAS CONCEPT. D'autres chantiers suivront."
          />
          <div className="mt-8">
            <ProjectsGrid />
          </div>
        </div>
        <div className="mt-12">
          <CtaBanner title="Votre prochain chantier ?" />
        </div>
      </section>
    </>
  )
}
