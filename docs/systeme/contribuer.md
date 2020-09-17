---
permalink: /contribuer
---

# Contribuer

**PseudoEcologie.org** est un projet entièrement opensource et collaboratif, toute personne souhaitant aider le site à se développer et se reconnaissant dans  [notre manifeste](/manifeste/) est invitée à y participer.

Toute contribution est faite volontairement, sans aucune hypothèse de préservation du contenu ou de compensation. Toute information publiée sur **PseudoEcologie.org** pourra être modifiée ou supprimée. Sauf mention contraire, l'ensemble du site est placé sous [licence Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## Petites contributions

Si vous souhaitez corriger une faute d'orthographe, une formulation ou une petite erreur, vous pouvez facilement utiliser le lien `modifier cette page` (situé en bas à gauche de la page que vous souhaitez modifier).

Vous voilà sur [le dépôt](https://github.com/PseudoEcologie/PseudoEcologie.org) (que l'on appelle `repository` ou `repo`) de **PseudoEcologie.org** contenant l'ensemble du code source du site, hebergé sur **Github**. C'est à partir de ce code source qu'est déployé notre site tel qu'il s'affiche sur votre écran, il est donc protégé et seul un administrateur peut le modifier. Après avoir créé un compte **Github**, il vous sera proposer de réaliser un fork de notre repo (c'est à dire une copie) et c'est à partir de celle-ci que vous pourrez proposer vos modifications.

::: tip Astuce
Une fois un fork créé sur votre compte, vous pourrez ignorer cette étape pour vos prochaines contributions. lorsque vous cliquerez sur `Modifier cette page`, l'éditeur de texte s'affichera directement. Une nouvelle branche sera alors créée dans votre fork, pour que vous puissiez travailler travailler sur un fichier précis de votre copie du repo sans affecter le reste.
:::

Vous voilà normalement sur l'interface de rédaction, où vous pouvez librement ajouter vos modifications. Sachez néanmoins que le site utilise la [syntaxe Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (par exemple, vous pouvez écrire `votre **texte**` pour que le mot texte soit en gras) avec quelques [ajouts](https://vuepress.vuejs.org/guide/markdown.html). Les noms d'organisations doivent être en gras, les titres de document en italique, toute information ou chiffre doit être sourcé.

Concernant l'orthographe, vous pouvez vous alligner sur la [réforme de 1990](http://www.academie-francaise.fr/sites/academie-francaise.fr/files/rectifications_1990.pdf), même si des exceptions peuvent être admise quand l'usage difère trop de la norme. Merci également d'utiliser des formes d'écritures inclusives telle que `les contributeurs et contributrices` ainsi que l'accord de proximité, mais pas de points médians.

Une fois vos modifications terminées, merci de donner un titre explicite à votre pull request (votre demande de modification) et d'ajouter une description expliquant au mieux ce que vous avez changer. Nous verifieront votre contribution dans les plus brefs délais !

## Participer au contenu

::: warning Attention
Cette partie est en cours de rédaction.
:::

## Installer le site localement

Si vous souhaitez voir en direct sur le site vos modifications avant de les publier ou tout simplement modifier le site directement depuis votre éditeur de code plutôt que via l'interface **Github**, vous aurez besoin d'installer le site sur votre ordinateur. Voici la démarche à suivre.

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
