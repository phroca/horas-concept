import { CtaBanner } from "../sections/CtaBanner"
import { Jobs } from "../sections/Jobs"
import { PageHero } from "../sections/PageHero"

export function RecrutementPage() {
  return (
    <>
      <PageHero
        eyebrow="Recrutement"
        title="Rejoignez une belle équipe, sur le terrain."
        subtitle="Entreprise à taille humaine, projets exigeants, environnement où la rigueur et l'humain vont de pair."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Jobs />
        <div className="mt-10">
          <CtaBanner
            title="Une question sur une offre ?"
            text="Écrivez-nous : nous répondons à chaque candidature."
          />
        </div>
      </section>
    </>
  )
}
