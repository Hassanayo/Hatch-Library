var Library = /** @class */ (function () {
    function Library(name) {
        this.name = "Nithub Library";
        this.name = name;
        this.books = [];
        this.librarians = [];
    }
    //TODO
    Library.prototype.assignLibrarians = function (librarian) {
        this.librarians.push(librarian);
        return this.librarians;
    };
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        return this.books;
    };
    Object.defineProperty(Library.prototype, "libraryName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "libraryBooks", {
        get: function () {
            return this.books;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Library.prototype, "librariansList", {
        get: function () {
            return this.librarians;
        },
        enumerable: false,
        configurable: true
    });
    return Library;
}());
var Librarian = /** @class */ (function () {
    function Librarian(firstName, lastName, email, gender, phoneNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.phoneNum = phoneNum;
    }
    Object.defineProperty(Librarian.prototype, "fullName", {
        get: function () {
            if (this.gender == "MALE") {
                return "Mr. ".concat(this.firstName, " ").concat(this.lastName);
            }
            else {
                return "Mrs. ".concat(this.firstName, " ").concat(this.lastName);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Librarian.prototype, "emailAddress", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Librarian.prototype, "phoneNumber", {
        get: function () {
            return this.phoneNum;
        },
        enumerable: false,
        configurable: true
    });
    return Librarian;
}());
var Authors = /** @class */ (function () {
    function Authors(firstName, lastName, email, gender, phoneNum) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.phoneNum = phoneNum;
    }
    Object.defineProperty(Authors.prototype, "getAuthorName", {
        get: function () {
            return "".concat(this.firstName + this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    return Authors;
}());
var Books = /** @class */ (function () {
    function Books(name, quantity, category, datePublished) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.datePublished = datePublished;
        this.authors = [];
    }
    Object.defineProperty(Books.prototype, "bookName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Books.prototype, "categoryName", {
        get: function () {
            return this.category;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Books.prototype, "getQuantity", {
        get: function () {
            return this.quantity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Books.prototype, "setQuantity", {
        set: function (result) {
            this.quantity = result;
        },
        enumerable: false,
        configurable: true
    });
    Books.prototype.assignAuthor = function (author) {
        this.authors.push(author);
        return this.authors;
    };
    return Books;
}());
var lib = new Library("Main");
var libraryInfo = document.getElementById("library-info");
// new librarian
var hassan = new Librarian("Ayomide", "Hassan", "ayohassan@gmail.com", "MALE", "09067084313");
var newAuthor = new Authors("J.K", "Rowling", "jkrowling@gmail.com", "FEMALE", "09067084313");
new Librarian("Olaide", "Olaide", "ayohassan@gmail.com", "FEMALE", "09067084313");
new Librarian("Hanif", "Hanif", "ayohassan@gmail.com", "MALE", "09067084313");
new Librarian("Bayo", "Oyab", "ayohassan@gmail.com", "MALE", "09067084313");
var book1 = new Books("Harry Potter", 100, "fiction", "2000");
book1.assignAuthor(newAuthor);
lib.assignLibrarians(hassan);
lib.assignLibrarians(new Librarian("Olaide", "Olaide", "ayohassan@gmail.com", "FEMALE", "09067084313"));
lib.assignLibrarians(hassan);
lib.addBook(book1);
lib.addBook(new Books("Hunger Games", 100, "Action", "2000"));
lib.addBook(new Books("Science book", 100, "Adventure", "2000"));
lib.addBook(new Books("Past Questions", 100, "Drama", "2000"));
console.log(lib.librariansList);
//Linking to html
var numBooks = document.getElementById("book-num");
numBooks.innerText = lib.libraryBooks.length.toString();
var numLibrarians = document.getElementById("librarian-num");
numLibrarians.innerText = lib.librariansList.length.toString();
var showBooks = document.getElementById("showBooks");
var showLibrarians = document.getElementById("showLibrarians");
lib.libraryBooks.forEach(function (book) {
    // Create a new HTML element to display the book data
    var bookElement = document.createElement("tr");
    // Set the content of the element to the book data
    bookElement.innerHTML = "\n      <td>".concat(book.bookName, "</td>\n      <td>").concat(book.categoryName, "</td>\n      <td>").concat(book.getQuantity, "</td>\n    ");
    // Add the new element to the books container in the HTML
    showBooks.append(bookElement);
});
lib.librariansList.forEach(function (librarian) {
    // Create a new HTML element to display the book data
    var bookElement = document.createElement("tr");
    // Set the content of the element to the book data
    bookElement.innerHTML = "\n      <td>".concat(librarian.fullName, "</td>\n      <td>").concat(librarian.emailAddress, "</td>\n      <td>").concat(librarian.phoneNumber, "</td>\n    ");
    // Add the new element to the books container in the HTML
    showLibrarians.append(bookElement);
});
// Retrieve the HTML table and table body elements
var table = document.getElementById("myTable");
//modal functionality
var modal = document.querySelector(".modal");
var registermodal = document.querySelector(".register-modal");
var overlay = document.querySelector(".overlay");
var openModalBtn = document.querySelector(".btn-open");
var openRegisterBtn = document.querySelector(".btn-open2");
var closeModalBtn = document.querySelector(".btn-close");
var closeRegisterModalBtn = document.getElementById("close-regBtn");
var bookTab = document.getElementById("book-tab");
var librarianTab = document.getElementById("librarian-tab");
var librarianSection = document.getElementById("librarian-section");
var bookSection = document.getElementById("book-section");
bookTab === null || bookTab === void 0 ? void 0 : bookTab.addEventListener("click", function () {
    librarianSection === null || librarianSection === void 0 ? void 0 : librarianSection.classList.add("hidden");
    bookSection === null || bookSection === void 0 ? void 0 : bookSection.classList.remove("hidden");
});
librarianTab === null || librarianTab === void 0 ? void 0 : librarianTab.addEventListener("click", function () {
    console.log("Work");
    bookSection === null || bookSection === void 0 ? void 0 : bookSection.classList.add("hidden");
    librarianSection === null || librarianSection === void 0 ? void 0 : librarianSection.classList.remove("hidden");
});
var openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
var openRegisterModal = function () {
    registermodal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
var closeRegisterModal = function () {
    registermodal.classList.add("hidden");
    overlay.classList.add("hidden");
};
var closeModal = function () {
    registermodal.classList.add("hidden");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
openModalBtn === null || openModalBtn === void 0 ? void 0 : openModalBtn.addEventListener("click", openModal);
openRegisterBtn.addEventListener("click", openRegisterModal);
closeRegisterModalBtn === null || closeRegisterModalBtn === void 0 ? void 0 : closeRegisterModalBtn.addEventListener("click", closeRegisterModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// form
var bookForm = document.getElementById("bookForm");
var bookFormBtn = document.getElementById("bookForm-btn");
var librarianFormBtn = document.getElementById("librarianForm-btn");
var nameInput = document.getElementById("name-input");
var categoryInput = document.getElementById("category-input");
var dateInput = document.getElementById("date-input");
var quantityInput = document.getElementById("quantity-input");
var libFName = document.getElementById("fname-input");
var libLName = document.getElementById("lname-input");
var libEmail = document.getElementById("email-input");
var libPhone = document.getElementById("phone-input");
var radios = document.getElementsByName("gender");
var selectedGender;
librarianFormBtn === null || librarianFormBtn === void 0 ? void 0 : librarianFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    for (var _i = 0, radios_1 = radios; _i < radios_1.length; _i++) {
        var radio = radios_1[_i];
        if (radio.checked) {
            selectedGender = radio.value;
            if (libFName.value &&
                libLName.value &&
                libEmail.value &&
                libPhone.value &&
                selectedGender) {
                var newLibrarian = new Librarian(libFName.value, libLName.value, libEmail.value, selectedGender, libPhone.value);
                lib.assignLibrarians(newLibrarian);
                var librarianElement = document.createElement("tr");
                // Set the content of the element to the librarian data
                librarianElement.innerHTML = "\n          <td>".concat(libFName.value, "</td>\n          <td>").concat(libEmail.value, "</td>\n          <td>").concat(libPhone.value, "</td>\n        ");
                // Add the new element to the librarians container in the HTML
                showLibrarians.append(librarianElement);
            }
        }
    }
    console.log(lib.librariansList);
    numLibrarians.innerText = lib.librariansList.length.toString();
});
bookFormBtn === null || bookFormBtn === void 0 ? void 0 : bookFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (nameInput.value &&
        quantityInput.value &&
        categoryInput.value &&
        dateInput.value) {
        lib.addBook(new Books(nameInput === null || nameInput === void 0 ? void 0 : nameInput.value, parseInt(quantityInput.value), categoryInput.value, dateInput.value));
        var bookElement = document.createElement("tr");
        // Set the content of the element to the book data
        bookElement.innerHTML = "\n      <td>".concat(nameInput.value, "</td>\n      <td>").concat(categoryInput.value, "</td>\n      <td>").concat(quantityInput.value, "</td>\n    ");
        // Add the new element to the books container in the HTML
        showBooks.append(bookElement);
    }
    console.log(lib.libraryBooks);
    numBooks.innerText = lib.libraryBooks.length.toString();
});
