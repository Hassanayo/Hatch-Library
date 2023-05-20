class Library {
  private name = "Nithub Library";
  private books: Books[];
  private librarians: Librarian[];

  constructor(name: string) {
    this.name = name;
    this.books = [];
    this.librarians = [];
  }

  //TODO
  assignLibrarians(librarian: Librarian) {
    this.librarians.push(librarian);
    return this.librarians;
  }

  addBook(book: Books) {
    this.books.push(book);

    return this.books;
  }

  get libraryName(): string {
    return this.name;
  }
  get libraryBooks(): Books[] {
    return this.books;
  }
  get librariansList(): Librarian[] {
    return this.librarians;
  }
}

type Gender = "MALE" | "FEMALE";

class Librarian {
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNum: string;
  private gender: Gender;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    gender: Gender,
    phoneNum: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.phoneNum = phoneNum;
  }

  get fullName(): string {
    if (this.gender == "MALE") {
      return `Mr. ${this.firstName} ${this.lastName}`;
    } else {
      return `Mrs. ${this.firstName} ${this.lastName}`;
    }
  }
  get emailAddress() {
    return this.email;
  }
  get phoneNumber() {
    return this.phoneNum;
  }
}
class Authors {
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNum: string;
  private gender: Gender;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    gender: Gender,
    phoneNum: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.phoneNum = phoneNum;
  }

  get getAuthorName(): string {
    return `${this.firstName + this.lastName}`;
  }
}
class Books {
  private name: string;
  private authors: Authors[];
  private quantity: number;
  private category: string;
  private datePublished: string;

  constructor(
    name: string,
    quantity: number,
    category: string,
    datePublished: string
  ) {
    this.name = name;
    this.quantity = quantity;
    this.category = category;
    this.datePublished = datePublished;
    this.authors = [];
  }

  get bookName() {
    return this.name;
  }
  get categoryName() {
    return this.category;
  }
  get getQuantity() {
    return this.quantity;
  }
  set setQuantity(result: number) {
    this.quantity = result;
  }

  assignAuthor(author: Authors) {
    this.authors.push(author);
    return this.authors;
  }
}

const lib = new Library("Main");

const libraryInfo = document.getElementById("library-info");

// new librarian
const hassan = new Librarian(
  "Ayomide",
  "Hassan",
  "ayohassan@gmail.com",
  "MALE",
  "09067084313"
);

const newAuthor = new Authors(
  "J.K",
  "Rowling",
  "jkrowling@gmail.com",
  "FEMALE",
  "09067084313"
);
new Librarian(
  "Olaide",
  "Olaide",
  "ayohassan@gmail.com",
  "FEMALE",
  "09067084313"
);
new Librarian("Hanif", "Hanif", "ayohassan@gmail.com", "MALE", "09067084313");
new Librarian("Bayo", "Oyab", "ayohassan@gmail.com", "MALE", "09067084313");
const book1 = new Books("Harry Potter", 100, "fiction", "2000");
book1.assignAuthor(newAuthor);

lib.assignLibrarians(hassan);
lib.assignLibrarians(
  new Librarian(
    "Olaide",
    "Olaide",
    "ayohassan@gmail.com",
    "FEMALE",
    "09067084313"
  )
);
lib.assignLibrarians(hassan);
lib.addBook(book1);
lib.addBook(new Books("Hunger Games", 100, "Action", "2000"));
lib.addBook(new Books("Science book", 100, "Adventure", "2000"));
lib.addBook(new Books("Past Questions", 100, "Drama", "2000"));

console.log(lib.librariansList); 

//Linking to html
const numBooks = document.getElementById("book-num") as HTMLElement;
numBooks.innerText = lib.libraryBooks.length.toString();

const numLibrarians = document.getElementById("librarian-num") as HTMLElement;
numLibrarians.innerText = lib.librariansList.length.toString();

const showBooks = document.getElementById("showBooks") as HTMLElement;
const showLibrarians = document.getElementById("showLibrarians") as HTMLElement;

lib.libraryBooks.forEach((book) => {
  // Create a new HTML element to display the book data
  const bookElement = document.createElement("tr");

  // Set the content of the element to the book data
  bookElement.innerHTML = `
      <td>${book.bookName}</td>
      <td>${book.categoryName}</td>
      <td>${book.getQuantity}</td>
    `;

  // Add the new element to the books container in the HTML
  showBooks.append(bookElement);
});
lib.librariansList.forEach((librarian) => {
  // Create a new HTML element to display the book data
  const bookElement = document.createElement("tr");

  // Set the content of the element to the book data
  bookElement.innerHTML = `
      <td>${librarian.fullName}</td>
      <td>${librarian.emailAddress}</td>
      <td>${librarian.phoneNumber}</td>
    `;

  // Add the new element to the books container in the HTML
  showLibrarians.append(bookElement);
});

// Retrieve the HTML table and table body elements
const table = document.getElementById("myTable") as HTMLTableElement;

//modal functionality
const modal = document.querySelector(".modal") as HTMLDivElement;
const registermodal = document.querySelector(
  ".register-modal"
) as HTMLDivElement;
const overlay = document.querySelector(".overlay") as HTMLDivElement;
const openModalBtn = document.querySelector(".btn-open") as HTMLButtonElement;
const openRegisterBtn = document.querySelector(
  ".btn-open2"
) as HTMLButtonElement;
const closeModalBtn = document.querySelector(".btn-close") as HTMLButtonElement;
const closeRegisterModalBtn = document.getElementById(
  "close-regBtn"
) as HTMLButtonElement;

const bookTab = document.getElementById("book-tab");
const librarianTab = document.getElementById("librarian-tab");
const librarianSection = document.getElementById("librarian-section");
const bookSection = document.getElementById("book-section");

bookTab?.addEventListener("click", () => {
  librarianSection?.classList.add("hidden");
  bookSection?.classList.remove("hidden");
});
librarianTab?.addEventListener("click", () => {
  console.log("Work");
  bookSection?.classList.add("hidden");
  librarianSection?.classList.remove("hidden");
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openRegisterModal = function () {
  registermodal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeRegisterModal = () => {
  registermodal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModal = function () {
  registermodal.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModalBtn?.addEventListener("click", openModal);
openRegisterBtn.addEventListener("click", openRegisterModal);
closeRegisterModalBtn?.addEventListener("click", closeRegisterModal);
closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// form
const bookForm = document.getElementById("bookForm") as HTMLFormElement;
const bookFormBtn = document.getElementById(
  "bookForm-btn"
) as HTMLButtonElement;
const librarianFormBtn = document.getElementById(
  "librarianForm-btn"
) as HTMLButtonElement;
const nameInput = document.getElementById("name-input") as HTMLInputElement;
const categoryInput = document.getElementById(
  "category-input"
) as HTMLInputElement;
const dateInput = document.getElementById("date-input") as HTMLInputElement;
const quantityInput = document.getElementById(
  "quantity-input"
) as HTMLInputElement;

bookFormBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nameInput.value &&
    quantityInput.value &&
    categoryInput.value &&
    dateInput.value
  ) {
    lib.addBook(
      new Books(
        nameInput?.value,
        parseInt(quantityInput.value),
        categoryInput.value,
        dateInput.value
      )
    );
    const bookElement = document.createElement("tr");

    // Set the content of the element to the book data
    bookElement.innerHTML = `
      <td>${nameInput.value}</td>
      <td>${categoryInput.value}</td>
      <td>${quantityInput.value}</td>
    `;

    // Add the new element to the books container in the HTML
    showBooks.append(bookElement);
  }
  console.log(lib.libraryBooks);
  numBooks.innerText = lib.libraryBooks.length.toString();
});

const libFName = document.getElementById("fname-input") as HTMLInputElement;
const libLName = document.getElementById("fname-input") as HTMLInputElement;
const libEmail = document.getElementById("fname-input") as HTMLInputElement;
const libPhone = document.getElementById("fname-input") as HTMLInputElement;
const radios = document.getElementsByName("gender") as any;
let selectedGender;

for (const radio of radios) {
  if (radio.checked) {
    selectedGender = radio.value;
    break;
  }
}
librarianFormBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (libFName.value && libLName.value && libEmail.value && libPhone.value) {
    const newLibrarian = new Librarian(libFName.value,libLName.value, libEmail.value, "MALE", libPhone.value);
    lib.assignLibrarians(newLibrarian);


    const librarianElement = document.createElement("tr");

    // Set the content of the element to the librarian data
    librarianElement.innerHTML = `
      <td>${libFName.value}</td>
      <td>${libLName.value}</td>
      <td>${libEmail.value}</td>
    `;
    
    // Add the new element to the librarians container in the HTML
    showLibrarians.append(librarianElement);
  }
  console.log(lib.librariansList);
  
  numLibrarians.innerText = lib.libraryBooks.length.toString();
});

