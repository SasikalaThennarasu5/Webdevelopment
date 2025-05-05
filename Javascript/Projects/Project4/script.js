const images = [
  "assets/images/img1.jpg",
  "assets/images/img2.jpg",
  "assets/images/img3.jpg",
  "assets/images/img4.jpg"
];

let current = 0;
let autoSlide;

const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.getElementById('thumbnails');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Load thumbnails
images.forEach((img, index) => {
  const thumb = document.createElement('img');
  thumb.src = img;
  thumb.addEventListener('click', () => {
    current = index;
    updateSlider();
  });
  thumbnailsContainer.appendChild(thumb);
});

// Highlight active thumbnail
function updateActiveThumbnail() {
  document.querySelectorAll('#thumbnails img').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === current);
  });
}

// Update main image
function updateSlider() {
  mainImage.src = images[current];
  updateActiveThumbnail();
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % images.length;
  updateSlider();
});

// Auto slide
function startAutoSlide() {
  autoSlide = setInterval(() => {
    current = (current + 1) % images.length;
    updateSlider();
  }, 3000);
}

// Pause on hover
mainImage.addEventListener('mouseover', () => clearInterval(autoSlide));
mainImage.addEventListener('mouseout', () => startAutoSlide());

// Initialize
updateSlider();
startAutoSlide();
