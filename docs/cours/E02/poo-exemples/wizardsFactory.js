// // J'aimerai creer le socier Harry Potter et qu'il puisse se presenter dans la console
// const harryP = {
//     firstname: 'Harry',
//     lastname: 'Potter',
//     age: 11,
//     hello() {
//         console.log('je suis ' + this.firstname + ' ' + this.lastname)
//     }
// }
// // Je veux qu'Harry Potter se presente
// harryP.hello()

// // J'aimerai creer la sociere Hermione Granger et qu'elle puisse se presenter dans la console
// const hermioneG = {
//     firstname: 'Hermione',
//     lastname: 'Granger',
//     age: 11,
//     hello() {
//         console.log('je suis ' + this.firstname + ' ' + this.lastname)
//     }
// }

// On a maintenant creer une fonction qui nous permet de generer autant de Sorcier que l'on souhaite
function wizardFactory(firstname, lastname, age) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age,
        hello() {
            // console.log('je suis ' + this.firstname + ' ' + this.lastname + ' et j ai ' + this.age)
            console.log(`je suis ${this.firstname} ${this.lastname} et j ai ${this.age}`)
        },
        forbidenSpell() {
            console.log('Avadaaa Kedavraaa !');
        }
    }
}

// Avec ma wizardFactory, je veux creer un nouveau sorcier qui s'apelle Ron Weasley
const harryP = wizardFactory('Harry', 'Potter', 11)
const hermioneG = wizardFactory('Hermione', 'Granger', 11)
const ronW = wizardFactory('Ron', 'Weasley', 10)
ronW.hello()
hermioneG.hello()
hermioneG.hello()

// On a ajouter le forbidenSpell a notre usine a sorcier. Tous les sorciers qui sont creer a partir de cette usine connaissent donc ce sort interdit !
harryP.forbidenSpell()