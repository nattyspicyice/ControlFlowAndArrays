// console.log(one ());

//function declaration

// function one (){
//     return 'one'
// }

// one(); //calling a function

// //function expression
// const two =() => {
//     return 2;
// }

// const shortenedTwo = () => 2;

///

    // const Nat = {
    //     name: "Natalia",
    //     occupation: "Front-End Developer",
    //     overTwentyOne: true,
    //     age: 25
    // }

    // const increaseAge = (person) => {
    //     //dot notation
    //     person.age += 1;
    //     console.log (`Hooray it's your ${person.age} birthdayyyyy`);
    // }

    // //now, call the function
    // increaseAge(Nat);

// let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript");

// function getDevObject(name) {
//     let skills = [];

//     for (let i = 1; i < arguments.length; i++) {
//         skills.push(arguments[i]);
//     }

//     return {
//         devName: name,
//         jobSkills: skills
//     }
// }
// console.log(getDevObject(maria));

const sayName = (name) => {
    // console.log('Hello my name is ' + name); //concatination
    console.log(`Hello my name is ${name}`); //interpolation
}

sayName("Bob");
sayName("Tina");
sayName("Louise");
sayName("Gene");
sayName("Linda");

const calculateAreaOfSquare = (length, height) => {
    let sqft = length * height;
    console.log(`My square or rectangle is ${sqft} square feet`);
}

calculateAreaOfSquare(38,18);
////
const caclulateAreaOfTriangle = (width, height) => {
    let sqft = width * height * 0.5;
    console.log(`The area of a triangle with a width of ${width} and a height of ${height} is ${sqft} square units.`)
}
caclulateAreaOfTriangle(12,12);
///
const caclulateAreaOfCircle = (radius) => {
    let sqft = radius * radius * 3.14;
    console.log(`The area of a cirle with a radius of ${radius} is ${sqft} square units.`)
}
caclulateAreaOfCircle(12);
///
const planetHasWater = (planet) => {
    if (planet = "Mars") {
        console.log()
    }
}