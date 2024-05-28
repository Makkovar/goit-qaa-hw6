// Słowo kluczowe 'this' pozwala na odwołanie się do kontekstu (obiektu) w którym jest wywołane.
// Pomaga to optymalizować kod, by przy realizacji go nie przeszukiwać całego dokumentu
// by znaleźć odwołanie danej fukncji/metody a jedynie obiekt w którym jest zagnieżdżona.
// Pozwala także pisać metody zanim poznamy nazwę konkretnego obiektu oraz pozwala na dziedziczenie metod.

// Dwa przykłady praktyczne:


const person = {
    username: 'Maciej',
    showName() {
        console.log(this.username);
    } 
};

// Wywołanie metody showName wyświetla wartość właściwości username obiektu, do którego przynależy metoda
// poprzez słowo 'this', dzięki czemu skrypt zaczerpnie właściwość tylko z tego obiektu

person.showName()

const bookShelf = {
    authors: [],
    getAuthors() {
        return this.authors
    },
    addAuthor(authorName) {
        this.authors.push(authorName);
    },
};

//Słowo 'this' pozwala także na operacje na obiekcie takie jak dodawanie elementów to jego właściwości

bookShelf.addAuthor("J.R.R. Tolkien")
bookShelf.addAuthor("Ursula Le Guin")
bookShelf.addAuthor("Brandon Sanderson")
bookShelf.addAuthor("G.R.R. Martin")
console.log(bookShelf.getAuthors())