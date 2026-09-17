import { useState } from "react"
import { Button } from "../components/Button"
import type { getRealisation } from "../data/content"

type Item = NonNullable<ReturnType<typeof getRealisation>>

export function RealisationFiche({ item }: { item: Item }) {
  const [index, setIndex] = useState(0)
  const images = item.gallery
  const current = images[index] ?? images[0]

  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div className="overflow-hidden rounded-horas bg-horas-ink">
        <img src={current} alt={item.title} className="h-[26rem] w-full object-cover" />
        {images.length > 1 ? (
          <div className="flex gap-2 p-3">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-16 w-20 overflow-hidden rounded-md ring-2 ${
                  i === index ? "ring-horas-blue" : "ring-transparent"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <p className="text-sm leading-relaxed text-horas-muted">{item.context}</p>
        {item.lots.length ? (
          <>
            <h2 className="mt-8 text-lg font-semibold text-horas-ink">Lots réalisés</h2>
            <ul className="mt-3 space-y-2 text-sm text-horas-ink">
              {item.lots.map((lot) => (
                <li key={lot} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-horas-blue" />
                  {lot}
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {item.client ? <p className="mt-6 text-xs text-horas-muted">{item.client}</p> : null}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button to="/contact">Demander un devis</Button>
          <Button to="/realisations" variant="primary" className="bg-transparent px-0 text-horas-blue hover:bg-transparent hover:underline">
            Toutes les réalisations
          </Button>
        </div>
      </div>
    </div>
  )
}