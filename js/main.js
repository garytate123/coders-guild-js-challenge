
// Age calculator 

// Store the current year in a variable.
let currentYear =  new Date().getFullYear();

// Display the current year on the website.
document.getElementById("currentYear").innerHTML = "The current year is... " + currentYear;

// Store their birth year in a variable.
let userAge ;
function ageCalc(){
    usersAge = prompt("What year were your born? Example... 1960");

// Calculate their 2 possible ages based on the stored values.
    let result = currentYear - usersAge;
    let result_2 = result--;

// Display the year that the user entered.
    document.getElementById("usersBirthYear").innerHTML = "You were born in " + usersAge; 
// Output them to the screen like so: “They are either NN or NN”, substituting the values.
    document.getElementById("usersAge").innerHTML = "From our calculations you are either " + result + " or " + result_2 + " years old.";
}