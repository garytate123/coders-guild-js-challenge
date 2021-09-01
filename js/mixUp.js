function mixUp(){
    let str1 = prompt("Enter first word.");
    let str2 = prompt("Enter second word.");

        mixUp_1(str1, str2)
}


function mixUp_1(str1, str2){
    str1FirstLetter = str1.charAt(0);
    str1RestOfStr = str1.slice(1,)
    str2FirstLetter = str2.charAt(0);
    str2RestOdStr = str2.slice(1,); 
    
    str1 = str2FirstLetter + str1RestOfStr;
    str2 = str1FirstLetter + str2RestOdStr;

    document.getElementById("mixUp").innerHTML =  "The function has done it's magic and the result is: " + str1 + " " + str2 ;
}