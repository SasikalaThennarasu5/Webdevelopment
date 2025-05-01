const API_KEY = 'your_api_key_here'; // Replace with your actual OMDb API key
const searchBtn = document.getElementById('searchBtn');
const movieInput = document.getElementById('movieInput');
const movieDetails = document.getElementById('movieDetails');

searchBtn.addEventListener('click', () => {
  const title = movieInput.value.trim();
  if (title) {
    fetchMovie(title);
  } else {
    movieDetails.innerHTML = '<p>Please enter a movie title.</p>';
  }
});

async function fetchMovie(title) {
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === 'True') {
      displayMovie(data);
    } else {
      movieDetails.innerHTML = `<p>❌ Movie not found: ${data.Error}</p>`;
    }
  } catch (error) {
    console.error('Error fetching movie:', error);
    movieDetails.innerHTML = '<p>⚠️ An error occurred while fetching movie data.</p>';
  }
}

function displayMovie(movie) {
  movieDetails.innerHTML = `
    <h2>${movie.Title} (${movie.Year})</h2>
    <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}" alt="Poster">
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
  `;
}
