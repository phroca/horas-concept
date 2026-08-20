type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.22em] uppercase ${light ? "text-white/70" : "text-horas-blue"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl ${light ? "text-white" : "text-horas-ink"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-horas-muted"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
