
function theFortuneTellerWithFunction(){
    let number = prompt("Please enter an number.");
    let name = prompt("Please enter a name.");
    let location = prompt("Please enter a location");
    let job = prompt("Please enter a job title.");

    
    theFortuneTellerWithFunction_1(number, name, location, job)
}

function theFortuneTellerWithFunction_1(number, name, location, job){
    
    document.getElementById("theFortuneTellerWithFunction").innerHTML = ("You will be a " + job + " in " + location  + " and you will " + number + " of kid(s) with a partner called " + name + ".")
}

