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

1. Application → build pack **Dockerfile**.
2. **Base Directory** : `mockup`.
3. **Ports Exposes** : `80` (ou `3000` — nginx écoute les deux).
4. **Ne pas** remplir **Ports Mappings** (`80:80`, `3000:3000`, etc.). Tes autres apps et le proxy Coolify occupent déjà les ports hôte. Le proxy route par le domaine, pas par un port public dédié.
5. Variables (optionnelles, runtime) :

| Variable | Défaut | Rôle |
|---|---|---|
| `SITE_USER` | `horas` | Identifiant HTTP Basic |
| `SITE_PASSWORD` | `horas-concept` | Mot de passe |

Si le déploiement affiche **502 Bad Gateway** : dans Coolify, mets **Ports Exposes** à `80`, laisse **Ports Mappings** vide, puis redéploie.

Les widgets Elementor correspondants sont dans `../wordpress/horas-concept-widgets/`.

## Identité

- Audiowide (`HORAS`) + Poppins (corps et `concept`)
- `#265db6` · `#FFFFFF` · `#111920`
- Logo : `public/horas-logo.jfif`
