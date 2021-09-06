
// 3. Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// 4. Bonus: Use a ul and li to display the books.
// 5. Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// 6. Bonus: Change the style of the book depending on whether you have read it or not.



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
