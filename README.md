# Pseudo-écologie.org

Un site de vulgarisation contre l'écologie de facade

**Attention :** Ce projet n'est pour l'instant qu'à l'état de brouillon. Seul un squelette basique du design est disponible.

## Table des matières

* [Manifeste : Non à l'écologie de facade !](#manifeste--non-%C3%A0-l%C3%A9cologie-de-facade-)
* [Contribuer au site](#contribuer-au-site)
* [Installer le site localement](#installer-le-site-localement)

## Manifeste : Non à l'écologie de facade !

Durant ces dernières années, le travail acharné de nombreux scientifiques et militants écologistes ont fait du réchauffement climatique (et des enjeux environnementaux) une préocuppation politique centrale dans le monde entier.

Malheuresement, cette victoire a été accompagnée par le développement de discours pseudo-écologique chez les politiciens et les entreprises. Ces discours sont se basent sur des idées préconcues ou sur l'inquiètude des populations, et visent pour leurs auteurs à améliorer leur image, vendre un produit ou gagner des voix par exemple. Aujourd'hui, ces discours polluent complétement la sphère médiatique : focalisant les débats politiques sur des sujets mineurs plutôt que les enjeux réels, empechant les citoyens de bien comprendre ou de distinguer une vraie information d'une fausse, voir permettant de justifier des politiques réactionnaires et contre-productives.

### Notre proposition

Des ressources simples, des schémas compréhensibles et des données utiles issues de sources scientifiques fiables et mises à jours, pour vous permettre à la fois de vous former contre ces discours, mais également avoir des outils pour débattre et convaincre d'éventuels proches qui s'en ferait le relais.

Pour parvenir à cet objectif, notre site est entièrement gratuit, open source, sans cookies, sans collecte de données personelles, sans publicité, aucun produit à vendre, et son contenu est éllaboré et mis à jours collectivement par la communauté. Si vous souhaitez participer à ce projet, en corrigeant une faute, éliminant un bug, supprimant une fausse information ou en actualisant une donnée, n'hesitez pas à lire notre guide du contributeur !

### Nos valeurs

Au delà de notre philosophie opensource, nos contributeurs se retrouvent autour de valeurs communes : nous sommes convaincus que la lutte écologique passe par la lutte contre tout les discours réactionnaires, contre le néo-libéralisme insatiable, contre la destruction de la recherche publique et contre toute forme d'élitisme qui empêcherait la diffusion des savoirs. Profondémment progressistes, nous sommes convaincus que préserver notre planète n'est pas incompatible (au contraire) avec le progrès social, démocratique et technologique.

Enfin, ce site ne dépend d'aucune organisation politique, syndicale ou associative. Toute personne souhaitant apporter sa pierre à l'édifice et qui se reconnait dans nos valeurs est bienvenue.

## Contribuer au site

En cours d'écriture...

## Installer le site localement

Si vous souhaitez voir en direct sur le site vos modifications avant de les publier ou tout simplement modifier le site directement depuis votre éditeur de code plutôt que via l'interface Github, vous aurez besoin d'installer le site sur votre ordinateur. Voici la démarche à suivre.

### 1. Dépendances

Le site nécéssite l'installation de [NodeJS](https://nodejs.org/) (NPM) et [Git]().

### 2. Préparer le dépôt

A l'aide d'un terminal :

1. `git clone https://github.com/GoulvenC/pseudo-ecologie.org` pour cloner le dépôt.
2. `cd Pseudo-ecologie.org` pour ouvrir le dossier que vous venez de télécharger.
3. (`sudo`) `npm install` pour télécharger les dépendances NodeJS du projet.
4. (`sudo`) `npm install --global @gridsome/cli` pour installer Gridsome CLI.

### 3. Démarrer un serveur local

`gridsome develop` démarre un serveur local à l'adresse `localhost:8080` pour voir vos changements en direct alors que vous travaillez. Vous pouvez également utiliser l'adresse`votre-adresse-ip:8080` pour voir les changements depuis un autre appareil (comme votre téléphone), et l'adresse `localhost:8080/___explore` pour consulter les données GraphQL.

### 4. Bonus : Ayez du style

Si vous utilisez un éditeur de code moderne, nous vous invitons chaleuresement à télécharger les extensions `lint`, `eslint` et `linter` qui permettent de s'assurer que tout le monde utilise les mêmes conventions de style pour leur code. Les fichiers de configurations se trouvent à la base du projet et sont chargés automatiquement par les extensions.