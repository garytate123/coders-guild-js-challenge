function pluralise(){
    let number = prompt("Enter the number of animals you have.");
    let animal = prompt("Enter the type of animal you have.");

    pluralise_1(number, animal)
}


function pluralise_1(number, animal){


    if (number >= 2) {
        document.getElementById("pluralise").innerHTML =  " You have " + number + " "  + animal + "s.";
    } else if (number == 1) {
        document.getElementById("pluralise").innerHTML =  " You have 1 " + animal + ".";
    } else {
        document.getElementById("pluralise").innerHTML =  "You don't seem to have any animals. Please enter a number.";
    }   

}