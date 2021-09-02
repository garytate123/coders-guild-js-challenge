function evenOddCounter(){
    let number = 0;
    while (number <= 20) {
        if (number % 2 == 0){
            alert("The number: " + number + " is Even." )
            number = number + 1;
        } else {
            alert("The number: " + number + " is Odd." )
            number = number + 1;
        }
    }
}

