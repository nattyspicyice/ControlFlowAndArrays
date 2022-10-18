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
// class Character { //class name is capitalized
//     constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
//         this.legs = 2;
//         this.arms = 2;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.name = name;
//         this.lovesCats = lovesCats;
//         this.lovesDogs = lovesDogs || false;
//     }
//     //setter method
//     setHair(hairColor){
//         this.hair = hairColor;
//     }
//     //setter method ^
//     greet(otherCharacter) {
//         console.log("hi " + otherCharacter.name + "!");
//     }
//     classyGreeting(otherClassyGreeting) {
//         console.log("Greetings" + otheClassyCharacter )
//     }
//     smite() {
//         console.log("I smite thee");
//     }
// }
// const player1 = new Character("Nat", 25, "green", "dirty blonde", true, true);
// const enemy1 = new Character("Sauron", 10000, "red");

// // console.log(typeof player1); //tells you we just created a new objects
// // console.log(player1.greet("Bob"));
// // console.log(player1.smite());
// // console.log(enemy1.greet("Bill"));


// player1.setHair('pink');
// console.log(player1);


// class Hobbit extends Character {
//     constructor(name, age, eyes, hair){
//         super(name, age, eyes, hair);
//         this. skills = ['thievery', 'speed', 'willpower'];
//     }
//     steal() {
//         console.log("Let's get away!");
//     }
//     //overrides previous greet functionality
//     greet (otherCharacter) {
//         console.log(`Hobbit says hello to ${otherCharacter}`)
//     }
//     smite () {
//         super.smite();
//         this.steal();
//     }
// }

// const frodo = new Hobbit("Mr Baggins", 22, "blue", "brown");
// // console.log(frodo);
// // console.log(frodo.smite());
// // console.log(frodo.steal());
// // console.log(frodo.greet("sam"));

// console.log(frodo.smite());


class Car {
    constructor(maker, serialNumber) {
        this.serialNumber = serialNumber;
        this.maker = maker;
    }
    drive() {
        console.log('vroom vroom');
    }
}
//factory class
class Factory {
    constructor(company) {
        this.company = company;
        this. cars = [];
    }
    generateCar() {
        const newCar = new Car(this.company, this.cars.length);
        this.cars.push(newCar);
    }
    findCar(index) {
        return this.cars[index];
    }
}
const tesla = new Factory('Telsa');
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
console.log(tesla);
console.log(tesla.findCar(0));

const porche = new Factory('Porche');
porche.generateCar();
porche.generateCar();
porche.generateCar();
porche.generateCar();
console.log(porche);
console.log(porche.findCar(1));