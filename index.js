const moviesWrapper = document.querySelector('.movies')

console.log(moviesWrapper)

function searchChange(event) {
    console.log(event.target.value);
}

async function renderMovies(){
    const response = await fetch (`https://www.omdbapi.com/?apikey=1f242e1c&s=batman`)
    const data = await response.json()
    const moviesArr = data.searchChange
    moviesWrapper.innerHTML = moviesArr.map((movie) => {
        return `
        <div class="movie">
        <img src= alt="" />
        <h2></h2>
        <h4></h4>
        <button>Learn More</button>
        </div>
        `
    })
}

renderMovies()