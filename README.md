# NEF : Un site de vulgarisation contre l'écologie de facade

**Attention :** Ce projet n'est pour l'instant qu'à l'état de brouillon. Seul un squelette basique du design est disponible.

## Table des matières

* [Manifeste : Non à l'écologie de facade !]()
* [Contribuer au site]()
* [Installer le site localement]()

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

### 1. Installer NodeJS et NPM

#### Windows
[Télécharger la version Current](https://nodejs.org/) et cocher "Install the necessary tools" durant l'installation.

#### Linux
`sudo apt install nodejs` pour la dernière version d'Ubuntu. [Autres distributions.](https://nodejs.org/en/download/package-manager/)

#### macOS
[Installer la version Current.](https://nodejs.org/)

### 2. Préparer le dépôt

1. `git clone https://github.com/gamedevalliance/fairedesjeux.fr`
2. `cd fairedesjeux.fr`
3. (`sudo`) `npm install` pour télécharger les dépendances dans le dossier.
4. (`sudo`) `npm install --global @gridsome/cli` pour installer Gridsome CLI.

Pour une marche à suivre plus détaillée et accessible aux néophytes, lisez le [guide du site](https://fairedesjeux.fr/contribuer/comment-contribuer/installer-le-site/).

### 3. Démarrer un serveur local

`gridsome develop` démarre un serveur local à l'adresse `localhost:8080` pour voir vos changements en direct alors que vous travaillez.
