const books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: 300, category: "Fiction" },
  { id: 2, title: "A Brief History of Time", author: "Stephen Hawking", price: 450, category: "Science" },
  { id: 3, title: "Educated", author: "Tara Westover", price: 350, category: "Non-fiction" },
  { id: 4, title: "1984", author: "George Orwell", price: 250, category: "Fiction" },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderBooks() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;

  const filtered = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search);
    const matchesCategory = category === "all" || book.category === category;
    const matchesPrice = book.price >= minPrice && book.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  filtered.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Price:</strong> ₹${book.price}</p>
      <p><strong>Category:</strong> ${book.category}</p>
      <button onclick="addToCart(${book.id})">Add to Cart</button>
    `;
    bookList.appendChild(bookDiv);
  });
}

function addToCart(bookId) {
  const book = books.find(b => b.id === bookId);
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Cart is empty.</li>";
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} - ₹${item.price}`;
    cartList.appendChild(li);
  });
}

// Initial render
renderBooks();
renderCart();

// Live search
document.getElementById("searchInput").addEventListener("input", renderBooks);
