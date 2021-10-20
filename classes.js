/* eslint-disable max-classes-per-file */
/* eslint-disable max-classes-per-file */

const form = document.getElementById('form');
const container = document.querySelector('.container');

class Book {
    constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
    }
  }
  
  class Store {
    static getBooks() {
      let books;
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }
  
    static addBook(book) {
      let books = Store.getBooks();
      books = books.concat(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook() {
      let books;
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      const bookIndex1 = container.children[1].children[1].innerText;
      books.splice(books.indexOf(bookIndex1), 1);
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

class Display {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => Display.addBookToList(book));
    }
    static addBookToList(book) {
        
        const div = document.createElement('div');
        div.innerHTML = `
        <p class="title">${book.title}</p>
      <p class="author">${book.author}</p>
      <button class="remove"}>Remove</button>`;
      container.appendChild(div);
    };

    static deleteBook(el) {
      if(el.classList.contains('remove')){
        el.parentElement.remove();
      }
    }

    static clearFields() {
      document.querySelector('.input-title').value = '';
      document.querySelector('.input-author').value = '';
    }
}

// display books
document.addEventListener('DOMContentLoaded', Display.displayBooks);
document.querySelector('#form').addEventListener('submit', (e) => {
  // get form values
  e.preventDefault();
  const title = document.querySelector('.input-title').value;
  const author = document.querySelector('.input-author').value;
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

  const book = new Book(title, author, id);
  // console.log(book)
  Display.addBookToList(book);

  Store.addBook(book);

  Display.clearFields();
});

// remove book list

document.querySelector('.container').addEventListener('click', (e) => {
  Display.deleteBook(e.target);
  // console.log(container.children[1].children[1].innerText);
  Store.removeBook();
});
