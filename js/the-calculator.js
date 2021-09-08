// Square function starts

function squareNumber_1(){    
    let num = prompt("Please enter a number to be squared.");
    squareNumber(num);
}

function squareNumber(numSquared){
    let number = numSquared;
    let result = number * number;
    document.getElementById("squareNumber").innerHTML = "The result of squaring the number " + number + " is " + result 
}

// Square function ends

// Half Number function starts

function halfNumber_1(){    
    let numToBeHalved = prompt("Please enter a number that you would like to half.");
    halfNumber(numToBeHalved);
    // document.getElementById("halfNumber").innerHTML = "The result of halving the number " + halfNum + " is "; 
}

function halfNumber(numToBeHalved){
    let halvedNumber = numToBeHalved / 2;
    document.getElementById("halfNumber").innerHTML = "The result of halving the number " + numToBeHalved + " is " + halvedNumber; 
    return halvedNumber;
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

// Area of a Circle starts here 

function areaOfCircle_1(){
    let areaOfCircleNumber = prompt("What the radius of the circle that you would like to know the ares of?");
    areaOfCircle(areaOfCircleNumber);

}

function areaOfCircle(areaOfCircleNumber){
    let newAreaOfCircle = areaOfCircleNumber * areaOfCircleNumber;
    newAreaOfCircle = newAreaOfCircle * 3.14159265359;
    newAreaOfCircle = Math.round(newAreaOfCircle * 100) / 100;
    document.getElementById("areaOfCircle").innerHTML = "The area for a circle with the radius of " + areaOfCircleNumber + " is " + newAreaOfCircle;

}

// Area of a Circle starts ends

// Final function starts here
function finalFunction(){
    // Enter a number save in variable 
    let finalNumber = prompt("Please enter a number. This function will take your number and then use the other function to half the number, square it, calculate the area of a circle and then give you a percentage as a result.");
    
    // pass the number to the function to half it and save in new variable
    let newFinalHalvedNumber = halfNumber(finalNumber);
    
    // pass the halved number to the function to square it and save in new variable
    let newFinalSquaredNumber = squareNumber(newFinalHalvedNumber);

    // pass the squared number to the area of a circle function
    let newAreaOfCircleNumber = areaOfCircle(newFinalSquaredNumber);

    // pass the radius number to the percentage function and use the squared number to find the final percentage
    
    // alert(newFinalNumber);
    document.getElementById("finalFunction").innerHTML = "The number you entered is... " + finalNumber;
}
// Area of a Circle ends here 

