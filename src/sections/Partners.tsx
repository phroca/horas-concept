import { partners } from "../data/content"

export function Partners() {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.22em] text-horas-blue uppercase">Ils nous font confiance</p>
      <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {partners.map((item) => (
          <li key={item.src} className="group flex h-16 items-center justify-center">
            <img
              src={item.src}
              alt={item.name}
              className="max-h-12 max-w-full object-contain grayscale opacity-80 transition duration-200 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
