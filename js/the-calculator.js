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

