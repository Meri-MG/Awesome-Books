class Books {
  constructor(savedData) {
    this.savedData = savedData;
  }

  displayBooks() {
    const booksSection = document.querySelector('.books');
    booksSection.innerHTML = '';
    this.savedData.forEach((book, index) => {
      booksSection.innerHTML += `
      <div class="myDiv">
        <h4 class="title">"${book.title}" By ${book.author}</h4>
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
// navigation branch js
const form = document.querySelector('#form');
const navImg = document.querySelector('.navImg');
const closeImg = document.querySelector('.closeImg');
const navUl = document.querySelector('.navUl');
const container = document.querySelector('.container');
const navContainer = document.querySelector('.navContainer');
const title1 = document.querySelector('.title1');
const navLi = document.querySelectorAll('.navLi');
const contactInfoDiv = document.querySelector('.contactInfoDiv');
// nav open function
const x = window.matchMedia('(max-width: 500px)');
const mobileScreenNav = () => {
  if (x.matches) {
    navImg.style.display = 'block';
  } else {
    navImg.classList.add('d-none');
  }
};
const mobileScreenUl = () => {
  if (x.matches) {
    navUl.style.display = 'none';
  } else {
    navUl.classList.remove('d-none');
  }
};
const navOpen = () => {
  container.classList.add('d-none');
  form.classList.add('d-none');
  title1.classList.add('d-none');
  navContainer.classList.add('navActive');
  navContainer.classList.remove('navContainer');
  navImg.style.display = 'none';
  closeImg.classList.add('closeImgActive');
  navUl.style.display = 'flex';
  navUl.classList.add('navUlActive');
  navLi.forEach((i) => {
    i.classList.add('navLiActive');
  });
};
const navClose = () => {
  container.classList.remove('d-none');
  form.classList.remove('d-none');
  title1.classList.remove('d-none');
  navContainer.classList.remove('navActive');
  navContainer.classList.add('navContainer');
  closeImg.classList.remove('closeImgActive');
  navUl.style.display = 'none';
  navUl.classList.remove('navUlActive');
  navImg.style.display = 'block';
  contactInfoDiv.style.display = 'none';
};
const navClose2 = () => {
  container.classList.remove('d-none');
  form.classList.remove('d-none');
  title1.classList.remove('d-none');
  navContainer.classList.remove('navActive');
  navContainer.classList.add('navContainer');
  navImg.style.display = 'none';
  closeImg.classList.remove('closeImgActive');
  navUl.classList.remove('navUlActive');
  contactInfoDiv.style.display = 'none';
};

navImg.addEventListener('click', navOpen);
closeImg.addEventListener('click', navClose);

const bookList = document.getElementById('bookList');
const addNew = document.getElementById('addNew');
const contactInfo = document.getElementById('contactInfo');
const booksdiv = document.querySelector('.books');
const addNewOpen = () => {
  navClose2();
  mobileScreenUl();
  mobileScreenNav();
  form.classList.remove('d-none');
  booksdiv.classList.add('d-none');
  contactInfoDiv.style.display = 'none';
};
const bookListOpen = () => {
  navClose2();
  mobileScreenUl();
  mobileScreenNav();
  form.classList.add('d-none');
  booksdiv.classList.remove('d-none');
  contactInfoDiv.style.display = 'none';
};

const contactInfoOpen = () => {
  navClose2();
  mobileScreenUl();
  mobileScreenNav();
  contactInfoDiv.classList.remove('d-none');
  contactInfoDiv.style.display = 'flex';
  contactInfoDiv.classList.add('contactInfoActive');
  form.classList.add('d-none');
  booksdiv.classList.add('d-none');
};
bookList.addEventListener('click', bookListOpen);
addNew.addEventListener('click', addNewOpen);
contactInfo.addEventListener('click', contactInfoOpen);
