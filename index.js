const moviesWrapper = document.querySelector(".movies");
const searchName = document.querySelector(".searchName")
    
function searchChange(event) {
    renderMovies(event.target.value)
    searchName.innerHTML
}

async function renderMovies(searchTerm){
    const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=1f242e1c`)
    const data = await response.json()
    const moviesArr = data.Search
    console.log(moviesArr)
    moviesWrapper.innerHTML = moviesArr.slice(0, 6).map((movie) => {
        return ` 
        <div class="movie">
        <img src=${movie.Poster} alt="" />
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}<h4>
        <button>Learn More</button>
        </div>
        `;
    }).join("");
}

