import { company } from "../data/content"
import { Legal } from "../sections/Legal"

export function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Legal title="Mentions légales">
        <h2>Éditeur du site</h2>
        <p>
          <strong>{company.name}</strong>
          <br />
          {company.address.street}
          <br />
          {company.address.zip} {company.address.city}
          <br />
          {company.address.region}, {company.address.country}
        </p>
        <p>
          E-mail : {company.email}
          <br />
          SIREN : {company.legal.siren}
          <br />
          SIRET (siège) : {company.legal.siret}
          <br />
          N° TVA intracommunautaire : {company.legal.vat}
          <br />
          Forme juridique : {company.legal.legalForm}
          <br />
          RCS : {company.legal.rcs}
          <br />
          Code NAF / APE : {company.legal.naf}
          <br />
          Capital social : {company.legal.capital}
          <br />
          Directeur de la publication : {company.legal.publicationDirector} (
          {company.legal.publicationRole})
        </p>
        <h2>Hébergement</h2>
        <p>
          {company.legal.host.name}
          <br />
          {company.legal.host.address}
          <br />
          <a href={company.legal.host.website} rel="noreferrer" target="_blank">
            {company.legal.host.website}
          </a>
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus de ce site (textes, identités visuelles, photographies
          de chantier) est protégé. Toute reproduction non autorisée est interdite. Les
          photographies d'illustration issues de banques d'images restent la propriété de
          leurs auteurs.
        </p>
        <h2>Crédits photographiques</h2>
        <p>
          Certaines images sont des visuels stock (Unsplash) utilisés pour la maquette.
          Elles devront être remplacées par les photos de chantiers HORAS CONCEPT.
        </p>
      </Legal>
    </section>
  )
}
