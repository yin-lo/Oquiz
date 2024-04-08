const Answer = require("./Answer");
const Level = require("./Level");
const Quiz = require("./Quiz");
const User = require("./User");

// const easy = new Level({ name: 'Facile', id: 47 })

// // console.log(easy)

// const onigiri = new Answer({ id: 42, description: 'Onigiri', question_id: 18 })

// console.log(onigiri)

// const harryP = new User({
//     id: 94,
//     email: 'harry.potter@hogwarts.io',
//     password: '1234123456789',
//     firstname: 'Harry',
//     lastname: 'Potter'
// })

// console.log(harryP.password) // ==> renvoi la valeur du password
// harryP.password = 'nouveauPassword' // ==> affecte une nouvelle valeur a la propriete
// console.log(harryP.password) // ==> renvoi la valeur du password

// const superQuiz = new Quiz({ id: 237, title: 'Mon super quiz', description: 'blabla', author_id: 143 })

// console.log(superQuiz);

async function test() {
    const users = await User.findAll();
    // console.log(users)

    // const chuckNorris = await User.findById(300)
    // console.log(chuckNorris);

    // const chuckNorris = await User.findById(3);
    // console.log(chuckNorris);
    // chuckNorris.firstname = 'John'
    // chuckNorris.email = 'john@norris.io'
    // chuckNorris.update()

    // const virginie = new User({
    //     firstname: 'Virginie',
    //     lastname: "Lemaire",
    //     email: 'virginie3@oclock.io',
    //     password: '1234567890'
    // })
    // // On insert un le nouvel utilisateur creer en base de donnees
    // virginie.insert()

    // On recupere l'utilisateur 4
    const user4 = await User.findById(4);
    // On vient le supprimer
    user4.delete()
}

test()