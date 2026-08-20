# HORAS CONCEPT — Maquette React

Site vitrine (8 pages) pour validation visuelle avant intégration WordPress / Elementor / Hello.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

Le `npm run dev` local n'est pas protégé. La protection par mot de passe s'applique au déploiement Docker / Coolify.

## Déploiement Coolify v4

1. Nouvelle ressource **Application**, build pack **Dockerfile**.
2. **Base Directory** : `mockup` (si le dépôt est la racine `horas-concept`).
3. Port : `80`.
4. Variables d'environnement (obligatoires) :

| Variable | Exemple | Rôle |
|---|---|---|
| `SITE_USER` | `horas` | Identifiant HTTP Basic |
| `SITE_PASSWORD` | un mot de passe fort | Mot de passe (le conteneur refuse de démarrer s'il est vide) |

Sans `SITE_PASSWORD`, nginx ne démarre pas. Toute page (sauf `/health`) demande le login navigateur.

Les widgets Elementor correspondants sont dans `../wordpress/horas-concept-widgets/`.

## Identité

- Audiowide (`HORAS`) + Poppins (corps et `concept`)
- `#265db6` · `#FFFFFF` · `#111920`
- Logo : `public/horas-logo.jfif`
