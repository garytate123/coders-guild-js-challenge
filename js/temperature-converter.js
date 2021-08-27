
function convertDegToFah(){
    let degree = prompt("Enter temperature in Degree Celsius");
   
    let fahrenheit = degree * 9 / 5 + 32;

    document.getElementById("degreeTemp").innerHTML = degree + "&#176 Degrees Celsius is " + fahrenheit + "&#176 in Fahrenheit" ;
}

function convertFahToDeg(){
    let fahrenheit = prompt("Enter temperature in fahrenheit");
    
    let degree = (fahrenheit - 32) * 5 / 9;
    
    document.getElementById("fahTemp").innerHTML = fahrenheit + "&#176 fahrenheit is " + degree + "&#176 Degrees Celsius." ;
}