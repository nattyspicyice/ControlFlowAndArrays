//OBJECT
// const myCar = {
//     make: "Toyota",
//     model: "Solara",
//     year: 2001,
//     nickName: "Stanley",
//     isRunning: false,
// }
// console.log(myCar);
// // to access specific properties (this is called dot notation)
// console.log(myCar.nickName);

// //ARRAY
// const groceryList = ["coffee", "caramel creamer", "lactose free milk"];

// groceryList[0] //first
// groceryList[1] //second

// const milk = {
//     hasLactose: false,
//     size: "one gallon",
// }
///
///Building a house///
// const house ={
//     door: 9,
// }
// house.window = 30; //add a property
// house.bathrooms = 7;
// house.hasGarden = true;

// console.log(house);

// house.bathrooms = 6; // to update a property
// console.log(house);

// const myPet = {
//     name: "Cooper",
//     age: 7,
//     favoriteThings: ["yelling", "zoomies", "snuggles"],
//     canSpeakFrench: "Probably",
//     canSolveRubiksCube: "Most definitely"
// }

// console.log(myPet);
///

// const obj = {
//     salutation: "hi",
//     count: 4
// }

// if (obj.salutation === "hi") {
//     console.log('ok');
// }

// for (let i=0; i < obj.count; i++) {
//     console.log(i);
// }

// let result = obj.hasOwnProperty('salutation');
// console.log(result);

//PRACTICE USING CLASSES

class Vehicle {
    constructor (vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
    }
}

const myCar = new Vehicle("K45739123001", "Toyota", "Solara");

console.log(myCar);

