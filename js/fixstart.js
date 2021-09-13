function fixStart(){
    let usersWord = prompt("Please enter a word.")
    fixStart_1(usersWord);

}

function fixStart_1(usersWord) {
    var wordLength = usersWord.length;
    var firstLetter = usersWord.charAt(0);
    for (i=1;i<=wordLength;i++) {
      var usersWord = usersWord.replace(firstLetter, "*");
    }
    alert(usersWord.replace(usersWord[0], firstLetter));
  }
