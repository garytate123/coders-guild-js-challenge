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
function showBookList(){
    for (let i = 0; i < books.length; i++){
        let bookList = document.createElement("li");
        bookList.innerHTML = books[i].title + " by " + books[i].author;
        document.getElementById("bookList").appendChild(bookList);   
    }
}










// function alertBooks(){
//     for (let i = 0; i < books.length; i++)
//     let bookList = document.createElement("p");
//     bookList.innerHTML = books[i].title;
//     document.body.appendChild(bookList);
// }
