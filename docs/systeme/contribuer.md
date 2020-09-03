---
permalink: /contribuer
---

# Contribuer

Blablabla

## Petites contributions

Blablabla

## Participer au contenu

Blablabla

## Installer le site localement

Si vous souhaitez voir en direct sur le site vos modifications avant de les publier ou tout simplement modifier le site directement depuis votre éditeur de code plutôt que via l'interface Github, vous aurez besoin d'installer le site sur votre ordinateur. Voici la démarche à suivre.

### 1. Dépendances

Le site nécéssite l'installation de [NodeJS](https://nodejs.org/), [Yarn](https://classic.yarnpkg.com/) et [Git](https://git-scm.com/).

### 2. Préparer le dépôt

A l'aide d'un terminal :

1. `git clone https://github.com/PseudoEcologie/PseudoEcologie.org` pour cloner le dépôt.
2. `cd PseudoEcologie.org` pour ouvrir le dossier que vous venez de télécharger.
3. `yarn install` pour télécharger les dépendances Yarn du projet.

### 3. Démarrer un serveur local

`yarn docs:dev` démarre un serveur local à l'adresse `localhost:8080` pour voir vos changements en direct alors que vous travaillez. Vous pouvez également utiliser l'adresse`votre-adresse-ip:8080` pour voir les changements depuis un autre appareil (comme votre téléphone).

### 4. Bonus : Ayez du style

Si vous utilisez un éditeur de code moderne, nous vous invitons chaleuresement à télécharger les extensions `lint`, `eslint` et `linter` qui permettent de s'assurer que tout le monde utilise les mêmes conventions de style pour leur code. Les fichiers de configurations se trouvent à la base du projet et sont chargés automatiquement par les extensions.
