export const company = {
  name: "HORAS CONCEPT",
  tagline: "On transforme vos espaces, vous transformez le monde !",
  founded: 2024,
  email: "accueil@horas-concept.fr",
  phone: "",
  address: {
    street: "15, rue Louis Lumière",
    city: "Saint-Michel-sur-Orge",
    zip: "91240",
    region: "Île-de-France",
    country: "France",
  },
  linkedin: "https://www.linkedin.com/company/horas-concept/",
  legal: {
    siren: "930 040 506",
    siret: "930 040 506 00022",
    vat: "FR47930040506",
    legalForm: "SASU, société par actions simplifiée unipersonnelle",
    rcs: "930 040 506 R.C.S. Evry",
    capital: "100 000,00 €",
    naf: "43.32B",
    publicationDirector: "Stéphane Brasseur",
    publicationRole: "Président",
    host: {
      name: "OVH SAS",
      address: "2 rue Kellermann, 59100 Roubaix, France",
      website: "https://www.ovhcloud.com",
    },
  },
} as const

export const images = {
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  offices: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
  retail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
  site: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  ceilings: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  interiors: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  partitions: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  public: "https://media.licdn.com/dms/image/v2/D4E22AQEwRBq6UFjGSw/feedshare-image-high-res/B4EZ.E72NJJIAU-/0/1784641709227?e=1788393600&v=beta&t=9nZKZATmPIBTPyAw3GO7PARHhMb6WCtoHfmEY_Iz6T4",
} as const

export const nav = [
  { to: "/", label: "Accueil" },
  { to: "/savoir-faire", label: "Savoir-faire" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const

export const trustItems = [
  { label: "QUALIBAT", value: "4131 · 4211 · 6611" },
  { label: "Mention RGE", value: "Isolation intérieure" },
  { label: "Intervention", value: "Partout en France" },
  { label: "Mobilité", value: "Flotte électrique" },
] as const

export const homeServices = [
  {
    title: "Aménagement de bureaux",
    text: "Conception et réalisation d'espaces de travail optimisés pour la productivité, le bien-être et la durabilité.",
    image: images.offices,
  },
  {
    title: "Rénovation de commerces",
    text: "Boutiques et espaces de vente attractifs, efficaces et pensés pour l'expérience client.",
    image: images.retail,
  },
  {
    title: "Solutions sur mesure",
    text: "Projets personnalisés, éco-responsables, adaptés aux contraintes de chaque site — y compris en site occupé.",
    image: images.interiors,
  },
] as const

export const specialties = [
  {
    title: "Curage",
    text: "Préparation des espaces et déposes soignées pour libérer le volume avant aménagement.",
  },
  {
    title: "Cloisons EI60",
    text: "Cloisons coupe-feu pour sécuriser les circulations et compartimenter les locaux.",
  },
  {
    title: "Cloisons amovibles",
    text: "Cloisonnement démontable pour faire évoluer les plateaux sans tout casser.",
  },
  {
    title: "Cloisons mobiles",
    text: "Espaces modulables : salles de réunion, open spaces et zones silencieuses.",
  },
  {
    title: "Faux plafonds",
    text: "Plafonds suspendus modulaires, acoustique et intégration des réseaux.",
  },
  {
    title: "Revêtements de sols",
    text: "PVC, textiles et finitions adaptées au tertiaire, au commerce et aux ERP.",
  },
  {
    title: "Peinture",
    text: "Finitions soignées, teintes maîtrisées, chantiers propres en site occupé.",
  },
  {
    title: "Carrelage / Faïence",
    text: "Locaux humides, sanitaires et espaces d'accueil avec un rendu durable.",
  },
  {
    title: "Menuiseries intérieures",
    text: "Portes, habillages et détails menuisés pour un second œuvre cohérent.",
  },
] as const

export const processSteps = [
  {
    step: "01",
    title: "Écoute",
    text: "Nous travaillons en étroite collaboration pour comprendre vos besoins, vos contraintes et vos objectifs.",
  },
  {
    step: "02",
    title: "Conception",
    text: "Design, phasage et solutions techniques durables, alignés sur le budget et le planning.",
  },
  {
    step: "03",
    title: "Réalisation",
    text: "Exécution soignée, coordination des lots, sécurité des usagers et des équipes.",
  },
  {
    step: "04",
    title: "Livraison",
    text: "Un espace fonctionnel, esthétique et durable, livré dans les délais convenus.",
  },
] as const

export const values = [
  {
    title: "Écoute et collaboration",
    text: "Chaque projet part d'un dialogue exigeant avec la maîtrise d'ouvrage et la maîtrise d'œuvre.",
  },
  {
    title: "Innovation et design durable",
    text: "Nous intégrons tendances, technologie et durabilité pour des espaces modernes et performants.",
  },
  {
    title: "Qualité et sécurité",
    text: "Travaux de haute qualité, normes de sécurité et pratiques écologiques les plus strictes.",
  },
] as const

export const certifications = [
  {
    code: "4131",
    title: "Plaques de plâtre",
    text: "Technicité courante — mention RGE. Isolation par l'intérieur des murs, rampants et plafonds.",
  },
  {
    code: "4211",
    title: "Cloisons démontables",
    text: "Fourniture et pose de cloisons démontables, amovibles ou mobiles.",
  },
  {
    code: "6611",
    title: "Plafonds suspendus",
    text: "Fourniture et pose de plafonds suspendus modulaires, technicité courante.",
  },
] as const

export const featuredProject = {
  eyebrow: "Réalisation phare",
  title: "Centre des Finances Publiques de Longuenesse (62)",
  subtitle: "Création d'un centre de contact Amendes",
  client: "Maîtrise d'ouvrage SPIB2-C · Maîtrise d'œuvre LBE Ingénierie",
  context:
    "Travaux d'aménagement intérieur réalisés en site occupé partiel. Organisation rigoureuse pour concilier avancement du chantier et maintien des activités des services.",
  lots: [
    "Curage et préparation des espaces",
    "Création de faux plafonds",
    "Installation de cloisons modulaires",
    "Pose de revêtements de sol PVC et textiles",
    "Travaux de peinture",
    "Menuiserie intérieure",
  ],
  image: images.public,
  category: "Tertiaire public",
} as const

export const projects = [
  {
    slug: "longuenesse",
    title: "Centre de contact Amendes — Longuenesse",
    category: "Tertiaire public",
    location: "Longuenesse (62)",
    text: "Transformation des espaces du Centre des Finances Publiques, en site occupé partiel.",
    image: images.public,
    real: true,
  },
  {
    slug: "bureaux-plateau",
    title: "Plateau de bureaux tertiaires",
    category: "Bureaux",
    location: "Île-de-France",
    text: "Exemple de typologie : open space, salles de réunion et circulations cloisonnées.",
    image: images.offices,
    real: false,
  },
  {
    slug: "commerce",
    title: "Espace de vente",
    category: "Commerce",
    location: "France",
    text: "Exemple de typologie : parcours client, sols techniques et volumes d'accueil.",
    image: images.retail,
    real: false,
  },
  {
    slug: "interieur-modulaire",
    title: "Aménagement intérieur modulaire",
    category: "Bureaux",
    location: "France",
    text: "Exemple de typologie : cloisons amovibles, faux plafonds et finitions second œuvre.",
    image: images.partitions,
    real: false,
  },
  {
    slug: "site-occupe",
    title: "Réhabilitation en site occupé",
    category: "Tertiaire public",
    location: "France",
    text: "Exemple de typologie : phasage, sécurité des usagers et limitation des nuisances.",
    image: images.site,
    real: false,
  },
] as const

export const projectFilters = ["Tous", "Tertiaire public", "Bureaux", "Commerce"] as const

export const whyUs = [
  { title: "Expertise", text: "Une équipe de professionnels expérimentés et passionnés par leur métier." },
  { title: "Fiabilité", text: "Des projets livrés dans les délais et respectant le budget convenu." },
  { title: "Satisfaction client", text: "Un service client irréprochable, des solutions adaptées à chaque projet." },
  { title: "Responsabilité environnementale", text: "Un engagement fort pour des pratiques de construction durables." },
] as const
