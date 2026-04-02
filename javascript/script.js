let books=[];
function addBook(){
    let name=document.getElementById("bookname").value;
    let author=document.getElementById("author").value;
    if(name ===""|| author ===""){
        alert("Enter all details");
        return;
    }
    books.push({name, author});
    displayBooks();
}
function displayBooks(){
    let list= document.getElementById("bookList");
    list.innerHTML="";
    books.forEach((book,index) => {
        list.innerHTML += `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td><button onclick="deleteBook(${index})">Delete</button></td>
        </tr>`;
    });
}