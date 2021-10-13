// # ‏‏‏‏W02D04-OOP-Warmup
// ## Pokemon Object
// ![pokemon](https://miro.medium.com/max/2800/0*ZLujw1b18CnMFxFa.jpg)

// * Create a file Pokemon.js.


// * Within Pokemon.js:
//     * Create class called Pokemon. 
//     * Each Pokemon object should have the following properties: name, type and color.
//     * Create function in the class called showMore() it should console log each object information.  
//     * Create at least 3 Pokemon objects for example:
//         * object one is Pikachu and its type is electric and its color is yellow.
//         * object two is Eevee its type is normal and color is brown.
//         * object three is Squirtle its type is water and its color is blue. 
//     * excute the showMore() function for each object. 



  
class Pokemon{
    constructor (name, type, color){
        // * Each Pokemon object should have the following properties: name, type and color.
        this.name = name
        this.type = type
        this.color = color
    }
    
    //     * Create function in the class called showMore() it should console log each object information.  
    //     * object one is Pikachu and its type is electric and its color is yellow.
    showMore(){
        return "The Name "+this.name+" and its type is "+this.type+" and its color is "+this.color;
    }
}
//         * object one is Pikachu and its type is electric and its color is yellow.
//         * object two is Eevee its type is normal and color is brown.
//         * object three is Squirtle its type is water and its color is blue. 
const obj1 = new Pokemon("Pikachu","electric","yellow")
const obj2 = new Pokemon("Eevee","normal","brown")
const obj3 = new Pokemon("Squirtle","water","blue")

const pokemons=[obj1, obj2, obj3]

//Create image 
show(pokemons[0])
show(pokemons[1])
show(pokemons[2])

// Heelper Function
function show(pokemons) {
    const p1 = document.createElement("p");
    p1.style.background ="pink"
        console.log("clicked");
        p1.innerText=pokemons.showMore()
    document.body.append(p1);
}
