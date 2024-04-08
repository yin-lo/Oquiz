# QCM 3

❌✅

`Active Record` est : 
- ❌ l'inverse du `dataMapper` ==> Plutot une alternative au dataMapper (on pourrait faire l'un ou l'autre)
- ✅ un `design pattern` pour accéder à la BDD 
- ❌ une méthode d'instance ==> (!= methode de classe)
- ❌ "Tu connais pas Active Record ? C'est un groupe, ils étaient number one"

```js
const objClassique = { nom: 'Harry' }

const instanceDeClasse = new Wizard({nom: 'Harry'})
instanceDeClass.forbiddenSpell()
instanceDeClass.save()

Wizard.sayHello()

User.findAll()
```

`MVC` veut dire : 
- ✅ Model View Controller
- ❌ Major Version Control => Plus proche de Git que d'express
- ❌ Merguezed Versionned Couscous


Une **méthode de classe** se définit avec le mot clé :
- ✅ `static` 
- ❌ `class` => Sert a definir une nouvelle classe (qui elle meme peut contenir des methodes d'instance et des methodes de class)
- ❌ `public`
- ❌ aucun des trois

```js
class Level {
    name;

    constructor(obj) {
        this.name = obj.name
    }

    static findAll()

    save()
}

```


Pour appeler le contructeur de la classe parente depuis la classe enfant, on utilise le mot clé : 
- ❌`constructor()` => La methode `constructor` de la classe en cours
- ✅ `super()`
- ❌`parent()`
- ❌`ohViensLaQuandJeTappelle()`
