const container = document.querySelector('.container');
const addButton = document.querySelector('.add-btn');
const form = document.getElementById('form');

const book = new Book('Da Vinci Code', "Dan Brown");
const book1 = new Book('Black Box Thinking', "Matthew Syed");
const book2 = new Book('Climate Change', "Bill Gates");

const myBooks = [];
myBooks.push(book);
myBooks.push(book1);
myBooks.push(book2);

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('bookInfos');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove');
  h2.textContent = book.title;
  h2.classList.add('book-title');
  h3.textContent = book.author;
  h3.classList.add('book-author');
  removeBtn.textContent = "Remove";
  removeBtn.classList.add('btn-1');
  bookDiv.appendChild(h2);
  bookDiv.appendChild(h3);
  bookDiv.appendChild(removeBtn);
  container.appendChild(bookDiv);
}
function displayBooks() {
  myBooks.forEach(element => {
    addBookToLibrary(element);
  })
}

function removeBook(book) {
  return myBooks.filter(b => b !== book);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.input-title').value;
  const author = document.querySelector('.input-author').value;
  const book = new Book(title, author);
  myBooks.push(book);
  addBookToLibrary(book);
});

document.addEventListener('DOMContentLoaded', displayBooks);
container.addEventListener('click',(r) => {
    if(r.target.classList.contains('remove')){
    r.target.parentElement.remove();
    }
    myBooks.filter((b) => {
        r.target.textContent !== b.title
    })
});