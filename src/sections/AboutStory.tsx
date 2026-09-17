import { company, premises, whyUs } from "../data/content"

export function AboutStory() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <img
        src={premises.images[0]}
        alt="Bureaux HORAS CONCEPT"
        className="h-80 w-full rounded-horas object-cover lg:h-[28rem]"
      />
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] text-horas-blue uppercase">
          Fondée en {company.founded}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-horas-ink md:text-4xl">
          Une entreprise à taille humaine, exigeante sur le terrain.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-horas-muted">
          HORAS CONCEPT aménage les espaces professionnels partout en France : cloisons,
          faux-plafonds, sols, peinture, carrelage et menuiseries. Notre mission : des
          espaces fonctionnels, durables, livrés dans les règles de l'art.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-horas-muted">
          Dix collaborateurs pilotent les appels d'offres, coordonnent les lots et
          exécutent les travaux — y compris en site occupé.
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {whyUs.map((item) => (
            <div key={item.title}>
              <dt className="text-sm font-semibold text-horas-ink">{item.title}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-horas-muted">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
