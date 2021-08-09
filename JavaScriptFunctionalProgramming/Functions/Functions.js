

const prompt = require ("prompt-sync")();




// -----------------------------------------------------------question1-----------------------------------------------------------------------------------

let degC_To_DegF = function(degC){
    let degF = (degC *9/5)+32;

    return degF;
}
let degF_to_DegC = function(degF){
    let degC= (degF -32)*(5/9);
    return degC;
}

let selectio = parseInt(prompt("Enter what your want to do : 1- degC->degF , 2-degF->degC => "));
switch (selectio){
    case 1 :
        let degC = parseInt(prompt("enter temprature -> "));
        console.log(degC_To_DegF(degC));
        break;
    case 2 :
        let degF = parseInt(prompt("Enter temprature -> "));
        console.log(degF_to_DegC(degF));
        break;
    default:
        console.log("Enter proper value please ")        
}

// -----------------------------------------------------------question2-----------------------------------------------------------------------------------


let check = function(number){
    let originalNumber = number;
    let rem;
    let temp = 0 ;

    while (number > 0 ){
        rem = number % 10 ;
        temp =(temp*10) +rem;
        number = parseInt(number/10);
    
    }
    if (originalNumber == temp) {
        console.log("the number is planindrome number")
    
    } 
     else{
        console.log("number is not planindrome number");
    }
}

let input= parseInt(prompt("Enter number to check planindrome -> "));
let planindromeCheck = check(input);



// -----------------------------------------------------------question3-----------------------------------------------------------------------------------


let checkNumber = function(number){
    let originalNumber = number;
    let isPrime = true;
    let temp = 0 ;
    let rem ;
    if (number == 0 ){
        console.log ("one is nither prime nor prime ")
    }
    else{

        for (let i = 2 ; i < number ; i++){
            if ( number%i == 0){
                isPrime =false;
                break;
            }
        }
        if (isPrime == true){    
            while(number > 0 ){
                rem = number%10
                temp = (temp*10)+ rem;
                number = parseInt(number/10);
            }
            if(originalNumber == temp){
                console.log("given number is prime & planindrome")
            }else{ 
                console.log("given number is prime but not planindrome")
            }

        }else{
            while(number > 0 ){
                rem = number%10
                temp = (temp*10)+ rem;
                number = parseInt(number/10);
            }
            if(originalNumber == temp){
                console.log("given number is  not prime but planindrome")
            }else{ 
                console.log("given number is nither prime nor planindrome")
            }
        }

    }
}

let userInputForPrime = parseInt(prompt("Enter number -> "));
let primecheck = checkNumber(userInputForPrime);
