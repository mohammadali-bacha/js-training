/*
The purpose of the exercise is to register books in a library (table).
*/

const Library = require('./library');
const Book = require('./book');

var library = new Library();

var biographyElonMusk = new Book(
    "Elon Musk.",
    "Ashlee Vance.",
    1234,
    "biography",
);

library.addBook(biographyElonMusk);

var biographyPeterThiel = new Book(
    "Zero to One.",
    "Peter Thiel",
    5678,
    "startup"
);

library.addBook(biographyPeterThiel);

// var results = library.searchBookParTitle("Zero to One");

var results = library.searchBarCodeBook(1234);

console.log(results);

