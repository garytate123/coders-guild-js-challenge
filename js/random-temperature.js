let temperature = 0;

function randomTemp(){
    temperature = Math.random(1, 101);
    temperature = temperature * 100;
    temperature = Math.floor(temperature);
    
    let fahrenheit = temperature * 9 / 5 + 32;

    document.getElementById("temp").innerHTML = "The random temperature is in degrees celsius is: " + temperature + "&#176 degrees celsius";
    document.getElementById("fahrenheit").innerHTML = "Which is: " + fahrenheit + " in fahrenheit."
}