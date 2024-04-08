// On defini notre classe avec le mot cle 'class'
// Une contrainte vient d'etre ajoutee, on veut absolument qu'un vehicule possede au moins une roue
class Vehicule {
    // Liste des proprietes de la classe 
    #nbOfWheels; // En ajoutant un # devant le nom de la propriete on la passe en privee
    #enginePower;
    #isStarted;

    // Constructeur (methode appelle chaque fois que l'on instancie un objet a partir de notre classe)
    constructor(nbOfWheels, enginePower) {
        // Si on a bien au moins une roue pas de pb
        this.nbOfWheels = nbOfWheels; // Si on fait reference a la propriete sans le #, JS va chercher le setter associe a cette proprietee
        this.#enginePower = enginePower;
        this.#isStarted = false;
    }

    // Le getter sera la seule et unique methode capable de lire la valeur de la propriete nbOfWheels
    get nbOfWheels() {
        return this.#nbOfWheels;
    }

    // Le setter sera la seule et unique methode capable de modifier la valeur de la propriete nbOfWheels. Donc si on ajoute des contraintes ici, on s'assure qu'aucune valeur indesirable ne puisse etre mise dans le nombre de roue (dans notre cas une valeur <= 0)
    set nbOfWheels(value) {
        if (value > 0) {
            this.#nbOfWheels = value;
            // Sinon on decide ce que l'on doit faire (ici on veut ajouter une roue au vehicule)
        } else {
            console.log('Impossible de definir un vehicule avec un nombre de roue <= 0')
            this.#nbOfWheels = 1;
        }
    }

    // Je veux une methode qui me permet de demarrer mon vehicule
    start() {
        this.#isStarted = true;
    }

    // une methode pour arreter le vehicule
    stop() {
        this.#isStarted = false;
    }

    makeNoise() {
        if (this.#isStarted) {
            console.log('Vrooom !');
        } else {
            console.log('Impossible de faire vroom sur un vehicule eteint')
        }
    }

    toString() {
        if (this.#isStarted) {
            console.log(`Véhicule à ${this.#nbOfWheels} roues, de puissance ${this.#enginePower}, est démarré.`)
        } else {
            console.log(`Véhicule à ${this.#nbOfWheels} roues, de puissance ${this.#enginePower}, n'est pas démarré.`)
        }
    }
}

const clio = new Vehicule(0, 60);
const ferrari = new Vehicule(4, 250);
const moto = new Vehicule(2, 120);

// Lorsque l'on a une propriete privee, la propriete doit s'ecrire #nomDeLaPropriete
// Probleme etant donne qu'elle est privee, on ne peut ni lire, ni changer sa valeur depuis l'exterieur de la classe
// Donc impossible d'ecrire
// console.log(clio.#nbOfWheels) => Lire la valeur
// clio.#nbOfWheels = 3 => Changer la valeur
// Pour cela, on va utiliser le getter et le setter
// Le getter s'appelle de la maniere suivante: clio.nbOfWheels (fait reference a get nbOfWheels())
// Le setter s'appelle de la maniere suivante: clio.nbOfWheels (fait reference a get nbOfWheels())

// Ici on appelle donc le getter
console.log(clio.nbOfWheels);

// Ici on appelle donc le setter
clio.nbOfWheels = -10

// const monVehiculeBizarre = new Vehicule(-10, 50000);
// Pour le moment (avec les attributs publics, on est capable d'acceder a n'importe quelle proprietee de n'importe quel vehicule a l'exterieur de la classe)
// Mon constructeur n'accepte pas la valeur -10, il va donc changer le nombre de roue en 1
// console.log(monVehiculeBizarre.nbOfWheels)
// On peut egalement modifier n'importe quelle propriete de n'importe quel vehicule cree a partir de notre classe
// monVehiculeBizarre.#nbOfWheels = -10;
// console.log(monVehiculeBizarre.#nbOfWheels)

// console.log(ferrari.enginePower);
