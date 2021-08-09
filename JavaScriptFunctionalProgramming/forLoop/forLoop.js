// imports

 const prompt = require("prompt-sync")();

let dogs = ["bulldog","begal","labrador"];

let alldogs= "";
for(var i = 0 ;i < dogs.length; i++){
    alldogs += dogs[i] + " ";
}
console.log("OLD : "+ alldogs);

// -----------------------------------------------------------question1-----------------------------------------------------------------------------------

 let table = parseInt(prompt("Enter power -> "));

for (var i = 1 ; i<= table ; i++){
    console.log("2 * "+ i +" = " + Math.pow(2,i));
}

// -----------------------------------------------------------question2-----------------------------------------------------------------------------------


let harmonicNumber = parseInt(prompt("Enter the number to print harmonic number upto -> "));
var singleLine = "";
for(var i = 1 ; i <= harmonicNumber ;i++){
   singleLine += "1/"+i+" + ";
}
console.log(singleLine);

// -----------------------------------------------------------question3-----------------------------------------------------------------------------------


const startNumber = parseInt(prompt('Enter start number: '));
const endNumber = parseInt(prompt('Enter end number: '));

console.log(`The prime numbers between ${startNumber} and ${endNumber} are: `);

let array = "";

for (let i = startNumber; i <= endNumber; i++) {
    let isPrime = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = 1;
            break;
        }
    }

    if (i > 1 && isPrime == 0) {
        array += i+ " ";
    }
}
console.log(array)


// -----------------------------------------------------------question4-----------------------------------------------------------------------------------


let input = parseInt(prompt("Enter number to find factorial -> "))

if (input == 0){
    console.log("Factorial of zero = 1");    
}else if (input == 1){
    console.log(`the factorial is = ${0}`);
}
else{
    let fact = 1 ;
    for (let i = 2 ; i <= input ; i++){
        fact = fact*i;
    }
    console.log(`the factorial of ${input} is ${fact}.`);
}