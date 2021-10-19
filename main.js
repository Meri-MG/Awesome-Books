const container = document.querySelector('.container');
const form = document.getElementById('form');

let myBooks = [];
if (localStorage.getItem('Data-base') !== null) {
  myBooks = JSON.parse(localStorage.getItem('Data-base'));
}

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id;
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
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('btn-1');
  removeBtn.setAttribute('id', book.id);
  bookDiv.appendChild(h2);
  bookDiv.appendChild(h3);
  bookDiv.appendChild(removeBtn);
  container.appendChild(bookDiv);
}
function displayBooks() {
  myBooks.forEach((element) => {
    addBookToLibrary(element);
  });
}

function removeBook(book) {
  const index = myBooks.findIndex((books) => books.id === book);
  myBooks.splice(index, 1);
  localStorage.setItem('Data-base', JSON.stringify(myBooks));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.input-title').value;
  const author = document.querySelector('.input-author').value;
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  const book = new Book(title, author, id);
  myBooks.push(book);
  addBookToLibrary(book);
  localStorage.setItem('Data-base', JSON.stringify(myBooks));
  form.reset();
});

document.addEventListener('DOMContentLoaded', displayBooks);
container.addEventListener('click', (r) => {
  if (r.target.classList.contains('remove')) {
    r.target.parentElement.remove();
    removeBook(r.target.id);
  }
});