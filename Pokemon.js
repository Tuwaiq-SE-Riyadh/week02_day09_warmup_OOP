class Pokemon {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
      
    }
    showMore(){
        return " Pokemon name: " + this.name + "type: " + this.type + "Colour: " + this.color ;
    }

};

const Pokemon1= new  Pokemon ("pikachu","electric", "yellow")
const Pokemon2 = new  Pokemon("Eevee", "normal", "brown")
const Pokemon3 = new Pokemon("Squirtle","wate", "blue")


console.log ( Pokemon1.showMore())
console.log ( Pokemon2.showMore())
console.log ( Pokemon3.showMore())