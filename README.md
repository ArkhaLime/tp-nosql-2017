# Introduction aux bases NoSQL

## Partie 1 : mongoDB

### Pré-requis

- Installer [mongoDB](http://www.mongodb.org/) :
    + Télécharger mongoDB
    + Une fois installé/décompressé, ajouter le chemin du dossier `<mogodbpath>/bin` dans la variable d'environnement `PATH`.
    + Ajouter le dossier `/data/db` à la racine (`C:/` pour windows, `/` pour linux).
    + Pour windows : https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-windows/
- Installer [git](http://git-scm.com/) ou le client [github](http://github.com)

### CRUD (Create Read Update Delete)

Consultez la documentation disponible sur le site de mongoDB : https://docs.mongodb.com/manual/reference/mongo-shell/.

#### Premiers pas

- Démarrer la base mongoDB,
- Connectez vous à l'instance de mongo avec le mongo-shell
- Consulter l'aide (`help`),
- Récupérer le fichier users.json et l'importer dans la collection `myUsers` de la base `tp-mongo`. [Voir la commande mongoimport.](http://docs.mongodb.org/manual/reference/program/mongoimport/),
**ATTENTION: la commande mongoimport est à lancer dans le terminal de commande, pas dans le mongo shell**
- `mongoimport --host localhost --db tp-mongo --collection myUsers < users.json`
- Finalement j'ai changé d'avis, je voulais l'importer dans la collection `users`. Supprimer la collection `myUsers` et réimporter dans la collection `users`, Note : Il est également possible de simplement renommer la collection :
- Utiliser le shell mongo pour compter le nombre d'éléments dans la collection `users`. [Voir la documentation du shell mongoDB](http://docs.mongodb.org/manual/reference/method/)

*Astuce* : utiliser .pretty() avec un .find() permet de rendre le résultat bien plus lisible.

#### Créer un élément

Ajouter l'utilisateur dans la collection `users`:
- Chuck Norris
- 77 ans
- hobbies : ["Karate", "Kung-fu", "Ruling the world"]

#### Lecture d'un élément

- Afficher Chuck Norris (si il le permet).
- Afficher Chuck sans le champs `_id`.
- Afficher les utilisateurs qui ont entre 20 et 25 ans.
- Afficher uniquement les hommes entre 30 et 40 ans.
- Afficher les utilisateurs habitant l'état de Louisianne (`Louisiana`)
- Afficher les 20 premiers utilisateurs triés par ordre décroissant d'age.
- Combien y'a-t-il de femmes agées de 30 ans?

#### Modifier/Supprimer un élément

- Nos juristes nous ont dit que nous ne pouvions plus garder les numéro de téléphones de nos utilisateurs : supprimer le champ `phone` de tous les enregistrements.
- Chuck Norris est venu nous dire que le temps ne marquait pas Chuck Norris, mais que Chuck Norris marquait le temps : changer l'age de Chuck Norris à `infinity`
- Ajoutons un hobby à tous nos utilisateurs de plus de 50 ans : `jardinage`


### Agrégation


- Je souhaite savoir combien d'utilisateur j'ai dans chaque état, lister les états en indiquant pour chacun, le nombre d'utilisateurs présents.
- Je souhaite savoir l'âge moyen des utilisateurs de chaque état.
- Je veux connaître la liste de tous les hobbies de chaque ville.
- Utiliser les projections (`$project`) pour lister les utilisateurs en n'affichant que leur nom (en minuscule) et leur age.
- Je souhaite savoir l'âge moyen des hommes de chaque état.

## Partie 2 : Redis
Suivre [le tutoriel du site de redis](http://try.redis.io/)

## Bonus : Neo4j
Si vous avez terminé en avance, vous pouvez aller essayer Neo4j sur leur [site](http://www.neo4j.org/learn/try)
