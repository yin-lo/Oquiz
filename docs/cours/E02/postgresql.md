## Rappels sur Postgres

[Fiche récap](https://gist.github.com/enzoclock/548198b0ba090049a2c2bd7bbdb80ff5)

- `PostgreSQL` = Serveur (tourne en tâche de fond)
  - `Bases de données`
    - `Tables` (ex: `student`)
      - `Enregistrements` (ou ligne) (ex : `('Chuck', 'Noris', 42, 'chuck@noris.io')`)
  - `Utilisateurs` (ie, des "admins" de BDD)


- `psql` = Client CLI (client terminal)
  - `sudo -i -u postgres psql` : se connecter à Postgres en tant que utilisateur `postgres` (super admin)
  - `psql -U <user> -d <database>` : se connecter à une base `<database>` en tant qu'utilisateur `<user>` (si le nom d'utilisateur est le meme que celui de la database alors on peut omettre l'option -d)
  - `\c` : pour savoir sur quelle base on est placé
  - `\c <dbname>` : changer de base de données courante
  - `\l` : lister les bases de données
  - `\du` : lister les utilisateurs de Postgres
  - `\dt` : lister les tables de la BDD courante
  - `SELECT *` : lister les enregistrements d'une table


### Exécuter un fichier `.sql` : 

- Depuis bash : `psql -U <user> -d <database> -f <chemin_du_fichier>`
- Depus la psql : `\i <chemin_du_ficher>` (attention, vérifier bien que la base courante est la bonne)

### Créer un utilisateur et une base de données pour notre projet `oquiz`

- Se connecter en tant que super admin : 
  - `sudo -i -u postgres psql`

- Créer un utilisateur (admin) : 
  - `CREATE ROLE oquiz WITH LOGIN PASSWORD 'oquiz';`
    - équivalent de : `CREATE USER oquiz WITH PASSWORD 'oquiz';` (raccourci)

- Créer une base de données : 
  - `CREATE DATABASE oquiz WITH OWNER oquiz;`

- Vérification : 
  - `\l` (lister les BDD) & `\du` (lister les users)


### En cas de problème, dans le cadre d'Oclock (que des données de tests !) 

- Supprimer votre BDD : 
  - `DROP DATABASE oquiz;`

- Supprimer votre utilisateur : 
  - `DROP ROLE oquiz;`

- Et re-créer les deux !

### Pratique

On veut créer 2 scripts: `npm run db:create` et `npm run db:populate` pour se faciliter la création et l'insertion de fausses données dans la BDD.