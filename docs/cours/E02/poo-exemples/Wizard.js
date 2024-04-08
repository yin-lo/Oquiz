// On defini une nouvelle classe avec le mot cle 'class'. Une classe c'est une usine a creer des objets qui auront la meme forme (structure)
// Comme par exemple, un moule a gateau. Vous pourrez creer autant de gateau que vous voulez grace a ce moule, mais ils auront tous la meme forme (mais pas la meme saveur)
class Wizard {
    // On dit que notre classe possede 3 proprietes (donc tous les objets issue de cette classe auront un prenom, un nom et un age)
    firstname;
    lastname;
    age;

    // Le constructor est la methode obligatoire qui sert lors de l'instanciation (la creation) d'un nouvel objet a partir de notre classe
    // En gros, quand on utilise le mot cle new Wizard c'est le constructeur qui est appelle
    constructor(firstname, lastname, age) {
        this.firstname = firstname; // 'this' represente l'objet courant (le sorcier que l'on est entrain de construire)
        this.lastname = lastname;
        this.age = age;
    }

    // On peut creer de nouvelles methodes qui seront disponible pour chacun des sorciers crees a partir de notre classe
    hello() {
        // On veut faire reference aux proprietes de l'objet courant on passe donc par l'utilisation du this
        console.log(`Bonjour je m'apelle ${this.firstname} ${this.lastname} et j'ai ${this.age} ans`)
    }

    forbiddenSpell() {
        console.log('Avadaaa Kedavraaa !')
    }
}

// On decide de creer un nouveau sorcier grace a notre usine a sorcier
// Un sorcier doit toujours avoir un prenom, un nom et un age
// Lors de la creation (instanciation) du nouveau sorcier il faut lui donner ces 3 informations
const harryP = new Wizard('Harry', 'Potter', 11);
// Lors que l'on utilise le mot cle new pour instancier un nouvel objet on fait en realiter appel a la methode 'constructor' de la class
harryP.forbiddenSpell()

const hermioneG = new Wizard('Hermione', 'Granger', 11);
hermioneG.forbiddenSpell()


module.exports = Wizard