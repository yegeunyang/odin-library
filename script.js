const myLibrary = [];

// A constructor for making "Book" object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read) {
            return `${title} by ${author}, ${pages} pages, read`;
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet`;
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.querySelector('.container');
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <div class="read">Read: 
            <input type="checkbox" ${book.read ? 'checked' : ''} 
            onclick=toggleRead(${index})>
            </div>
            <button class="remove" onclick=removeBook(${index})>
            Remove</button>
        `;
        container.appendChild(card);
    });
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    displayBooks();
}

addBookToLibrary("Book of Proof", "Richard Hammack", 380, true);
addBookToLibrary("Calculus", "James Stewart", 1400, true);
addBookToLibrary("Linear Algebra", "Stephen Friedberg", 600, true);
addBookToLibrary("A First Course in Abstract Algebra", "John B. Fraleigh", 450, true);
addBookToLibrary("Understanding Analysis", "Stephen Abbott", 320, true);
addBookToLibrary("Learning Git", "Anna Skoulikari", 320, true);
addBookToLibrary("Topology", "James R. Munkres", 535, false);
addBookToLibrary("Differential Geometry of Curves & Surfaces", "Manfredo P. Do Carmo", 510, false);

displayBooks();