# LoveBurundi 💕

Application de rencontres burundaise moderne avec interface style Tinder

## 🌟 Fonctionnalités

- **Interface de swipe** - Découvrez des profils en glissant
- **Système de matching** - Connectez-vous avec vos matches
- **Chat en temps réel** - Messagerie intégrée
- **Profils détaillés** - Photos et informations personnelles
- **Filtres avancés** - Âge, localisation, distance
- **Design responsive** - Optimisé pour mobile et desktop

## 🎨 Design

- Thème rouge et noir élégant
- Interface mobile-first
- Animations fluides
- Composants modernes

## 🚀 Technologies

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express
- **Base de données**: PostgreSQL avec Drizzle ORM
- **UI**: Tailwind CSS + shadcn/ui + Radix UI
- **State Management**: TanStack Query
- **Authentication**: Replit Auth

## 📱 Démo

L'application est déployée sur Vercel : [Voir la démo](https://loveburundi.vercel.app)

## 🛠️ Installation locale

```bash
# Cloner le repository
git clone https://github.com/PJ11-js/loveburundi2.git
cd loveburundi2

# Installer les dépendances
npm install

# Configurer la base de données
cp .env.example .env
# Modifier .env avec vos variables d'environnement

# Lancer en développement
npm run dev
```

## 🌍 Variables d'environnement

```env
DATABASE_URL=your_postgresql_url
SESSION_SECRET=your_session_secret
REPL_ID=your_repl_id
ISSUER_URL=https://replit.com/oidc
```

## 📦 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run db:push` - Synchroniser le schéma de base de données

## 🤝 Contribution

Les contributions sont les bienvenues ! Ouvrez une issue ou soumettez une pull request.

## 📄 Licence

MIT License

---

Made with ❤️ for Burundi
