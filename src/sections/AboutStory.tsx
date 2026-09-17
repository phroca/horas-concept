import { aboutStory, company, premises, whyUs } from "../data/content"

export function AboutStory() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <img
        src={premises.images[0]}
        alt="Bureaux HORAS CONCEPT"
        className="h-80 w-full rounded-horas object-cover lg:sticky lg:top-24 lg:h-[28rem]"
      />
      <div>
        <p className="text-xs font-semibold tracking-[0.22em] text-horas-blue uppercase">
          Fondée en {company.founded}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-horas-ink md:text-4xl">{aboutStory.title}</h2>
        {aboutStory.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-sm leading-relaxed text-horas-muted">
            {paragraph}
          </p>
        ))}
        <h3 className="mt-8 text-sm font-semibold text-horas-ink">{aboutStory.offerTitle}</h3>
        <ul className="mt-3 space-y-2">
          {aboutStory.offer.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-relaxed text-horas-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-horas-blue" />
              {item}
            </li>
          ))}
        </ul>
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
