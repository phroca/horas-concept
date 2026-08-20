type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-horas-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.22em] text-white/60 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}
