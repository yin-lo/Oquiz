const { Dog, Cat } = require("./heritage-class");

const hachiko = new Dog({ color: "white", size: 80, isTrainable: true });
const garfield = new Cat({ color: "orange", size: 45 });
const savageDog = new Dog({ color: "black", size: 100, isTrainable: false });

console.log(hachiko)
console.log(garfield)
console.log(savageDog)

savageDog.bark()
savageDog.eat()