type BadgeProps = {
  children: string
  tone?: "blue" | "ink" | "white"
}

const tones = {
  blue: "bg-horas-blue text-white",
  ink: "bg-horas-ink text-white",
  white: "bg-white text-horas-ink",
}

export function Badge({ children, tone = "blue" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
