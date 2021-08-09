// imports
const prompt = require("prompt-sync")();
 

// -----------------------------------------------------------practice-----------------------------------------------------------------------------------

let dogs = ["bulldog", "beagle", "labrador"];

let i = 0;
let allDogs = "";

while(i< dogs.length){
    allDogs += dogs[i] +" "
    i++
}
console.log(allDogs);


// -----------------------------------------------------------question1-----------------------------------------------------------------------------------

// Q1 print table ;
 let table = parseInt(prompt("Enter number to print table -> "))
let number = 0 ;
let power = 1;
while(number < 256 && power <= table){
    number = 2*power; 
    console.log(`2*${power} = ${number}`);
    power = power + 1;
}
// -----------------------------------------------------------question2-----------------------------------------------------------------------------------
// Q2 extend till head or tail reaches 11 times;
headCount = 0;
tailCount = 0;
while((headCount < 11) && (tailCount < 11) ){
    flip = Math.floor(Math.random()*2);
    if (flip == 0 ){ headCount ++;}
    if (flip == 1 ){ tailCount++;}
}
console.log(`the head count is ${headCount}.`);
console.log(`the tail count is ${tailCount}.`); 
