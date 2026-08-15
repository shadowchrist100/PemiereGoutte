# Journal d’utilisation des outils d’intelligence artificielle

## 1. Outils d’IA sollicités

| Outil                      | Utilisation                                                                        | Objectif                                    |
| -------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------- |
| ChatGPT                    | Génération et amélioration des prompts, réflexion UX/UI, stratégie comportementale | Structurer la conception de la landing page |
| Génération d’images par IA | Création de propositions visuelles et d’éléments graphiques                        | Explorer différentes directions artistiques |
| opencode (`deepseek-v4-flash-free`) | Génération du code React, refonte des composants, vérifications automatisées (responsive, interactions) | Développement technique de la landing page |
| Navigation automatisée (Playwright/Chromium) | Validation du responsive sur 9 largeurs et des interactions (menu mobile, hero) | Contrôle qualité de l'affichage |

---

## 2. Séquence des prompts significatifs

### Prompt 1 — Définition du besoin

**Objectif :** définir le rôle et les objectifs de la landing page.

> Générer une landing page dédiée à l’information sur le don de sang. Le public cible est constitué d’adultes novices, souvent freinés par un manque d’information ou des appréhensions concernant la douleur, le temps requis et l’organisation.

**Résultat recherché :** établir les objectifs principaux de la page et identifier les principaux freins psychologiques des visiteurs.

---

### Prompt 2 — Approche comportementale

**Objectif :** intégrer les principes de Behavioral Insights et de psychologie cognitive.

> Agis comme un expert en Behavioral Insights, en psychologie cognitive et en UX design émotionnel. Conçois une expérience digitale persuasive mais bienveillante destinée à des adultes novices qui hésitent à donner leur sang.

**Résultat recherché :** identifier les biais cognitifs et les mécanismes comportementaux pouvant être pris en compte dans la conception.

---

### Prompt 3 — Direction artistique

**Objectif :** définir une identité visuelle adaptée au sujet.

> Propose plusieurs directions artistiques pour une landing page dédiée à l'information sur le don de sang, en prenant en compte l'émotivité des utilisateurs adultes.

**Résultat recherché :** explorer plusieurs styles visuels avant de sélectionner une direction cohérente avec le message de la page.

---

### Prompt 4 — Structure de la landing page

**Objectif :** organiser le contenu et le parcours utilisateur.

> Conçois la structure complète d'une landing page informative sur le don de sang, depuis la section Hero jusqu'à la conclusion, en utilisant une approche rassurante, pédagogique et orientée vers la réduction des appréhensions.

**Résultat recherché :** obtenir une architecture permettant de guider progressivement l'utilisateur de la découverte vers la compréhension puis vers l'action.

---

### Prompts opencode (phase de développement)

1. **« Prends le fichier index.html et convertis-le en projet React »** → création de la structure Vite + React + Tailwind, migration de toutes les sections en composants.
2. **« Affine la navbar, qu'elle soit plus épurée et couvre la largeur » / « Ajuste le hero pleine hauteur, image en fond »** → refonte de la navbar (sticky, pleine largeur) et du hero.
3. **« Aère le hero et la section suivante, ajoute les sections : se préparer, où donner, état des réserves »** → trois nouvelles sections créées, espacements généreux.
4. **« Les boutons du hero sont coupés » + « 8 établissements au Bénin avec specs »** → correction des boutons, refonte de la liste des centres de transfusion (statut ouvert/fermé, contacts, types de dons).
5. **« Exploration des centres (filtres), navigation clavier, simulateur d'éligibilité fonctionnel, retire la section "justement pour vous", corrige la numérotation »** → filtres, focus clavier, lien d'évitement, simulateur interactif, suppression d'une section et renumérotation 01→08.
6. **« Corrige les liens du footer ; gestion des états UI ; délai post-don homme/femme 3/4 mois »** → ancres corrigées, états chargement/erreur/absence de résultat, règles d'éligibilité précisées.
7. **« Assure le responsive design sur mobile / optimisation 390px → 1440px »** → menu burger mobile, grilles adaptatives, vérification automatisée multi-largeurs.
8. **« La page doit obligatoirement mentionner que seul un entretien médical confirme l'aptitude »** → bannière d'avertissement dans le simulateur + mention dans le footer.

---

## 3. Ajustements manuels effectués

Les propositions générées par l'IA ont été considérées comme des points de départ et non comme des résultats définitifs.

| Ajustement                                | Pourquoi ?                                                                                   |
| ----------------------------------------- | -------------------------------------------------------------------------------------------- |
| Reformulation de certains titres          | Rendre le message plus naturel et moins générique                                            |
| Réorganisation des sections               | Améliorer la progression logique du parcours utilisateur                                     |
| Adaptation du vocabulaire                 | Utiliser un langage plus accessible aux personnes qui ne connaissent pas le processus du don |
| Réduction de certains contenus            | Éviter la surcharge cognitive et faciliter la lecture                                        |
| Modification de certains éléments visuels | Renforcer le sentiment de confiance et éviter une représentation anxiogène du don            |
| Adaptation des appels à l'action          | Éviter une approche trop commerciale ou culpabilisante                                       |
| Ajustement de la hiérarchie visuelle      | Attirer l'attention sur les informations essentielles                                        |
| Vérification des informations             | Éviter de considérer automatiquement les réponses de l'IA comme exactes                      |

---

## 4. Limites rencontrées avec les outils d'IA

### 4.1. Résultats parfois génériques

Les premières propositions générées pouvaient présenter des structures relativement classiques de landing pages. Plusieurs itérations de prompts ont donc été nécessaires afin d'obtenir une expérience plus spécifique au contexte du don de sang.

### 4.2. Nécessité de préciser les intentions

Les résultats étaient fortement dépendants du niveau de précision des prompts. Des demandes trop générales produisaient des réponses moins pertinentes.

### 4.3. Risque d'informations inexactes

L'IA peut générer des informations qui semblent plausibles mais qui nécessitent une vérification auprès de sources fiables. Les informations médicales et les conditions liées au don de sang doivent donc être contrôlées indépendamment.

### 4.4. Difficulté à reproduire exactement une intention graphique

Les propositions visuelles générées par l'IA peuvent être intéressantes pour explorer des pistes, mais elles ne correspondent pas toujours exactement à la composition, aux proportions ou à l'atmosphère souhaitées.

### 4.5. Nécessité d'une intervention humaine

L'IA a été utilisée comme outil d'assistance à la conception. Les choix finaux concernant la hiérarchie de l'information, l'expérience utilisateur, la direction artistique et la cohérence globale ont nécessité une intervention humaine.

---

## 5. Bilan de l'utilisation de l'IA

L'utilisation de l'intelligence artificielle a principalement servi à **accélérer l'exploration**, générer des pistes de réflexion et faciliter l'itération sur la structure, le contenu et la direction artistique de la landing page.

Cependant, les résultats générés n'ont pas été utilisés systématiquement tels quels. Ils ont été **analysés, sélectionnés, reformulés et adaptés** en fonction des objectifs du projet, du public cible et des contraintes de conception.

L'IA a ainsi été considérée comme un **outil d'aide à la conception et à l'exploration**, tandis que les décisions finales sont restées sous contrôle humain.
