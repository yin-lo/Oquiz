const CoreModel = require("./CoreModel");
const client = require("../database/dbClient");


class User extends CoreModel {
    email;
    #password;
    firstname;
    lastname;

    // On defini le nom de la propriete static dans la classe fille (ici User)
    static tableName = 'user'

    constructor(obj) {
        super(obj);
        this.email = obj.email;
        this.password = obj.password;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
    }

    // Getter
    // Cette methode est la seule a pouvoir lire la propriete password
    get password() {
        return this.#password;
    }

    // Setter
    // Cette methode est la seule a pouvoir modifier la propriete password
    set password(newPassword) {
        if (newPassword.length < 8) {
            throw new Error('Le mot passe doit faire au minimum 8 caracteres')
        } else {
            this.#password = newPassword
        }
    }

    // On veut une methode statique permettant de recuperer tous les utilisateurs presents en BDD
    static async findAll() {
        const result = await client.query(`SELECT * FROM "user"`);
        // La BDD ne connait pas nos class, elle nous renvoit les resultats sous forme d'objet javascript classique (sans methode, sans propriete privee etc)
        const classicUsersFromDB = result.rows; // => [{}, {}, {}]
        // On veut transformer les objets classiques (sans methode, sans proprietee privee etc) en instance issue de notre classe (avec methodes, proprietees privees etc)
        const intancesOfUsers = classicUsersFromDB.map((classicUser) => new User(classicUser)) // => [User {}, User {}, User {}]
        return intancesOfUsers;
    }

    static async findById(id) {
        const result = await client.query(`SELECT * FROM "user" WHERE "id"=$1`, [id])
        const classicUserFromDB = result.rows[0]
        if (!classicUserFromDB) {
            return null;
        }
        const instanceOfUser = new User(classicUserFromDB)
        return instanceOfUser;
    }

    static async findByEmail(email) {
        const result = await client.query(`SELECT * FROM "user" WHERE "email"=$1`, [email])
        const classicUserFromDB = result.rows[0]
        if (!classicUserFromDB) {
            return null;
        }
        const instanceOfUser = new User(classicUserFromDB)
        return instanceOfUser;
    }

    async update() {
        const query = `
            UPDATE 
                "user"
            SET
                "firstname" = $1,
                "lastname" = $2,
                "email" = $3,
                "password" = $4
            WHERE
                id = $5
        `
        const values = [this.firstname, this.lastname, this.email, this.password, this.id]
        const result = await client.query(query, values)
        if (result.rowCount === 1) {
            return true
        } else {
            return false
        }
    }

    async insert() {
        const result = await client.query(`
            INSERT INTO "user"
                ("firstname", "lastname", "email", "password")
            VALUES
                ($1, $2, $3, $4)
            RETURNING
                id
        `, [this.firstname, this.lastname, this.email, this.password])

        console.log(result)
        this.id = result.rows[0].id
    }

    async delete() {
        const result = await client.query(`
        DELETE FROM "user" WHERE id = $1`, [this.id])
        if (result.rowCount === 1) {
            return true
        } else {
            return false
        }
    }
}

module.exports = User;