import { useState, type FormEvent } from "react"
import { Button } from "../components/Button"
import { company } from "../data/content"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    if (!name || !email || !message) {
      setError("Merci de renseigner le nom, l'e-mail et le message.")
      return
    }

    setError("")
    setSent(true)
    const subject = encodeURIComponent(`Demande de devis — ${name}`)
    const body = encodeURIComponent(message)
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form className="rounded-horas border border-horas-line bg-white p-7" onSubmit={onSubmit} noValidate>
        <h2 className="text-2xl font-semibold text-horas-ink">Écrivez-nous</h2>
        <p className="mt-2 text-sm text-horas-muted">
          Maquette : le formulaire ouvre votre client mail vers {company.email}.
        </p>
        <div className="mt-6 grid gap-4">
          <label className="text-sm font-medium text-horas-ink">
            Nom
            <input
              name="name"
              className="mt-1 w-full rounded-horas-sm border border-horas-line px-3 py-3 font-normal"
              autoComplete="name"
            />
          </label>
          <label className="text-sm font-medium text-horas-ink">
            E-mail
            <input
              name="email"
              type="email"
              className="mt-1 w-full rounded-horas-sm border border-horas-line px-3 py-3 font-normal"
              autoComplete="email"
            />
          </label>
          <label className="text-sm font-medium text-horas-ink">
            Société
            <input
              name="company"
              className="mt-1 w-full rounded-horas-sm border border-horas-line px-3 py-3 font-normal"
              autoComplete="organization"
            />
          </label>
          <label className="text-sm font-medium text-horas-ink">
            Message
            <textarea
              name="message"
              rows={5}
              className="mt-1 w-full rounded-horas-sm border border-horas-line px-3 py-3 font-normal"
            />
          </label>
        </div>
        {error ? <p className="mt-4 text-sm text-red-700">{error}</p> : null}
        {sent ? (
          <p className="mt-4 text-sm text-horas-blue">
            Merci. Votre client mail devrait s'ouvrir pour finaliser l'envoi.
          </p>
        ) : null}
        <div className="mt-6">
          <Button type="submit">Envoyer la demande</Button>
        </div>
      </form>

      <aside className="rounded-horas bg-horas-soft p-7">
        <h2 className="text-2xl font-semibold text-horas-ink">Coordonnées</h2>
        <address className="mt-4 not-italic text-sm leading-relaxed text-horas-muted">
          <strong className="text-horas-ink">{company.name}</strong>
          <br />
          {company.address.street}
          <br />
          {company.address.zip} {company.address.city}
          <br />
          {company.address.region}, {company.address.country}
        </address>
        <p className="mt-5 text-sm">
          <a className="font-medium text-horas-blue hover:underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </p>
        {company.phone ? (
          <p className="mt-2 text-sm text-horas-muted">Téléphone : {company.phone}</p>
        ) : null}
        <div className="mt-8 overflow-hidden rounded-horas-sm border border-horas-line bg-white">
          <iframe
            title="Localisation HORAS CONCEPT"
            className="h-56 w-full"
            loading="lazy"
            src="https://maps.google.com/maps?q=15%20Rue%20Louis%20Lumi%C3%A8re%2091240%20Saint-Michel-sur-Orge&z=15&output=embed"
          />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-horas-muted">
          Zone d'intervention : toute la France. Siège à Saint-Michel-sur-Orge (91).
        </p>
      </aside>
    </div>
  )
}
