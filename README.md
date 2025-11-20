# 420-SN1 - Programmation en sciences 🐍

Site de documentation du cours **420-SN1 Programmation en sciences** au Cégep Édouard-Montpetit.

Ce site web est construit avec [Docusaurus 3](https://docusaurus.io/), un générateur de sites de documentation statique moderne.

## 🌐 Site en ligne

Le site est déployé à l'adresse : **https://info.cegepmontpetit.ca/420-SN1/**

## 📚 Contenu

Le site contient :

- **Cours** : Notes de cours pour les 15 rencontres
- **Travaux pratiques (TP)** : Énoncés des travaux pratiques
- **Recettes** : Guides pratiques (installation, configuration, etc.)
- **Aide-mémoire** : Référence rapide des concepts Python

## 🚀 Installation et développement local

### Prérequis

- Node.js version 16.14 ou supérieure

### Installation des dépendances

```bash
npm install
```

### Démarrage du serveur de développement

```bash
npm start
```

Cette commande démarre un serveur de développement local et ouvre le site dans votre navigateur à l'adresse `http://localhost:3000/420-SN1/`. La plupart des modifications se reflètent en temps réel sans avoir à redémarrer le serveur.

## 📁 Structure du projet

```
420-SN1/
├── docs/                      # Contenu du site
│   ├── 01-cours/             # Notes de cours (rencontres 1-15)
│   ├── 02-tp/                # Travaux pratiques
│   ├── 03-recettes/          # Guides pratiques
│   └── 04-aidememoire/       # Aide-mémoire
├── src/                       # Code source personnalisé
│   ├── components/           # Composants React personnalisés
│   ├── css/                  # Styles CSS personnalisés
│   └── theme/                # Personnalisation du thème
├── static/                    # Fichiers statiques (images, ressources)
│   ├── img/                  # Images
│   └── ressources/           # Fichiers CSV, notebooks, etc.
├── docusaurus.config.js      # Configuration Docusaurus
├── sidebars.js               # Configuration de la barre latérale
└── package.json              # Dépendances et scripts npm
```

## 🛠️ Technologies utilisées

- **Docusaurus 3** : Framework de documentation
- **React** : Bibliothèque JavaScript pour l'interface
- **MDX** : Markdown avec support JSX
- **KaTeX** : Rendu des formules mathématiques (LaTeX)
- **Prism** : Coloration syntaxique du code
- **Mermaid** : Diagrammes et graphiques

## ✏️ Contribuer

Pour contribuer au site :

1. Clonez le dépôt
2. Créez une branche pour vos modifications
3. Effectuez vos changements dans le dossier `docs/`
4. Testez localement avec `npm start`
5. Créez un commit avec un message descriptif en français
6. Poussez vos modifications et créez une pull request

## 📝 Licence

Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Auteurs

Département d'informatique - Cégep Édouard-Montpetit

## 🔗 Liens utiles

- [Guide Markdown étendu pour Docusaurus](https://docusaurus.io/fr/docs/markdown-features)
- [Documentation Docusaurus](https://docusaurus.io/)
- [Markdown Guide](https://www.markdownguide.org/)
- [KaTeX Documentation](https://katex.org/)

## Avancé

Des composantes supplémentaires ont été développées par Pierre-Olivier Brillant. Vous pouvez vous référer à la section [Wiki](https://github.com/departement-info-cem/depinfo-gabarit/wiki) de ce repository, ou vous adresser directement à lui pour en savoir plus.

