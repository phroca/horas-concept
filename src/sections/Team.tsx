import { teamGroups, teamIntro } from "../data/content"
import { SectionHeading } from "../components/SectionHeading"

export function Team() {
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={teamIntro.eyebrow} title={teamIntro.title} subtitle={teamIntro.subtitle} />
        <a
          href={teamIntro.orgChartUrl}
          className="shrink-0 text-sm font-semibold text-horas-blue hover:underline"
        >
          {teamIntro.orgChartLabel}
        </a>
      </div>
      <div className="mt-12 space-y-14">
        {teamGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold tracking-[0.22em] text-horas-blue uppercase">{group.title}</h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
              {group.members.map((member) => (
                <li key={member.name} className="flex gap-5">
                  <div className="flex h-28 w-28 shrink-0 items-end justify-center overflow-hidden rounded-full bg-horas-soft">
                    <img src={member.photo} alt="" className="h-full w-full object-contain object-bottom" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-horas-ink">{member.name}</p>
                    <p className="mt-1 text-sm text-horas-blue">{member.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-horas-muted">{member.bio}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
