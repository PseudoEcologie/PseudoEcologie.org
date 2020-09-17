# Pseudo-écologie.org

[![Netlify Status](https://api.netlify.com/api/v1/badges/e36d62b9-f715-41e5-8284-c5eeac286443/deploy-status)](https://app.netlify.com/sites/quizzical-raman-0243e2/deploys) [![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)

Un site pour se former aux questions écologiques et lutter contre les discours antisciences et le greenwashing.

Propulsé par [VuePress](https://vuepress.vuejs.org/) et [Netlify](https://www.netlify.com/). Contenu sous [licence Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Lien utiles

* [Lire le manifeste](https://pseudoecologie.org/manifeste/)
* [Contribuer au site](https://pseudoecologie.org/contribuer/)

## Installer le site

### 1. Dépendances

Le site nécéssite l'installation de [NodeJS](https://nodejs.org/), [Yarn](https://classic.yarnpkg.com/) et [Git](https://git-scm.com/).

### 2. Préparer le dépôt

A l'aide d'un terminal :

1. `git clone https://github.com/PseudoEcologie/PseudoEcologie.org` pour cloner le dépôt.
2. `cd PseudoEcologie.org` pour ouvrir le dossier que vous venez de télécharger.
3. `yarn install` pour télécharger les dépendances Yarn du projet, notamment **VuePress**, le [générateur de site statique](https://vuepress.vuejs.org/) que nous utilisons pour notre site

### 3. Démarrer un serveur local

`yarn docs:dev` démarre un serveur local à l'adresse `localhost:8080` pour voir vos changements en direct alors que vous travaillez. Vous pouvez également utiliser l'adresse`votre-adresse-ip:8080` pour voir les changements depuis un autre appareil (comme votre téléphone).

### 4. Bonus : Ayez du style

Si vous utilisez un éditeur de code moderne, nous vous invitons à télécharger les extensions **Eslint**, **Stylelint** et **Vetur** qui permettent de s'assurer que tout le monde utilise les mêmes conventions de style pour leur code. Les fichiers de configurations se trouvent à la base du projet et sont chargés automatiquement par les extensions.
