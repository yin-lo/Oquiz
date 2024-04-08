// const Level = require("./Level");
const Question = require('./app/models/Sequelize/Question');

const { Op } = require("sequelize");

async function test() {
    // const levels = await Level.findAll()
    // Utiliser la methode toJSON sur la reponse de sequelize pour afficher les resultats de maniere plus "friendly"
    // console.log(levels.map(level => level.toJSON()));

    // (Autonomie) Listes differentes requetes a effectuees:
    // 1) Creation et ajout d'un nouveau niveau appele 'Ultra' en BDD
    // Ici le level va se creer peu importe ce qui existe deja (donc on va avoir des doublons)
    // const ultra = Level.create({ name: 'Ultra' })
    // On aurait pu passer par le methode findOrCreate pour ne creer l'element que si il n'existe pas deja
    // const ultra = Level.findOrCreate({name: 'Ultra'})

    // 2) Recuperer uniquement le niveau qui possede l'id 3
    // const lvl3 = await Level.findByPk(3);

    // On aurait pu utiliser findOne mais dans ce cas on est pas certain de recevoir le bon enregistrement (par exemple si plusieurs enregistrement ont le meme nom, on recevra toujours le premier)
    // Level.findOne({where: {
    //     name: 'Ultra'
    // }})

    // if (lvl3) {
    //     // 3) Modifier ce niveau pour changer son nom avec ce que vous voulez
    //     console.log(lvl3.toJSON())
    //     // On modifie la propriete que l'on souhaite
    //     lvl3.name = 'ce que je veux';
    //     // Et on vient la sauvegarder
    //     lvl3.save();
    // } else {
    //     console.log('Aucun enregistrement en base')
    // }
    // // 4) Lister tous les niveaux qui contiennent la lettre 'a' (insensible a la casse) 
    // const lvlWithLetterA = await Level.findAll({
    //     where: {
    //         name: {
    //             [Op.iLike]: '%a%'
    //         }
    //     }
    // })
    // console.log(lvlWithLetterA.map(lvl => lvl.toJSON()))
    const question = await Question.findAll({where: level_id = 1})
}


test()