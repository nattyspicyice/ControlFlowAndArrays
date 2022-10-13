// //console.log("hello world")

//solution 1 (with a function)
function test(num1) {
    if(num1 > 0) {
        console.log("postive");
    } else if(num1 < 0){
        console.log("negative");
    } else if (num1=0){
        console.log("not positive nor negative")
    } else {
        console.log("that is not a number")
    }
} 

// //solution 2 (without a function)
let num = 0;

if(num > 0){
    console.log("positive")
} else if(num < 0) {
    console.log("negative")
} else {
    console.log("not negative or positive")
}

// //ACCESS GRANTED solution
const allowedAge = 18;

if (allowedAge >=18) {
    console.log("access granted. welcome aboard")
} else {
    console.log ("you are too young to access this content")
}

//Nested if/else statement
let number = 101;

if(number === 0){
    console.log("The number is zero")
} else if (number>0) {
    if(number>100) {
        console.log("The number is positive and greater than 100");
    } else {
        console.log("The number is positive but is less than 100")
    }
} else {
    console.log("The number is negative")
}
//Grading Exercise
test(54)

function test(grade) {
    if(grade >= 90) {
        console.log("A");
    } else if(grade < 90 && grade >= 80){
        console.log("B");
    } else if (grade < 80 && grade >= 70){
        console.log("C");
    } else if (grade < 70 && grade >= 55){
        console.log("D");
    } else if (grade < 55){
        console.log("F");
    }
}