const moviesWrapper = document.querySelector(".movies")
    
function searchChange(event) {
    console.log(event.target.value)
}

async function renderMovies(){
    const response = await fetch(`https://www.omdbapi.com/?s=batman&apikey=1f242e1c`)
    const data = await response.json()
    const moviesArr = data.Search
    moviesWrapper.innerHTML = moviesArr.map(() => {
        return `
        <div class="movie">
        <img src= />
        <h2>Title</h2>
        <h4>Year<h4>
        <button>Learn More</button>
        </div>
        `
    })
}

renderMovies()