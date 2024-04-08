// ===========================================
// Exercice en autonomie-cockpit
// ===========================================

// Prendre un fichier JS où vous voulez sur votre machine. Pour l'exécuter 'node chemin_vers_ce_fichier.js'
// Penser à un petit console.log pour tester que vous êtes capable d'exécuter le fichier avant de coder ! 

/*
Coder une classe 'Vehicule'

Propriétés / Attributs :
`nbOfWheels` (number), `enginePower` (number), `isStarted` (boolean)

Méthodes :
- constructor(nbOfWheels, enginePower) // isStarted est 'false' par défaut
- start() // Passe isStarted à true
- stop() // Passe isStarted à false
- makeNoise() // Si isStarted est true, logger 'vrooooom', sinon ne fait rien.
- toString() // RETOURNE "Véhicule à X roues, de puissance Y, {est démarré | n'est pas démarré}."
- boostEngine(power); // (Bonus) Pour ajouter la valeur power à la puissance du moteur, capé à 2000 max au cas où ça dépasserait !

Pour tester (si possible avant d'avoir terminer d'écrire toutes les méthodes => tester progressivement !)
Instancier quelques véhicules pour tester !
- une ferrari
- une clio 3
- une moto
- une trotinette electrique
*/

