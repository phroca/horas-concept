import { processSteps } from "../data/content"

type Step = { step: string; title: string; text: string }

type ProcessProps = {
  steps?: readonly Step[]
}

export function Process({ steps = processSteps }: ProcessProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((item) => (
        <li key={item.step} className="rounded-horas bg-white p-6">
          <span className="font-display text-horas-blue">{item.step}</span>
          <h3 className="mt-3 text-lg font-semibold text-horas-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-horas-muted">{item.text}</p>
        </li>
      ))}
    </ol>
  )
}
