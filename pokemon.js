
class Pokemon {

    constructor(name, type, color){

        this.name=name
        this.type=type
        this.color=color

        this.showMore= function(){
            return "Pokemon name: "+this.name+". His type: "+this.type+". His color: "+this.color;
        }

    }
}

const pokemon1 = new Pokemon("Pikachu", "electric ", "yellow")
const pokemon2 = new Pokemon("Eevee", "normal", "brown")
const pokemon3 = new Pokemon("Squirtle", "water", "blue")


console.log(pokemon1.showMore())
console.log(pokemon2.showMore())
console.log(pokemon3.showMore())