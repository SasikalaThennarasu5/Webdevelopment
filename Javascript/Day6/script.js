console.log("JS66. Create an array of 5 student names.")

let students1 = ["Akshaya", "Sandhya", "Mridula", "vikram", "mithran"];

console.log(students1);

console.log("")

console.log("JS67. Add a new student name to the array using push().")

let students2 = ["Akshaya", "Sandhya", "Mridula", "vikram", "mithran"];

students2.push("Sindhu"); 

console.log(students2);

console.log("")

console.log("JS68. Remove the last student using pop().")

let students3 = ["Akshaya", "Sandhya", "Mridula", "vikram", "mithran"];

students3.pop(); 

console.log(students3);

console.log("")

console.log("JS69. Use map() to convert all names to uppercase.")

let students4 = ["Akshaya", "Sandhya", "Mridula", "vikram", "mithran"];

let upperCaseStudents = students4.map(name => name.toUpperCase());

console.log(upperCaseStudents);

console.log("")

console.log("JS70. Use filter() to get students whose names start with A.")

let students5 = ["Akshaya", "Sandhya", "Mridula", "vikram", "mithran", "Avinash", "Aadhya"];

let studentsWithA = students5.filter(name => name.startsWith("A"));

console.log(studentsWithA);

console.log("")

console.log("JS71. Use forEach() to print each student name.")

let students6 = ["Akshaya", "Sandhya", "Mridula", "vikram", "mithran", "Avinash", "Aadhya"];

students6.forEach(name => console.log(name));

console.log("")

console.log("JS72. Create an object for a book with properties (title, author, price).")

let book = {
    title: "The Girl Who Reads Novels",
    author: "Chetan Bhagat",
    price:  250
};

console.log(book);

console.log("")

console.log("JS73. Use Object.keys() to get all book properties.")

let book1 = {
    title: "The Girl Who Reads Novels",
    author: "Chetan Bhagat",
    price:  250
};

let properties = Object.keys(book1);

console.log(properties);

console.log("")

console.log("JS74. Use Object.values() to get all book values.")

let book2 = {
    title: "The Girl Who Reads Novels",
    author: "Chetan Bhagat",
    price:  250
};

let values = Object.values(book2);

console.log(values);

console.log("JS75. Add a new property genre to the book object.")

let book3= {
    title: "The Girl Who Reads Novels",
    author: "Chetan Bhagat",
    price:  250
};

// Adding a new property
book3.genre = "Classic Romance";

console.log(book3);

console.log("")

console.log("JS76. Use delete to remove price from the book.")

let book4= {
    title: "The Girl Who Reads Novels",
    author: "Chetan Bhagat",
    price:  250,
    genre: "Classic Romance"
};

// Removing the price property
delete book4.price;

console.log(book4);

console.log("")

console.log("JS77. Merge a publisher object into the book object.")

let book5 = {
    title: "The Girl Who Reads Novels",
    author: "Chetan Bhagat",
    price:  250,
    genre: "Classic Romance"
}; 

let publisher = {
    publisher: "ScienceDaily",
    year: 1999
};

// Merging publisher into book
Object.assign(book5, publisher);

console.log(book5);

console.log("")

console.log("JS78. Convert the book object into an array of key-value pairs using Object.entries()")

let book6= {
    title: "The Girl Who Reads Novels",
    author: "Chetan Bhagat",
    price:  250,
    genre: "Classic Romance",
    publisher: "ScienceDaily",
    year: 1999
};


let bookEntries = Object.entries(book6);

console.log(bookEntries);



