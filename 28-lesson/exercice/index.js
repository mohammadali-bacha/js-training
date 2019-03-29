/*
The purpose of the exercise is to register books in a library (table).
*/

const Library = require('./library');
const Book = require('./livre');

var library = new Library();

var biographyElonMusk = new Book(
    "Elon Musk.",
    "Ashlee Vance.",
    1234,
    "biography",
);

library.addBook(biographyElonMusk);

var biographiePeterThiel = new Book(
    "Zero to One.",
    "Peter Thiel",
    5678,
    "startup"
);

library.addBook(biographyPeterThiel);

// var results = library.searchBookParTitle("Zero to One");

var results = library.searchBarCodePaper(1234);

console.log(results);

