// Output your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”
// number of children
let numberOfChildren = 0;

// partner’s name
let partnersName = ["Barry", "Sam", "Lilly", "Mary", "Simon", "Jack", "Jill", "John", "Ross"];

// geographic location
let futureLocation = ["Leeds", "London", "Newcastle", "Hull", "Manchester", "Devon"];

// job title
let jobTitle = ["Web Developer", "Chef", "CEO", "Footballer", "Teacher", "TV Presenter", "Dancer", "Pub Manager"];

function mysticGary(){
    numberOfChildren = Math.random();
    numberOfChildren = numberOfChildren * 10;
    numberOfChildren = Math.floor(numberOfChildren);
    let childMessage = "children.";
    if (numberOfChildren == 1){
        childMessage = "child.";
    } 

    let randomPartnersName = partnersName[Math.floor(Math.random() * partnersName.length)];
    let randomLocation = futureLocation[Math.floor(Math.random() * futureLocation.length)];
    let randomJobTitle = jobTitle[Math.floor(Math.random() * jobTitle.length)];

    document.getElementById("garysMessage").innerHTML = "Gary has had a good look into your future, and has seen the follow...";
    document.getElementById("partnerAndChildren").innerHTML = "Your partner will be called " + randomPartnersName + " and you will have " + numberOfChildren + " " + childMessage;
    document.getElementById("locationAndJobTitle").innerHTML = "You will live in " + randomLocation + " and your job title will be " + randomJobTitle + ".";
}
