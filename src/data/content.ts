export const company = {
  name: "HORAS CONCEPT",
  tagline: "On transforme vos espaces, vous transformez le monde !",
  founded: 2024,
  email: "accueil@horas-concept.fr",
  phone: "01 85 12 02 06",
  phoneHref: "tel:+33185120206",
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

const shot = (slug: string, index: number) =>
  `/realisations/${slug}-${String(index).padStart(2, "0")}.jpg`

const gallery = (slug: string, count = 6) =>
  Array.from({ length: count }, (_, index) => shot(slug, index + 1))

export const images = {
  hero: shot("arpajon", 1),
  offices: shot("ermont", 1),
  retail: shot("le-mans", 2),
  site: shot("senlis", 1),
  ceilings: shot("longuenesse", 2),
  interiors: shot("longuenesse", 1),
  partitions: shot("le-mans", 1),
  public: shot("longuenesse", 1),
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

export const realisations = [
  {
    slug: "longuenesse",
    featured: true,
    real: true,
    title: "Centre des Finances Publiques de Longuenesse (62)",
    subtitle: "Création d'un centre de contact Amendes",
    category: "Tertiaire public",
    location: "Longuenesse (62)",
    text: "Transformation des espaces du Centre des Finances Publiques, en site occupé partiel.",
    context:
      "Travaux d'aménagement intérieur réalisés en site occupé partiel. Organisation rigoureuse pour concilier avancement du chantier et maintien des activités des services.",
    client: "Maîtrise d'ouvrage SPIB2-C · Maîtrise d'œuvre LBE Ingénierie",
    lots: [
      "Curage et préparation des espaces",
      "Création de faux plafonds",
      "Installation de cloisons modulaires",
      "Pose de revêtements de sol PVC et textiles",
      "Travaux de peinture",
      "Menuiserie intérieure",
    ],
    image: shot("longuenesse", 1),
    gallery: gallery("longuenesse"),
  },
  {
    slug: "arpajon",
    featured: false,
    real: true,
    title: "Centre des Finances Publiques d'Arpajon (91)",
    subtitle: "Réaménagement de l'accueil",
    category: "Tertiaire public",
    location: "Arpajon (91)",
    text: "Réaménagement de l'accueil d'un ERP, réalisé en site occupé.",
    context:
      "Travaux de réaménagement de l'accueil réalisés en site occupé, au sein d'un établissement recevant du public (ERP). Organisation spécifique mise en place pour garantir la continuité du service public et la sécurité des agents et usagers durant tout le chantier.",
    client:
      "Maîtrise d'ouvrage DGFiP · Direction Départementale des Finances Publiques de l'Essonne · Maîtrise d'œuvre LBE Ingénierie",
    lots: [
      "Installation de chantier, balisage et protection des ouvrages conservés",
      "Démolition et reprise des cloisons et sols existants",
      "Cloisons de distribution et cloisons modulaires vitrées, faux-plafonds et baffles acoustiques",
      "Fabrication sur mesure : banque d'accueil, boxes de réception, postes libre-service, bancs d'attente",
      "Menuiseries intérieures : portes simples, placards et étagères",
      "Mise en peinture des surfaces et pose de revêtements de sols en PVC",
    ],
    image: shot("arpajon", 1),
    gallery: gallery("arpajon"),
  },
  {
    slug: "ermont",
    featured: false,
    real: true,
    title: "Centre des Finances Publiques d'Ermont (95)",
    subtitle: "Réhabilitation du 2e étage (R+2)",
    category: "Tertiaire public",
    location: "Ermont (95)",
    text: "Réhabilitation du R+2, environ 1 250 m², réalisée en site occupé.",
    context:
      "Travaux d'aménagement intérieur réalisés en site occupé, sur une surface d'environ 1 250 m². Organisation spécifique mise en place pour garantir la continuité du service public et la sécurité des agents durant tout le chantier.",
    client:
      "Maîtrise d'ouvrage DGFiP · Centre des Finances Publiques du Val-d'Oise · Maîtrise d'œuvre Lemoal Lemoal",
    lots: [
      "Curage et démolition intérieure",
      "Gros œuvre, cloisons et doublages",
      "Création de faux-plafonds acoustiques",
      "Pose de menuiseries intérieures et blocs-portes",
      "Mobilier menuisé sur mesure (accueil, banc du hall)",
      "Signalétique et habillages intérieurs",
    ],
    image: shot("ermont", 1),
    gallery: gallery("ermont"),
  },
  {
    slug: "le-mans",
    featured: false,
    real: true,
    title: "DDFIP de la Sarthe — Le Mans (72)",
    subtitle: "Création d'un centre de contact des professionnels",
    category: "Tertiaire public",
    location: "Le Mans (72)",
    text: "Aménagement du 1er étage, en site partiellement occupé.",
    context:
      "Travaux d'aménagement intérieur réalisés au 1er étage du bâtiment, en site partiellement occupé (circulation des ouvriers interdite au R+2). Organisation stricte des accès et des livraisons pour préserver l'activité du site pendant toute la durée du chantier.",
    client: "Maîtrise d'ouvrage DGFiP · SPIB2C · Maîtrise d'œuvre LBE Ingénierie",
    lots: [
      "Démolition et dépose des cloisons, faux-plafonds et sols non conservés",
      "Fourniture et pose de cloisons de distribution et cloisons claustra bois",
      "Faux-plafond acoustique et plafonds décoratifs suspendus",
      "Revêtements de sol et muraux, peinture des surfaces existantes et neuves",
      "Habillage mural en lattis bois et panneaux acoustiques",
      "Fourniture et pose du mobilier de cuisine",
    ],
    image: shot("le-mans", 1),
    gallery: gallery("le-mans"),
  },
  {
    slug: "senlis",
    featured: false,
    real: true,
    title: "Brigade de surveillance intérieure des Douanes — Senlis (60)",
    subtitle: "Réhabilitation d'un bâtiment pour le relogement d'une brigade",
    category: "Tertiaire public",
    location: "Senlis (60)",
    text: "Réhabilitation du bâtiment 32 du Quartier Ordener, en site inoccupé.",
    context:
      "Travaux de réhabilitation intérieure du bâtiment 32 du Quartier Ordener, en vue du relogement d'une brigade de surveillance intérieure des Douanes. Intervention en site inoccupé, sur deux lots : cloisonnement / faux-plafonds et finitions (peinture, sols, carrelage).",
    client:
      "Maîtrise d'ouvrage Ministère de l'Économie et des Finances (DIDDI · Douanes Hauts-de-France) · Maîtrise d'œuvre Lacagne & Stafie Architectes / LBE Ingénierie",
    lots: [
      "Implantation des cloisons et ossatures métalliques (plaques standard, hydrofuge, acoustique, coupe-feu)",
      "Pose de faux-plafonds et traitement des joints",
      "Pose des huisseries, blocs-portes et menuiseries intérieures",
      "Peinture des locaux après finitions sèches",
      "Pose de revêtements de sol souples",
      "Pose de carrelage et faïence",
    ],
    image: shot("senlis", 1),
    gallery: gallery("senlis"),
  },
] as const

const featuredItem = realisations.find((item) => item.featured) ?? realisations[0]

export const featuredProject = {
  slug: featuredItem.slug,
  eyebrow: "Réalisation phare",
  title: featuredItem.title,
  subtitle: featuredItem.subtitle,
  client: featuredItem.client,
  context: featuredItem.context,
  lots: featuredItem.lots,
  image: featuredItem.image,
  category: featuredItem.category,
} as const

export const projects = realisations.map((item) => ({
  slug: item.slug,
  title: item.title,
  category: item.category,
  location: item.location,
  text: item.text,
  image: item.image,
  real: true,
}))

export const projectFilters = ["Tous", "Tertiaire public"] as const

export function getRealisation(slug: string) {
  return realisations.find((item) => item.slug === slug) ?? null
}

export const whyUs = [
  { title: "Expertise", text: "Une équipe de professionnels expérimentés et passionnés par leur métier." },
  { title: "Fiabilité", text: "Des projets livrés dans les délais et respectant le budget convenu." },
  { title: "Satisfaction client", text: "Un service client irréprochable, des solutions adaptées à chaque projet." },
  { title: "Responsabilité environnementale", text: "Un engagement fort pour des pratiques de construction durables." },
] as const

export const premises = {
  eyebrow: "Nos locaux",
  title: "Siège et atelier, au service des chantiers.",
  text: "300 m² à Saint-Michel-sur-Orge (91) : 100 m² de bureaux et 200 m² d'atelier et de stockage. C'est depuis ce site que nous pilotons les opérations, coordonnons les équipes et répondons aux appels d'offres — les interventions, elles, se font partout en France.",
  images: ["/locaux/locaux-01.jpg", "/locaux/locaux-02.jpg", "/locaux/locaux-03.jpg"],
} as const

export const teamIntro = {
  eyebrow: "Notre équipe",
  title: "Des visages, des métiers, un seul niveau d'exigence.",
  subtitle:
    "Une équipe expérimentée, engagée au quotidien sur vos projets d'aménagement d'espaces professionnels.",
  orgChartUrl: "/docs/organigramme-horas-concept.pdf",
  orgChartLabel: "Télécharger l'organigramme",
} as const

export const teamGroups = [
  {
    title: "Direction",
    members: [
      {
        name: "Stéphane Brasseur",
        role: "Président",
        photo: "/equipe/stephane.jpg",
        bio: "28 ans dans le BTP. Il supervise les projets de la conception à la livraison : solutions techniques, métrés, devis et animation des équipes.",
      },
      {
        name: "Lialdine Rubly",
        role: "Directrice administrative et financière",
        photo: "/equipe/lialdine.jpg",
        bio: "29 ans de gestion de PME, dont 7 dans le BTP. Elle pilote la comptabilité, les finances, les RH et le reporting de direction.",
      },
    ],
  },
  {
    title: "Encadrement des travaux",
    members: [
      {
        name: "Emmanuel Ferreira",
        role: "Conducteur de travaux",
        photo: "/equipe/emmanuel.jpg",
        bio: "7 ans dans le BTP. Il planifie et suit les chantiers, coordonne les corps d'état et veille aux délais, au budget et à la sécurité.",
      },
      {
        name: "Victor Changeux",
        role: "Chargé d'affaires",
        photo: "/equipe/victor.jpg",
        bio: "7 ans dans le BTP. Interlocuteur des sous-traitants et fournisseurs, il assure le suivi technique et administratif jusqu'à la réception.",
      },
    ],
  },
  {
    title: "Support administratif",
    members: [
      {
        name: "Monika Sikora",
        role: "Assistante administrative travaux",
        photo: "/equipe/monika.jpg",
        bio: "Suivi des commandes, des délais d'approvisionnement, des factures et des sous-traitants, en appui de la direction et du commercial.",
      },
      {
        name: "Chaymae Darbal",
        role: "Assistante administrative et financière",
        photo: "/equipe/chaymae.jpg",
        bio: "Gestion administrative, comptable et financière, suivi du personnel et coordination des informations internes et externes.",
      },
    ],
  },
  {
    title: "Équipe chantier",
    members: [
      {
        name: "Patrice Domingues",
        role: "Chef de chantier",
        photo: "/equipe/patrice.jpg",
        bio: "20 ans dans le BTP. Il encadre l'exécution sur site et veille à la conformité, à l'avancement et aux moyens matériels.",
      },
      {
        name: "Carlos Pinheiro",
        role: "Chef d'équipe",
        photo: "/equipe/carlos.jpg",
        bio: "20 ans dans le BTP. Il encadre son équipe sur le terrain et garantit la qualité et la conformité des ouvrages.",
      },
      {
        name: "Zoran Pavlovic",
        role: "Ouvrier polyvalent · Opérateur amiante SS4",
        photo: "/equipe/zoran.jpg",
        bio: "30 ans dans le BTP. Exécution selon les plans, et interventions qualifiées sur les chantiers avec risque amiante (sous-section 4).",
      },
      {
        name: "Goran Todorovic",
        role: "Ouvrier polyvalent · SST",
        photo: "/equipe/goran.jpg",
        bio: "25 ans dans le BTP. Exécution soignée des ouvrages, et sauveteur secouriste du travail au service de la sécurité des équipes.",
      },
    ],
  },
] as const

export const partners = [
  { name: "ACIAL", src: "/partenaires/acial.png" },
  { name: "Bolmin", src: "/partenaires/bolmin.png" },
  { name: "Cami Aménagement", src: "/partenaires/cami-amenagement.png" },
  { name: "Cbatech", src: "/partenaires/cbatech.png" },
  { name: "CFP", src: "/partenaires/cfp.png" },
  { name: "Clepsydre", src: "/partenaires/clepsydre.png" },
  { name: "DRDDI", src: "/partenaires/drddi.png" },
  { name: "Foussier", src: "/partenaires/foussier.png" },
  { name: "Gerflor", src: "/partenaires/gerflor.png" },
  { name: "GOPURA", src: "/partenaires/gopura.png" },
  { name: "Groupe BML", src: "/partenaires/groupe-bml.png" },
  { name: "Haveli", src: "/partenaires/haveli.png" },
  { name: "HOPE Architecture", src: "/partenaires/hope-architecture.png" },
  { name: "Interface", src: "/partenaires/interface.png" },
  { name: "Intervaal", src: "/partenaires/intervaal.png" },
  { name: "ISST", src: "/partenaires/isst.png" },
  { name: "LBE Ingénierie", src: "/partenaires/lbe.png" },
  { name: "Lemoal", src: "/partenaires/lemoal.png" },
  { name: "Magri", src: "/partenaires/magri.png" },
  { name: "Milliken", src: "/partenaires/milliken.png" },
  { name: "Myo", src: "/partenaires/myo.png" },
  { name: "Paris Portes", src: "/partenaires/paris-portes.png" },
  { name: "Ratheau", src: "/partenaires/ratheau.png" },
  { name: "République française", src: "/partenaires/republique-francaise.png" },
  { name: "SEEDG", src: "/partenaires/seedg.png" },
  { name: "SFIC", src: "/partenaires/sfic.png" },
  { name: "Solutech", src: "/partenaires/solutech.png" },
  { name: "Tendanciel", src: "/partenaires/tendanciel.png" },
  { name: "TGVI", src: "/partenaires/tgvi.png" },
  { name: "Tupack", src: "/partenaires/tupack.png" },
  { name: "VBE Ingénierie", src: "/partenaires/vbe-ingenierie.png" },
] as const
