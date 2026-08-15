# Première Goutte 💉

**Une initiative pour la vie — le premier pas vers le don de sang.**

Première Goutte est une landing page conçue pour sensibiliser au don de sang, informer sur les conditions d'éligibilité et orienter les donneurs vers les établissements de prélèvement. Pensée pour le contexte béninois, elle met l'accent sur la pédagogie, la transparence médicale et l'accessibilité.

> **Avertissement médical :** seul un entretien et un examen médical réalisés par un professionnel de santé peuvent confirmer l'aptitude au don. Toutes les informations du site sont fournies à titre indicatif.

---

## Présentation du projet

La page accompagne le futur donneur tout au long de son parcours de décision, de la prise de conscience jusqu'à la visite du centre :

1. **Comprendre** — *Pourquoi donner ?* : l'impact des dons sur les accidents, chirurgies, maladies et la maternité.
2. **Se connaître** — *Qui peut donner ?* : les critères de base (âge, poids, santé, antécédents, situations).
3. **Se tester** — un **simulateur d'éligibilité** interactif (âge, poids, sexe, date du dernier don) qui rend un statut clair : pré-éligible, non éligible (avec motif) ou date de prochaine éligibilité.
4. **Se préparer** — conseils concrets pour l'avant, le pendant et l'après du don (documents, hydratation, alimentation, repos).
5. **Se localiser** — *Où donner ?* : **8 établissements au Bénin** (Centre National de Transfusion Sanguine + unités de transfusion des CHU/hôpitaux), avec recherche et filtres.
6. **Prendre la mesure** — *État des réserves* : besoins actuels par groupe sanguin.
7. **Rassurer** — une FAQ pour lever les dernières appréhensions.

+ une **section d'appel à l'action** (« Et si votre histoire pouvait sauver la leur ? ») et un **pied de page** riche en liens et mentions.

---

## Stack technique

| Technologie | Rôle |
|-------------|------|
| **React 18** | Bibliothèque UI, composants et gestion d'état locale |
| **Vite 5** | Bundler et serveur de développement ultra-rapide |
| **Tailwind CSS 3** | Système de design utilitaire et responsive |
| **Material Symbols** | Système d'icônes |
| **Google Fonts** | Typographies *Newsreader* (titres) & *Plus Jakarta Sans* (texte) |

### Structure du projet

```
src/
├── App.jsx                     # Assemblage des sections + lien d'évitement clavier
├── main.jsx                    # Point d'entrée React
├── index.css                   # Styles globaux, focus visible, CTA
└── components/
    ├── Navbar.jsx              # Barre sticky + menu burger mobile
    ├── Hero.jsx                # Section d'accueil plein écran
    ├── PourquoiDonner.jsx      # 01 · Impact des dons
    ├── Eligibility.jsx         # 02 · Critères d'éligibilité
    ├── SimulateurEligibilite.jsx # 03 · Simulateur interactif
    ├── Parcours.jsx            # 04 · Timeline du déroulement
    ├── Preparation.jsx         # 05 · Conseils avant/pendant/après
    ├── OuDonner.jsx            # 06 · Établissements + filtres (Bénin)
    ├── EtatReserves.jsx        # 07 · Réserves par groupe sanguin
    ├── Faq.jsx                 # 08 · Accords FAQ accessibles
    ├── Cta.jsx                 # Appel à l'action final
    ├── Footer.jsx              # Liens + mention médicale
    └── Icon.jsx                # Utilitaire d'icône Material
```

---

## Partis pris de conception

### 🎨 Identité visuelle & typographie
- **Palette Material Design 3** (tons de rouge chaud sur surface claire) : la couleur primaire rouge évoque le sang et l'urgence vitale, adoucie par une surface ivoire qui apaise et inspire confiance.
- **Dichotomie typographique** expressive : *Newsreader* (serif) pour les titres — chaleureuse et humaine — associée à *Plus Jakarta Sans* (sans-serif) pour le corps de texte — lisible et moderne.
- **Numérotation des sections** (01 → 08) qui matérialise le parcours narratif du donneur et renforce l'idée d'un cheminement guidé.

### ♿ Accessibilité & navigation clavier
- **Lien d'évitement** « Aller au contenu principal » pour la navigation au clavier.
- **Focus visible explicite** (`:focus-visible`) sur tous les éléments interactifs.
- FAQ construite en accordéons accessibles (`aria-expanded`, `aria-controls`, `role="region"`).
- Boutons et liens sémantiquement corrects (les actions sont de vraies `<a>`).
- Champs de formulaire avec `aria-invalid`, messages d'erreur `role="alert"`.

### 🧩 Gestion des états d'interface
- **Chargement** : spinner et état désactivé pendant le calcul du simulateur.
- **Erreurs de saisie** : validation par champ avec messages explicites.
- **Absence de résultat** : état vide géré (ex. filtrer les centres sans correspondance → bouton « Réinitialiser »).

### 📱 Responsive & robustesse
- **Optimisé de 390px à 1440px** sans rupture visuelle : menu burger mobile, grilles adaptatives, boutons pleine largeur sur petit écran, paddings respiro.
- Vérifié (débordements horizontaux, chevauchements, images cassées) sur 9 largeurs par navigation automatisée.

### 🩸 Sérieux médical
- **Bannière d'avertissement** explicite : seuls un entretien et un examen médical par un professionnel de santé confirment l'aptitude au don.
- Simulateur **indicatif** : rappel systématique que la décision finale revient au médecin.
- Règles réalistes : âge 18–70 ans, poids ≥ 50 kg, **délai post-don de 3 mois (homme) / 4 mois (femme)**.

---

## Démarrage

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

---

## Établissements référencés (Bénin)

Le site présente 8 établissements : le **Centre National de Transfusion Sanguine (CNTS)** de Cotonou et les unités de transfusion des CHU/hôpitaux (Lagune, Suru-Léré, Porto-Novo, Parakou, Tanguiéta, Abomey, Ouidah). Chaque fiche précise la nature, l'adresse, les horaires avec **statut ouvert/fermé calculé en temps réel**, le contact, les **types de dons acceptés** (sang total, plasma, plaquettes) et les **modalités d'accueil** (sur place ou sur rendez-vous).

---

## Licence & mentions

© 2024 Première Goutte. Tous droits réservés.

Les informations fournies sont données à titre indicatif et ne remplacent pas un avis médical professionnel.
