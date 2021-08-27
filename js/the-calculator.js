// Square function starts

function squareNumber_1(){    
    let num = prompt("Please enter a number to be squared.");
    squareNumber(num);
}

function squareNumber(num){
    let number = num;
    let result = number * number;
    document.getElementById("squareNumber").innerHTML = "The result of squaring the number " + number + " is " + result 
}

// Square function ends

// Half Number function starts

function halfNumber_1(){    
    let num = prompt("Please enter a number that you would like to half.");
    halfNumber(num);
    // document.getElementById("halfNumber").innerHTML = "The result of halving the number " + halfNum + " is "; 
}

// I'm not sure why this function is working
function halfNumber(num){
    let number = Number.parseInt(num);
    let resultHalf = Number.parseInt(number) / Number.parseInt(number);
    document.getElementById("halfNumber").innerHTML = "The result of halving the number " + number + " is " + resultHalf; 
    document.getElementById("errorMessage").innerHTML = "There is an error with this function.";

}

// Half Number function ends


// Percentage of a number starts 

function percentOf_1(){
    let firstNumber = prompt("Please enter the number that you would like to know the percentage of.");
    let secondNumber = prompt("Please enter the amount of percentage you would like to know.");

    let percent = (secondNumber / 100) * firstNumber;

    document.getElementById("percentOf").innerHTML = "percent is " + firstNumber + " is " + percent + "%";
}

// Percentage of a number ends 


