//GRABBING ELEMENTS
const moviesWrapper = document.querySelector(".movies");
const searchName = document.querySelector(".searchName");

//GLOBAL MOVIES VARIABLE
let currentMovies = []

//HANDLING THE SEARCH
function searchChange(event) {
  renderMovies(event.target.value);
  searchName.innerHTML;
}

//RENDERING MOVIES / CALLING API
async function renderMovies(searchTerm) {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=1f242e1c`
  );
  const data = await response.json();
  currentMovies = data.Search
  displayMovies(currentMovies);
}

//DISPLAYING MOVIES
function displayMovies(movieList) {
  moviesWrapper.innerHTML = movieList
    .slice(0, 6)
    .map((movie) => {
      return ` 
        <div class="movie">
        <img src=${movie.Poster} alt="" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}<h4>
        </div>
        `;
    })
    .join("");
}

//SORTING MOVIES
function sortChange(event) {
    const sortOption = event.target.value

    let sortedMovies = [...currentMovies]

    if (sortOption === "newest") {
        sortedMovies.sort((a, b) => b.Year - a.Year)
    }
    else if (sortOption === "oldest") {
        sortedMovies.sort((a, b) => a.Year - b.Year)
    }

    displayMovies(sortedMovies);
}