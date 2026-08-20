export function EcoBand() {
  return (
    <section className="rounded-horas bg-horas-ink px-6 py-10 text-white md:px-10">
      <p className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
        Engagement écologique
      </p>
      <h2 className="mt-3 max-w-2xl text-2xl font-semibold md:text-3xl">
        Des espaces performants, des matériaux durables, une mobilité plus responsable.
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Matériaux durables</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Choix de matériaux écologiques et durables sur l'ensemble de nos projets.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Efficacité énergétique</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Conception d'espaces optimisés pour réduire la consommation d'énergie — mention RGE.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Flotte électrique</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Intervenir vite, partout en France, tout en limitant notre impact environnemental.
          </p>
        </div>
      </div>
    </section>
  )
}
