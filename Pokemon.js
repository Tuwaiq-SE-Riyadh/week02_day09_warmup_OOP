class Pokemon {
    constructor(name, type, color) {
      this.name=name;
      this.type=type;
      this.color=color;
      
 
    }


    showMore() {
      console.log("The Pokemon name is "+this.name);
      console.log("The Pokemon type is "+this.type);
      console.log("The Pokemon color is "+this.color);
      console.log("")
    };
  }


  
  const p= new Pokemon("Pikachu","electric","yellow")
  const p2= new Pokemon(" Eevee ."," normal","brown")
  const p3= new Pokemon(" Squirtle ","water","blue")
  p.showMore()
  p2.showMore()
  p3.showMore()