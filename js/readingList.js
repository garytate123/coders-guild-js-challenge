let books = [
    {
        title: "Javascript in Easy Steps",
        author: "Mike McGrath",
        alreadyRead: true,
    },
    {
        title: "Practical JavaScript, DOM Scripting and Ajax Projects",
        author: "Frank Zammetti",
        alreadyRead: false,
    },
    {
        title: "JavaScript Programming",
        author: "Jon Raasch",
        alreadyRead: false,
    }
]

function readingList(){
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        if (book.alreadyRead === true){
            alert(book.title + " by " + book.author + ". You have already read this book.");
        } else {
            alert(book.title + " by " + book.author + ". You have not read this book yet.");
        }
    }  
}