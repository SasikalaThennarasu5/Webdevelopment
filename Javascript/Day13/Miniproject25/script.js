let products = [];

const productsContainer = document.getElementById('products');
const filterCheckbox = document.getElementById('filterPrice');
const sortSelect = document.getElementById('sort');
const detailsModal = document.getElementById('details');

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products);
  })
  .catch(err => console.error('Failed to load products:', err));

function renderProducts(list) {
  productsContainer.innerHTML = '';
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
    `;
    card.addEventListener('click', () => showDetails(product));
    productsContainer.appendChild(card);
  });
}

function applyFilters() {
  let filtered = [...products];
  if (filterCheckbox.checked) {
    filtered = filtered.filter(p => p.price < 500);
  }

  if (sortSelect.value === 'priceAsc') {
    filtered.sort((a, b) => a.price - b.price);
  }

  renderProducts(filtered);
}

filterCheckbox.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);

function showDetails(product) {
  detailsModal.classList.remove('hidden');
  detailsModal.innerHTML = `
    <h2>${product.name}</h2>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Category:</strong> ${product.category}</p>
    <button onclick="detailsModal.classList.add('hidden')">Close</button>
  `;
}
