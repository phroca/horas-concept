import { company, images, whyUs } from "../data/content"

export function AboutStory() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <img
        src={images.site}
        alt="Chantier d'aménagement intérieur"
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
          HORAS CONCEPT est une entreprise de BTP spécialisée dans l'aménagement d'espaces
          professionnels, basée à {company.address.city}. Notre mission : transformer vos
          espaces de travail en environnements inspirants, fonctionnels et respectueux de
          l'environnement.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-horas-muted">
          De 2 à 10 collaborateurs, nous restons proches des chantiers et des clients — avec
          une organisation capable d'intervenir partout en France.
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
