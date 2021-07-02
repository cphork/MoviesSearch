import React from "react"


const MovieDisplay = ({ movie }) => {

    const loaded = () => {
        return (
            <>
                <h2 className='title'>{movie.Title}</h2>
                <h3 className='year'>Year released: {movie.Year}</h3>
                <h3 className='genre'>Genre: {movie.Genre}</h3>
                <img className='movie-img' src={movie.Poster} alt={movie.Title} />
                <p className='actors-text'>Actors:</p>
                <h4 className='actors'>{movie.Actors}</h4>
                <p className='plot-text'>Plot:</p>
                <h4 className='plot'>{movie.Plot}</h4>
                <p className='directors-text'>Director:</p>
                <h4 className='director'>{movie.Director}</h4>
                <p className='writer-text'>Writer:</p>
                <h4 className='writer'>{movie.Writer}</h4>
                <p className='awards-text'>Awards:</p>
                <h4 className='awards'>{movie.Awards}</h4>
                <p className='imdb-text'>imdb Rating:</p>
                <h4 className='imdb'>{movie.imdbRating}</h4>
                <p className='box-text'>Box Office:</p>
                <h4 className='box'>{movie.BoxOffice}</h4>
                <p className='website-text'>Website:</p>
                <h4 className='website'>{movie.Website}</h4>

            </>



        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }

    return movie ? loaded() : loading()



}



export default MovieDisplay