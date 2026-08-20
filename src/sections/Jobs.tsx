import { Badge } from "../components/Badge"
import { Button } from "../components/Button"
import { company, jobs } from "../data/content"

export function Jobs() {
  const job = jobs[0]

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <article className="rounded-horas border border-horas-line bg-white p-7">
        <div className="inline-flex rounded-full bg-horas-blue px-4 py-2 text-sm font-semibold text-white">
          On recrute !
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Badge tone="ink">{job.contract}</Badge>
          <span className="text-sm text-horas-muted">{job.location}</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-horas-ink">{job.title}</h2>
        <ul className="mt-6 space-y-4">
          {job.pillars.map((pillar) => (
            <li key={pillar.title} className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-horas-blue" />
              <div>
                <p className="font-semibold text-horas-ink">{pillar.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-horas-muted">{pillar.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="mt-8 text-sm font-semibold tracking-wide text-horas-ink uppercase">
          Profil recherché
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-horas-muted">
          {job.profile.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>
        <div className="mt-8 rounded-horas-sm bg-horas-blue p-5 text-white">
          <p className="text-sm font-medium">Envoyez-nous vite votre CV à :</p>
          <Button href={`mailto:${company.email}`} variant="dark" className="mt-3">
            {company.email}
          </Button>
        </div>
      </article>

      <article className="rounded-horas bg-horas-ink p-7 text-white">
        <h2 className="text-2xl font-semibold">Candidature spontanée</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Vous ne trouvez pas l'offre qui correspond ? HORAS CONCEPT grandit. Conducteurs de
          travaux, chefs d'équipe, compagnons second œuvre : parlez-nous de vous.
        </p>
        <h3 className="mt-8 text-sm font-semibold tracking-wide text-white/60 uppercase">
          Pourquoi nous rejoindre
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-white/80">
          {job.perks.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-horas-blue" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href={`mailto:${company.email}?subject=Candidature%20spontanée`} variant="white">
            Postuler
          </Button>
        </div>
      </article>
    </div>
  )
}
