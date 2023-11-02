import { Link } from "react-router-dom"
import '../css/Movie_card.scss'



function Movie(props) {
    return(
        <div className="movie_card"  key={props.id} >
            <img src={props.poster} alt="poster"/>
            <h3>{props.title}</h3>
            <button><Link class="btn" to={`/movies/${props.id}`}>See details</Link></button>
        </div>
    )
}

export default Movie