const moviesWrapper = document.querySelector(".movies")
    console.log(moviesWrapper)

function searchChange(event) {
    console.log(event.target.value)
}

async function renderMovies(){
    const response = await fetch(`https://www.omdbapi.com/?s=batman&apikey=1f242e1c`)
    const data = await response.json()
    const moviesArr = data.searchChange
}

renderMovies()