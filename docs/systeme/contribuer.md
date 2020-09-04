---
permalink: /contribuer
---

# Contribuer

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus venenatis lobortis. Nam ac viverra diam. Sed imperdiet lectus tempus enim scelerisque tincidunt. Quisque nec commodo elit. Vivamus eget mauris lobortis augue commodo tincidunt. Vivamus molestie sollicitudin orci, a varius leo euismod quis. Nulla dictum arcu cursus vulputate fringilla. Maecenas posuere justo nibh, sed luctus sem viverra eget. Aenean ut lorem vitae purus venenatis tempus. In auctor, turpis ac pharetra venenatis, lacus felis tincidunt massa, et egestas magna quam nec mauris.

## Petites contributions

Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ultrices velit ut pulvinar pulvinar. Cras ut libero sem. Proin urna velit, placerat ac tempor quis, maximus sed elit. Morbi tincidunt felis at enim aliquam dapibus. Sed id dui eu odio imperdiet feugiat. Etiam posuere dignissim sem gravida lobortis. Maecenas vel commodo lacus.

## Participer au contenu

Nullam vestibulum turpis eros, a efficitur nibh imperdiet non. Cras felis nisl, tempor sit amet felis feugiat, pellentesque tristique nibh. Phasellus tempor fermentum nunc, id varius dolor auctor nec. Vestibulum maximus fringilla ex quis tempus. Etiam velit ligula, feugiat vitae mi nec, laoreet facilisis arcu. Quisque tincidunt arcu mi, in commodo metus ornare a. Etiam rutrum faucibus maximus.

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
