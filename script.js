const myLibrary = [
    Book("Book of Proof", "Richard Hammack", 380, true),
    Book("Calculus", "James Stewart", 1400, true),
    Book("Linear Algebra", "Stephen Friedberg", 600, true),
    Book("A First Course in Abstract Algebra", "John B. Fraleigh", 450, true),
    Book("Understanding Analysis", "Stephen Abbott", 320, true),
    Book("Learning Git", "Anna Skoulikari", 320, true),
    Book("Topology", "James R. Munkres", 535, false),
    Book("Differential Geometry of Curves & Surfaces", "Manfredo P. Do Carmo", 510, false),
];

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