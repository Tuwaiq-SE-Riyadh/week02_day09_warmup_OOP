class Pokemon {
    constructor(name, type, color){
        this.name=name;
        this.type=type;
        this.color=color;
    }

    showMore()
    {
        console.log("Name: " + this.name + "  Type: " + this.type + "  Color: " + this.color)
    }
}

let objectOne = new Pokemon("Pikachu","electric","yellow")
let objectTwo = new Pokemon("Eevee","normal","brown")
let objectThree = new Pokemon("Squirtle","water","blue")
