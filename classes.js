class Books {
  constructor(savedData) {
    this.savedData = savedData;
  }

  displayBooks() {
    const booksSection = document.querySelector('.books');
    booksSection.innerHTML = '';
    this.savedData.forEach((book, index) => {
      booksSection.innerHTML += `
      <div class="myDiv>
        <p class="title">"${book.title}" By ${book.author}</p>
        <button class="remove" onclick="removeBook(${index})">Remove</button>
        </div>
      `;
    });
  }

  remove(bookId) {
    if (bookId !== null && bookId !== undefined) {
      this.savedData.splice(bookId, 1);
      this.saveBooksToStorage();
      this.displayBooks();
    }
  }

  add(bookTitle, bookAuthor) {
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
    };
    this.savedData.push(newBook);
    this.displayBooks();
    this.saveBooksToStorage();
  }

  saveBooksToStorage() {
    localStorage.setItem('books', JSON.stringify(this.savedData));
  }
}

let savedData = localStorage.getItem('books');
if (savedData === null) {
  savedData = [];
} else {
  savedData = JSON.parse(savedData);
}
const books = new Books(savedData);
books.displayBooks();
const removeBook = (bookId) => books.remove(bookId);
removeBook();
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    books.add(title, author);
    form.reset();
  });
});
