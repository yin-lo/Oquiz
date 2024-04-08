class CoreModel {
    // On peut rendre l'id prive
    #id;
    created_at;

    // Attribut de class
    static tableName; // => Cette propriete va pouvoir etre definie dans chacune des classe filles qui herite de CoreModel

    constructor(obj) {
        // Seul le constructeur aura le droit d'assigner la valeur de l'id lors de l'instanciation
        this.id = obj.id;
        this.created_at = new Date();
    }

    // On pourra lire la valeur de l'id de n'importe quelle objet grace au getter
    get id() {
        return this.#id;
    }

    // On a finalement besoin de pouvoir modifier l'id de nos objets, on ajoute donc un setter
    set id(value) {
        this.#id = value
    }

    static async findAll() {
        const result = await client.query(`SELECT * FROM ${this.tableName}`);
        // La BDD ne connait pas nos class, elle nous renvoit les resultats sous forme d'objet javascript classique (sans methode, sans propriete privee etc)
        const classicObjectsFromDB = result.rows; // => [{}, {}, {}]
        // On veut transformer les objets classiques (sans methode, sans proprietee privee etc) en instance issue de notre classe (avec methodes, proprietees privees etc)
        const intances = classicObjectsFromDB.map((classicUser) => new this(classicUser)) // => [User {}, User {}, User {}]
        return intances;
    }
}

module.exports = CoreModel;