import movies from "../data/Movie.json"
import { useParams } from "react-router-dom"

function MoviesNolan() {
   const {id} = useParams()
   const movie = movies.find( m => m.id === id)

    return(
        <div className="movie">
            <div>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt="poster"/>            
            </div>
            <div className="movie_info">           
            <h5>Genre: {movie.Genre}</h5>
            <span className="imdb">IMDb: {movie.Value}</span>
            <span><strong>Awards:</strong> {movie.Awards}</span>
            <span><strong>Year:</strong> {movie.Year}</span>
            <span><strong>Released:</strong> {movie.Released}</span>
            <span><strong>Runtime:</strong> {movie.Runtime}</span>
            <span><strong>Director:</strong> {movie.Director}</span>
            <span><strong>Writers:</strong>{movie.Writer}</span>
            <span><strong>Actors:</strong> {movie.Actors}</span>
            <span><strong>Language:</strong> {movie.Language}</span>
            <span><strong>Country:</strong> {movie.Country}</span>
            <span><strong>Plot:</strong> {movie.Plot}</span>
            </div>
        </div>
    )
}
export default MoviesNolan
