const newBooks = [];
function Books(title, author) {
        this.title = title,
        this.author = author
    }

const book1 = new Books('Hermann Hesse', 'SteppenWolf');
const book2 = new Books('Kafka', 'The Metamorphosis');
const book3 = new Books('Miguel de Unamuno', 'Mist');
newBooks.push(book1);
newBooks.push(book2);
newBooks.push(book3);
console.log(newBooks)

function addNewBook(book) {
    
}

function removeBook(book) {

}

function displayAllBooks() {

}