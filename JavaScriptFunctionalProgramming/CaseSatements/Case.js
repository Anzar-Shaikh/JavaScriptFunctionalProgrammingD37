// imports

const prompt = require("prompt-sync")();


// -----------------------------------------------------------question1-----------------------------------------------------------------------------------

let inputNumber = parseInt(prompt("Enter number -> "));

switch (inputNumber){
    case 1:
       console.log("One");
        break;
    case 2:i 
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seve");
        break;
    case 8 :
        console.log("seven")
        break;
    case 9:
        console.log("nine")
        break;
    default :
    console.log("enter single digit value ");

}

// -----------------------------------------------------------question2-----------------------------------------------------------------------------------

let dayOfWeek = parseInt(prompt("Enter number -> ")) 
switch (dayOfWeek){
    case 1 :
        console.log("sunday");
        break
    case 2 :
        console.log("monday");
        break;
    case 3 :
        console.log("tuesday");
        break;
    case 4 :
        console.log("wednesday");
        break;
    case 5 :
        console.log("thursday");
        break;
    case 6 :
        console.log("friday");
        break;
    case 7 : 
        console.log("saturday");
        break;
    default:
        console.log("Enter correct values");
}

// -----------------------------------------------------------question3-----------------------------------------------------------------------------------
const number = parseInt(prompt('Enter a number to know the place value: '));

switch(number) {
    case 1:
        console.log(number + `'"Units"'`);
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
        console.log("Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
   case 100000000:
       console.log("Crore");
       break;
   case 1000000000:
       console.log("Ten Crore");
       break;
   case 10000000000:
       console.log("Arab");
       break;
   case 100000000000:
       console.log("Ten Arab");
       break;   
    default:
        console.log("Wrong input!");
        break;
}


// -----------------------------------------------------------question4-----------------------------------------------------------------------------------
console.log ("enter what you eant to do = ");
let select = parseInt(prompt("1-feet to inch 2-inch to feet 3-feet to meter 4-meter to feet "));
switch(select){
    case 1 :
        let feet = parseInt(prompt("Enter value in feet -> "))
        console.log("the converted value in inch = "+ feet*12);
        break;
    case 2 :
        let inch = parseInt(prompt("Enter length in inch -> "))
        console.log("The converted value in feet is = "+ inch/12);
    case 3 :
        let feet = parseInt(prompt("Enter lenght in feet -> "))
        console.log("the converted value in meter is = "+ feet/3.25);
    case 4 :
        let meter = parseInt(prompt("Enter value in meter -> "));
        console.log("the converted value in feet is =" + meter*3.28);
    default :
    console.log("please select correct oprtion");
}
