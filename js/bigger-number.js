function biggestNumber(){
    let firstNumber = prompt("Please enter your first number.");
    let secondNumber = prompt("Please enter your second number.");

    if (parseInt(firstNumber) === parseInt(secondNumber)) {
        document.getElementById("biggestNumber").innerHTML = "The 2 numbers are the same and neither of them are bigger then the other.";
    } else if (parseInt(firstNumber) > parseInt(secondNumber)) {
        document.getElementById("biggestNumber").innerHTML = "The biggest number is: " + firstNumber;
    } else if (parseInt(firstNumber) < parseInt(secondNumber)) {
        document.getElementById("biggestNumber").innerHTML = "The biggest number is: " + secondNumber;
    } else {
        document.getElementById("biggestNumber").innerHTML = "Sorry, but we can not compare what you entered";

    }
}