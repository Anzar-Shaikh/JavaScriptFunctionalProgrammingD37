// imports 
const prompt = require("prompt-sync")();
// -----------------------------------------------------------question1-----------------------------------------------------------------------------------

// 1 - to get minimum of 3 random numbers
let num1 = Math.floor(Math.random()*990)+10;
let num2 = Math.floor(Math.random()*990)+10;
let num3 = Math.floor(Math.random()*990)+10;
let num4 = Math.floor(Math.random()*990)+10;
let num5 = Math.floor(Math.random()*900)+10;
let samllNumber = 999;
console.log(num1+" " + num2+" "  + num3+" "  + num4+" "  + num5)
if (num1 < samllNumber ){ samllNumber = num1};
if (num2 < samllNumber ){ samllNumber = num2};
if (num3 < samllNumber ){ samllNumber = num3};
if (num4 < samllNumber ){ samllNumber = num4};
if (num5 < samllNumber ){ samllNumber = num5};
console.log("the smallest number among above 5 is "+samllNumber) ;

 
// -----------------------------------------------------------question2-----------------------------------------------------------------------------------


let  month =  parseInt(prompt("enter month = "));
let day = parseInt(prompt("Enter day = "));
if ((month <=6) && (day <= 20)){
    console.log(true);

}else{ console.log(false)}


const number = prompt("Enter number = ")

switch (Number (number)) {
    case 1:
        console.log("Units");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("Ten thousands");
        break;
    case 100000:
        console.log("Hundred Thousands / Lakh");
        break;
    default:
        console.log("Enter correct number")    
}
 
// -----------------------------------------------------------question3-----------------------------------------------------------------------------------

// Q3 to check if it is a leap year;
 const year = parseInt(prompt("Enter year = "));

if (( year % 4 == 0 ) && ( year % 100 != 0) || (year % 400 == 0) ){
    console.log("this is a leap year");
}  else console.log("this is not a leap year");

// -----------------------------------------------------------question4-----------------------------------------------------------------------------------

// Q4 flip coin
let flip = Math.floor(Math.random()*2);

if (flip == 1){
    console.log("Head");
}else {console.log("Tail")};

