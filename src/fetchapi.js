// https://api.themoviedb.org/3/movie/550?api_key=
const fetch_movies = async()=>{
    const raw_data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7c2dd11a7cca2cabc0ce2e539b616429&language=en&page=1`)
    const movies = await raw_data.json()
    const data = [...movies.results]
    return(data)
}
const fetch_single_movies = async(movie_id)=>{
    const single_movie = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=7c2dd11a7cca2cabc0ce2e539b616429&language=en&page=1`)
    const movie = await single_movie.json()
    const data = movie
    return(data)
}

export{
    fetch_movies,
    fetch_single_movies
}
