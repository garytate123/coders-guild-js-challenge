let result ;
function timesTable(){
    for (let i = 1; i <= 12; i++ ){
        for (let x = 1; x <= 12; x++) {
           result = i * x;
           alert(i + " * " + x  + " = " + result); 
        } 
    }
}