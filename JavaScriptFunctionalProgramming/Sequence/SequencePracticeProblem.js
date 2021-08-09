
// -----------------------------------------------------------question1-----------------------------------------------------------------------------------

// to get a single digit number
let number = Math.floor(Math.random()*10) ;
console.log("the single digit number is = "+ number);

// -----------------------------------------------------------question2-----------------------------------------------------------------------------------

// 2 to ger a dice number betwee 1 - 6

let dieNum = Math.floor(Math.random() * 6 ) + 1;
console.log("the die number is = " + dieNum)

// -----------------------------------------------------------question3-----------------------------------------------------------------------------------

// 3 add two random dice number & print result 

let diceNum1 = Math.floor(Math.random()*6) + 1;
let diceNum2 = Math.floor(Math.random()*6) + 1;
let sum2die = diceNum1+diceNum2;
console.log("the sum of two dice number is = " + sum2die); 

// -----------------------------------------------------------question3-----------------------------------------------------------------------------------

// 4 five random 2 digit value & then their sum & average.

let num1 = Math.floor(Math.random()*11)+10;
let num2 = Math.floor(Math.random()*11)+10;
let num3 = Math.floor(Math.random()*11)+10;
let num4 = Math.floor(Math.random()*11)+10;
let num5 = Math.floor(Math.random()*11)+10;
let sum = num1+num2+num3+num4+num5;
console.log("the sum of 5 random values = "+sum);
console.log("the average of 5 values = " + sum/5);

// -----------------------------------------------------------question4-----------------------------------------------------------------------------------

// 5 unit conversion 
console.log("the converted length of 42 inch in feet is "+ 42/12);
console.log("the converted area of 60 * 40 sqfeet area into sqmeter is  " + ((60*40))/10.764);
console.log("the converted area of 60 * 40 sqfeet area of 25 plots into sqmeter is " +((60*40)/10.764));
