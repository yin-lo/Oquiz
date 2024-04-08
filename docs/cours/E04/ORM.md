## Object-Relational Mapping (`ORM`)

`ORM` = `Object-Relational Mapping`
- `Object` = `{}`
- `Relation` = `Table` (🇺🇸 SGBD / mot "mathématique" derrière la notin de table)
- `Mapping` = lien

`Design Pattern` pour accéder à la BDD (`DAL`). Découvrons ensemble un ORM.

Il en existe pleins : 
- `Sequelize`
- `Prisma`
- `Mongoose` (~ ODM)


## Sequelize

[Documentation](https://sequelize.org/)

### Installation

Il faut installer `sequelize` + `pg` (driver)

### Créer notre client de connexion à la BDD

```js
// sequelize-client.js
require("dotenv/config");

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL);

module.exports = sequelize;
```

### Créer notre premier modèle

```js
// Levels.js

const sequelize = require("./sequelize-client");
const { Model, DataTypes } = require("sequelize");

class Level extends Model {}

Level.init({
  name: {
    type: DataTypes.STRING
    allowNull: false
  }
}, {
  sequelize,
  tableName: "level"
});

module.exports = Level;
```

Note : à ce stade, une pratique est de ne PAS définir les clés étrangères, on les fera à part ! (demain)

### Tester notre modèle

```js
// Penser à tester directement le modèle rapidos dans le fichier "pour voir"
Level.findAll().then(res => console.log(res));
```


### Avantages d'un ORM 

- Fait gagner un temps fou ! Plus besoin du `dataMapper`
- Pas besoin de taper les requêtes SQL : l'ORM fait la requête à notre place
- Les modèles nous présentent un grand nombre de fonctions à notre dispo : `findAll`, `findByPk`, `findOrCreate`, `create`, `update`, `destroy`...
- En cas de panique : `sequelize.query(REQUETE_SQL)` pour faire nos requêtes à la main !
- La syntaxe des query en JS est plus pratique, notamment pour les associations (`JOINTURE`)
- On peut même se passer du fichier `create_tables.sql` en créant directement les tables en JS à l'aide Sequelize ! (`S06`)

### Inconvénients d'un ORM

- Moins de contrôle sur les requêtes sous jacente
  - on ne choisit pas la requête SQL passées en BDD
- L'ORM rajoute des validations et des contrôles complémentaires
  - par exemple, avant de faire la requête, il fait potentiellement quelques `if` en plus en JS
- Il ajoute des fonctionnalités dont on pourrait se passer dans nos cas d'usages simples.