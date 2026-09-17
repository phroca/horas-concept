import { Navigate, useParams } from "react-router-dom"
import { Badge } from "../components/Badge"
import { getRealisation } from "../data/content"
import { CtaBanner } from "../sections/CtaBanner"
import { PageHero } from "../sections/PageHero"
import { RealisationFiche } from "../sections/RealisationFiche"

export function RealisationPage() {
  const { slug } = useParams()
  const item = slug ? getRealisation(slug) : null

  if (!item) {
    return <Navigate to="/realisations" replace />
  }

  return (
    <>
      <PageHero
        eyebrow="Réalisation"
        title={item.title}
        subtitle={item.subtitle || undefined}
        after={item.location ? <p className="mt-4 text-sm font-medium text-[#8bb4f0]">{item.location}</p> : null}
      >
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge>{item.category}</Badge>
          <Badge tone="ink">{item.real ? "Chantier livré" : "Chantier en cours"}</Badge>
        </div>
      </PageHero>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <RealisationFiche item={item} />
        <div className="mt-12">
          <CtaBanner title="Un projet similaire ?" />
        </div>
      </section>
    </>
  )
}
