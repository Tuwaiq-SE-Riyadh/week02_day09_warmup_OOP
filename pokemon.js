//class 
// name, type and color.
class Pokemon {
    constructor(name, type, color) {
        this.name = name
        this.type = type
        this.color = color
    }



    showMore() {
        console.log('Name: ' + this.name + " Type: " + this.type + " Color: " + this.color);
    }
}

//Create at least 3 Pokemon objects for example:
//object one is Pikachu and its type is electric and its color is yellow.
const p1 = new Pokemon('Pikachu', 'electric', 'yellow')
    //object two is Eevee its type is normal and color is brown.
const p2 = new Pokemon('Eevee', 'normal', 'brown')
    //object three is Squirtle its type is water and its color is blue.
const p3 = new Pokemon('Squirtle', 'water', 'blue')

p1.showMore()
p2.showMore()
p3.showMore()