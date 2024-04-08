const client = require("../../database/dbClient");
const CoreModel = require("./CoreModel");


class Level extends CoreModel {
    // Liste de toutes les proprietes
    name;

    // On defini le nom de la propriete static dans la classe fille (ici Level)
    static tableName = "level"

    // Il faut un constructeur qui sera appele lorsque l'on voudra creer un nouvel objet avec new Level(...)
    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }

    // Je veux ajouter un nouvel objet en BDD (dans ce cas la methode doit etre utiliser sur un objet)
    async create() {
        const result = await client.query(`
            INSERT INTO "level"
                ("name")
            VALUES
                ($1)
            RETURNING
                id
        `, [this.name])
        this.id = result.rows[0].id
    }

    // Je veux recuperer des donnees depuis la bdd (dans ce cas la methode doit etre utiliser directement sur la classe et on ajoute le mot cle static)
    static async getAll() {
        const result = await client.query(`SELECT * FROM level`);
        const rawLevels = result.rows; // [{}, {}, {}] on recoit un tableau d'objet "classique" (sans aucune contrainte)
        // On veut renvoyer un tableau d'objet provenant cette fois du moule "Level"
        let instancesOfLevel = []
        for (let i = 0; i < rawLevels.length; i++) {
            instancesOfLevel.push(new Level(rawLevels[i]))
        }
        return instancesOfLevel; // [Level {}, Level {}, Level {}]
    }

    sayHiObject() {
        console.log(`Bonjour je suis un objet qui s'appelle ${this.name} creer a partir de la classe`)
    }

    static sayHiClass() {
        console.log('Bonjour je suis une classe qui permet de creer des objets de type Level')
    }
}

module.exports = Level;