

//---------------------------calss Pokemon------------------------

class Pokemon{

    constructor(name, type, color){

        this.name = name
        this.type = type
        this.color = color
    }

    showMore(){

        console.log("Pokemon name : " + this.name)
        console.log("Pokemon type : " + this.type)
        console.log("Pokemon color : " + this.color)
        console.log("")
    }
}


//--------------------------object-------------------------------------

const  Pokemon1 = new Pokemon("Bulbasaur", "electric", "yellow")
const  Pokemon2 = new Pokemon("Ivysaur", "normal", "brown")
const  Pokemon3 = new Pokemon("Venusaur", "water", "blue")

//--------------------------cal function-------------------------------

Pokemon1.showMore()
Pokemon2.showMore()
Pokemon3.showMore()