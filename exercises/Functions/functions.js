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

const Nat = {
    name: "Natalia",
    occupation: "Front-End Developer",
    overTwentyOne: true,
    age: 25
}

const increaseAge = (person) => {
    //dot notation
    person.age += 1;
    console.log (`Hooray it's your ${person.age} birthdayyyyy`);
}

//now, call the function
increaseAge(Nat);