// imports-----------------------------------------------------------------------------------

const prompt = require("prompt-sync")();



// question1-----------------------------------------------------------------------------------
let digitToNumber = parseInt(prompt("enter number -> "))
if (digitToNumber == 1){
    console.log("one");
}
if (digitToNumber == 2){
    console.log("two");
}
if (digitToNumber == 3){
    console.log("three");
}
if (digitToNumber == 4 ){
    console.log("four");
}
if (digitToNumber == 5){
    console.log("five");
}
if (digitToNumber == 6){
    console.log("six");
}
if (digitToNumber == 7){
    console.log("seven");
}
if (digitToNumber == 8){
    console.log("eight");
}
if (digitToNumber == 9){
    console.log("nine");
}else{
    conalo .log("enter single digit number ")
}


// question2-----------------------------------------------------------------------------------

let number = parseInt(prompt("enter number -> "))

if (number == 1 ){
    console.log(number + "Units");
}
if(number ==10){
    console.log("Tens");
}
if (number == 100){
    console.log("Hundreds");
}if (number == 1000){
    console.log("Thousands");
}
if (number == 10000){
    console.log("Ten thousands");
}
if (number == 100000){
    console.log("Lakh");
} if (numbe == 1000000){
    console.log("Ten Lakh");
}if (number == 10000000){
    console.log("Crore");
}if (number == 100000000){
    console.log("Ten Crore");
}else{
    console.log ("enter proper number  ")
}

// question3-----------------------------------------------------------------------------------


let day = parseInt(prompt("enter number :-> "))
if (day == 1 ){
    console.log("sunday");
}
if (day = 2 ){
    console.log ("monday");
}
if (day == 3 ){
    console.log("tuesday");
}
if (day = 4 ){
    console.log ("wednesday");
}
if (day == 5 ){
    console.log("thursday");
}
if (day = 6 ){
    console.log ("friday");
}if (day == 7 ){
    console.log("saturday")
}else{
    console.log ("enter proper value")
}



// question4-----------------------------------------------------------------------------------

let Number1  = parseInt(prompt("Enter number 1 "));
let Number2 =  parseInt(prompt("Enter number 2 "));
let Number3 =  parseInt(prompt("Enter number 3 "));

let operation1 = (Number1 + Number2 + Number3);
console.log("the value of operation1 = "+operation1);
let operation2 = (Number3 + (Number1 / Number2));
console.log("the value of operation2 = "+operation2);
let operation3 = ((Number1 % Number2)+ Number3);
console.log("the value of operation3 = "+operation3);
let operation4 = ((Number1 * Number2 )+ Number3);
console.log("the value of operation4 = "+operation4);

let minimum = operation1;
if (operation2 < minimum){minimum = operation2;} 
else if (operation3 < minimum){minimum = operation3;}
else if (operation4 < minimum){minimum = operation4;}
console.log("the minimum value is -> "+ minimum)

let max = operation1;
if (operation2 > max){max = operation2;}
else if (operation3 > max){max = operation3;}
else if (operation4 > max){max = operation4;}
console.log("The maximum value is -> " + max);