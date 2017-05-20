# Introduction aux bases NoSQL

## Partie 1 : mongoDB

### Pré-requis

- Installer [mongoDB](http://www.mongodb.org/) :
    + Télécharger mongoDB
    + Une fois installé/décompressé, ajouter le chemin du dossier `<mogodbpath>/bin` dans la variable d'environnement `PATH`.
    + Ajouter le dossier `/data/db` à la racine (`C:/` pour windows, `/` pour linux).
    + Pour windows : https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-windows/

### CRUD (Create Read Update Delete)

Consultez la documentation disponible sur le site de mongoDB : https://docs.mongodb.com/manual/reference/mongo-shell/.

#### Premiers pas

- Démarrer la base mongoDB,
- Connectez vous à l'instance de mongo avec le mongo-shell
- Consulter l'aide (`help`),
- Récupérer le fichier users.json et l'importer dans la collection `myUsers` de la base `tp-mongo`. [Voir la commande mongoimport.](http://docs.mongodb.org/manual/reference/program/mongoimport/),
**ATTENTION: la commande mongoimport est à lancer dans le terminal de commande, pas dans le mongo shell**
- `mongoimport --host localhost --db tp-mongo --collection myUsers < users.json`
- ou `mongoimport --host localhost --db tp-mongo --collection myUsers --file users.json`
- Finalement j'ai changé d'avis, je voulais l'importer dans la collection `users`. Supprimer la collection `myUsers` et réimporter dans la collection `users`,
- `use tp-mongo`
- `db.myUsers.drop()`
Et on ré-importe
- `mongoimport --host localhost --db tp-mongo --collection users < users.json`
Note : Il est également possible de simplement renommer la collection :
- `db.myUsers.renameCollection("users")`
- Utiliser le shell mongo pour compter le nombre d'éléments dans la collection `users`. [Voir la documentation du shell mongoDB](http://docs.mongodb.org/manual/reference/method/)

*Astuce* : utiliser .pretty() avec un .find() permet de rendre le résultat bien plus lisible.

#### Créer un élément

Ajouter l'utilisateur dans la collection `users`:
- Chuck Norris
- 77 ans
- hobbies : ["Karate", "Kung-fu", "Ruling the world"]

#### Lecture d'un élément

- Afficher Chuck Norris (si il le permet).
- `db.users.find({name:"Chuck Norris"})`
- Afficher Chuck sans le champs `_id`.
- `db.users.find({name:"Chuck Norris"},{_id:0})`
- Afficher les utilisateurs qui ont entre 20 et 25 ans.
- `db.users.find({$and:[{age:{$gt:20}},{age:{$lt:25}}]}).pretty()`
- Afficher uniquement les hommes entre 30 et 40 ans.
- `db.users.find({$and:[{age:{$gt:30}},{age:{$lt:40}},{gender:"male"}]}).pretty()`
- Afficher les utilisateurs habitant l'état de Louisianne (`Louisiana`)
- `db.users.find({"address.state":"Louisiana"}).pretty()`
- Afficher les 20 premiers utilisateurs triés par ordre décroissant d'age.
- `db.users.find().sort({age:-1}).limit(20).pretty()`
- Combien y'a-t-il de femmes agées de 30 ans?
- `db.users.count({$and:[{age:30},{gender:"female"}]})`

#### Modifier/Supprimer un élément

- Nos juristes nous ont dit que nous ne pouvions plus garder les numéro de téléphones de nos utilisateurs : supprimer le champ `phone` de tous les enregistrements.
- `db.users.update({},{$unset:{phone:1}},{multi:true})`
- Chuck Norris est venu nous dire que le temps ne marquait pas Chuck Norris, mais que Chuck Norris marquait le temps : changer l'age de Chuck Norris à `infinity`
- `db.users.update({name:"Chuck Norris"},{$set:{age:"infinity"}})`
- Ajoutons un hobby à tous nos utilisateurs de plus de 50 ans : `jardinage` 
- `db.users.update({age:{$gt:50}},{$addToSet:{hobbies:"jardinage"}},{multi:true})`


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
