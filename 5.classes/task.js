class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    // Метод для улучшения состояния печатного издания
    fix() {
        this.state *= 1.5;
    }

    // Сеттер для свойства state с контролем значений от 0 до 100
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    // Геттер для свойства state
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        // Вызываем конструктор родительского класса с помощью super()
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

// Класс, наследующийся от Book — NovelBook
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        // Вызываем конструктор родительского класса с помощью super()
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

// Класс, наследующийся от Book — FantasticBook
class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        // Вызываем конструктор родительского класса с помощью super()
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

// Класс, наследующийся от Book — DetectiveBook
class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        // Вызываем конструктор родительского класса с помощью super()
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Метод для добавления книги в хранилище books
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    // Метод для поиска книги по заданному ключу и значению
    findBookBy(type, value) {
        return this.books.find((book) => book[type] === value) || null;
    }

    // Метод для выдачи книги по названию
    giveBookByName(bookName) {
        const index = this.books.findIndex((book) => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }
}