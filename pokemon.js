class Pokemon {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }

    showMore() {
        console.log("name = " + this.name + ", type = " + this.type + ", color = " + this.color);
    }
}

pok1 = new Pokemon("Pikachu", "electric", "yellow");
pok2 = new Pokemon("Eevee", "normal", "brown");
pok3 = new Pokemon("Squirtle", "water", "blue");

pok1.showMore();
pok2.showMore();
pok3.showMore();