const moviesWrapper = document.querySelector('.movies')

console.log(moviesWrapper)

function searchChange(event) {
    console.log(event.target.value);
}

async function renderMovies() {
    const response = await fetch (`https://www.omdbapi.com/?apikey=1f242e1c&s=batman`)
    const data = await response.json()
    const moviesArr = data.Search
    moviesWrapper.innerHTML = moviesArr.map((movie) => {
        console.log(moviesArr)
        return `
        <div class="movie">
        <img src=${movie.Poster} alt="" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button>Learn More</button>
        </div>
        `
    })
}

renderMovies()