import { company } from "../data/content"
import { Legal } from "../sections/Legal"

export function ConfidentialitePage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Legal title="Politique de confidentialité">
        <p>
          Cette page décrit le traitement des données personnelles sur le site {company.name},
          conformément au RGPD.
        </p>
        <h2>Responsable de traitement</h2>
        <p>
          {company.name} ({company.legal.legalForm}) — SIRET {company.legal.siret} —{" "}
          {company.address.street}, {company.address.zip} {company.address.city} —{" "}
          {company.email}
        </p>
        <h2>Données collectées</h2>
        <p>
          Le formulaire de contact collecte le nom, l'e-mail, éventuellement la société,
          et le message. Aucun compte utilisateur n'est créé. La maquette n'enregistre
          pas ces données sur un serveur : l'envoi passe par votre client mail (mailto).
        </p>
        <h2>Finalité</h2>
        <p>
          Répondre aux demandes de devis, de contact et de candidature. Les CV reçus par
          e-mail sont traités uniquement pour le recrutement.
        </p>
        <h2>Durée de conservation</h2>
        <p>
          Demandes commerciales : 3 ans après le dernier contact. Candidatures : 2 ans
          après le dernier contact, sauf accord contraire. [À COMPLÉTER si une politique
          interne diffère.]
        </p>
        <h2>Destinataires</h2>
        <p>
          Les données sont destinées aux collaborateurs habilités de {company.name}. Elles
          ne sont pas vendues.
        </p>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou
          la portabilité de vos données, et vous opposer au traitement, en écrivant à{" "}
          {company.email}. Vous pouvez également saisir la CNIL.
        </p>
        <h2>Cookies</h2>
        <p>
          La maquette React n'utilise pas de cookies publicitaires. Le site WordPress
          final (Elementor / Hello) pourra déposer des cookies techniques. [À COMPLÉTER
          après mise en production.]
        </p>
      </Legal>
    </section>
  )
}
