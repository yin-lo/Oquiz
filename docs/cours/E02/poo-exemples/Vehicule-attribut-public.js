// On defini notre classe avec le mot cle 'class'
class Vehicule {
    // Liste des proprietes de la classe
    nbOfWheels;
    enginePower;
    isStarted;

    // Constructeur (methode appelle chaque fois que l'on instancie un objet a partir de notre classe)
    constructor(nbOfWheels, enginePower) {
        this.nbOfWheels = nbOfWheels;
        this.enginePower = enginePower;
        this.isStarted = false;
    }

    // Je veux une methode qui me permet de demarrer mon vehicule
    start() {
        this.isStarted = true;
    }

    // une methode pour arreter le vehicule
    stop() {
        this.isStarted = false;
    }

    makeNoise() {
        if (this.isStarted) {
            console.log('Vrooom !');
        } else {
            console.log('Impossible de faire vroom sur un vehicule eteint')
        }
    }

    toString() {
        if (this.isStarted) {
            console.log(`Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, est démarré.`)
        } else {
            console.log(`Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, n'est pas démarré.`)
        }
    }
}

const clio = new Vehicule(4, 60);
const ferrari = new Vehicule(4, 250);
const moto = new Vehicule(2, 120);
ferrari.start()
ferrari.makeNoise()
ferrari.toString()