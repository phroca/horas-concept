import { trustItems } from "../data/content"

type TrustItem = { label: string; value: string }

type TrustBarProps = {
  items?: readonly TrustItem[]
}

export function TrustBar({ items = trustItems }: TrustBarProps) {
  return (
    <section className="border-b border-horas-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-semibold tracking-[0.18em] text-horas-blue uppercase">
              {item.label}
            </p>
            <p className="mt-1 text-sm font-medium text-horas-ink">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
