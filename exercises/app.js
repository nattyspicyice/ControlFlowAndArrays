//console.log("hello world")
//solution 1 (with a function)
function test(num) {
    if(num > 0) {
        console.log("postive");
    } else if(num < 0){
        console.log("negative");
    } else if (num=0){
        console.log("not positive nor negative")
    } else {
        console.log("that is not a number")
    }
}
//calling a function
test (-5); //negative
test(10); // positive
test (0); // that is not a number

//solution 2 (without a function)
let num = 0;

if(num > 0){
    console.log("positive")
} else if(num < 0) {
    console.log("negative")
} else {
    console.log("not negative or positive")
}

//ACCESS GRANTED solution
const allowedAge = 18; //change this number//

if (allowedAge >=18) {
    console.log("access granted. welcome aboard")
} else {
    console.log ("you are too young to access this content")
}