let pageBody = document.getElementsByTagName("body")[0];
pageBody.style.fontFamily = "Arial, sans-serif";
pageBody.style.margin = "20px";

document.getElementById("nickname").innerHTML = "Gary";
document.getElementById("favorites").innerHTML = "Leeds United";
document.getElementById("hometown").innerHTML = "Leeds";


let listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++){
    let list = listItems[i];
    list.style
    list.classList.add("listitem");
} 

let img = document.createElement("img");
img.src = "https://www.castlegateit.co.uk/wp-content/uploads/2021/06/Gary-Tate-.jpg";
img.style.border = '4px solid black';
pageBody.appendChild(img);


