class Pokemon{

    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
        this.showMore = function() {
            return "the name: "+ this.name + " type: " + this.type + "color: " + this.color ;   
        }
    }
}

const Pokemon1 = new Pokemon("Pikachu" , "electric" , "yellow");
const Pokemon2 = new Pokemon("Eevee" , "normal" , "brown");
const Pokemon3 = new Pokemon("Squirtle" , "water" , "blue");


const para1 = document.querySelector("#para1")
const para2 = document.querySelector("#para2")
const para3 = document.querySelector("#para3")

para1.innerHTML = Pokemon1.showMore();
para2.innerHTML = Pokemon2.showMore();
para3.innerHTML = Pokemon3.showMore();


