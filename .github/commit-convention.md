# Convention

## Commit

Afin d'assurer une certaine cohérence et un bon niveau d'explicité, le titre des commits doit correspondre à cette convention :
```
/^/^(revert: )?(fix|ajout|maj|wip|style): .{1,50}/
```

Si votre commit... :

* `revert` -> annule une précédente.
* `fix` -> corrige un bug ou un problème
* `ajout` -> ajoute du contenu
* `maj` -> met à jour du contenu
* `wip` -> est un brouillon
* `style` -> met à jour du style

Suivi du numéro de l'issue résolue, de la commit annulée ou du nom du fichier / component affecté.

Exemples :
* `fix: #13`
*  `ajout: .github/`

## Pull request

*En cours d'écriture.*