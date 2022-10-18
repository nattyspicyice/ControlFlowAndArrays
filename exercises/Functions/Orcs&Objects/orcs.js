// const adventurer = {
//     name: "Link",
//     hitpoints: 80,
//     belongings: ["sword", "potion", "shield"],
//     companion: {
//         name: "Epona",
//         type: "horse",
//         companion: {
//             name: "Zelda",
//             type: "Princess",
//             belongings: ["crown", "Master Sword", "Apples for Epona"]
//         }
//     }
// }
// //to access a specific belongings, use bracket notation
// console.log(adventurer.belongings[0]);

// //to find the amount of things in your inventory aka find the length of the array
// console.log(adventurer.belongings.length);

// //to iterate over an array that is within an object
// for(let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// //to access the companion using dot notation
// console.log(adventurer.companion);

// //to access the companion's name using dot notation
// console.log(adventurer.companion.name);

// //to access the companion's companion
// console.log(adventurer.companion.companion);

// //to access the Master Sword
// console.log(adventurer.companion.companion.belongings[1]);


// const movies = [
//     {title: "Spirited Away"},
//     {title: "Interstellar"},
//     {title: "21 Jump Street"}
// ];

// console.log(movies); //my array of objects
// console.log(movies[0]) //first object in my array
// console.log(movies[0].title)//the title of the first object

// for(let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
// }

//accessing an array list item within an object
// const foo = {
//     someArray: [1, 2, 3],
//     someObject: {
//         someProp: "funny"
//     },
//     someMethod: () => {
//         console.log("inside of method");
//     }

// }

// console.log(foo.someArray[0]);
// console.log(foo.someObject.someProp); // funny
// console.log(foo.someArray);
// console.log(foo.someArray[0]); // 1
// console.log(foo.someMethod());

//storing functions within an array
// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log("fun")
//     }
// ];

// console.log(foo[2]());


//creating a class
class Character { //class name is capitalized
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.eyes = eyes;
        this.hair = hair;
        this.name = name;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs
    }
    greet(otherCharacter) {
        console.log("hi " + otherCharacter + "!");
    }
    smite() {
        console.log("I smite thee");
    }
}
const player1 = new Character("Nat", 25, "green", "dirty blonde", true, true);
const enemy1 = new Character();

console.log(typeof player1); //tells you we just created a new objects
console.log(player1.greet("Bob"));
console.log(player1.smite());
console.log(enemy1.greet("Bill"));
console.log(player1);

 