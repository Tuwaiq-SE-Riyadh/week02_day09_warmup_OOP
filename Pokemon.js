class Pokemon{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }

    showMore(){
        console.log("Name :" + this.name + " | Type :" + this.type + " | Color :" + this.color);
    }

}

const pokemon1 = new Pokemon("Pikachu" , "Electric" ,"Yellow");

const pokemon2 = new Pokemon("Eevee" , "Normal" ,"Brown");

const pokemon3 = new Pokemon("Squirtle" , "Water" ,"Blue");

pokemon1.showMore();
console.log("---------------------------");
pokemon2.showMore();
console.log("---------------------------");
pokemon3.showMore();