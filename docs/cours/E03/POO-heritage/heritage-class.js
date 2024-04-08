class Animal {
    color;
    size;

    constructor(obj) { // {color, size, isTrainable}
        this.color = obj.color;
        this.size = obj.size;
    }
    drink() {
        console.log("slurp slurp");
    }
    eat() {
        console.log("nom nom nom");
    }
}

class Dog extends Animal {
    isTrainable;

    constructor(obj) { // {color, size, isTrainable}
        super(obj);
        this.isTrainable = obj.isTrainable
    }

    bark() {
        console.log("waf waf");
    }
}

class Cat extends Animal {
    constructor(obj) {
        super(obj);
    }

    mew() {
        console.log("mew mew");
    }
}

class Girafe extends Animal {
    constructor(obj) {
        super(obj);
    }

    mew() {
        console.log("mew mew");
    }
}

module.exports = { Dog, Cat }