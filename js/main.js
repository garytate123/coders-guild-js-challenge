// Copy right year 
let copyrightYear = new Date();
copyrightYear = copyrightYear.getFullYear();
document.getElementById("copyrightYear").innerHTML = " Copyright &copy " + copyrightYear + ": Created by Gary Tate";

// Error alert function
function outOfOrder(){
    alert("This function is out of order. Please try another one that's not red");
}