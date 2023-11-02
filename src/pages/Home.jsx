import movies from "../data/Movie.json"
import Movie from '../components/Movie'
import '../css/Home.scss'

import { useState } from "react";
import FsLightbox from "fslightbox-react";

function Home () {
    const [toggler, setToggler] = useState(false);
    return (
        <div className="home">
            <h1>List of Movies from <span>Christopher Nolan</span></h1>
            <div className="movie_wrapper">
                {
                    movies.map(movie =>(
                        <Movie title={movie.Title} poster={movie.Poster} id={movie.id} key={movie.id}></Movie>
                    ))
                }
            </div>
            <div>
            <button onClick={() => setToggler(!toggler)}>
				Open the lightbox.
			</button>
			<FsLightbox
				toggler={toggler}
				sources={[
					"/Images/Example.jpg",
					"https://i.imgur.com/fsyrScY.jpg",
					"https://www.youtube.com/watch?v=3nQNiWdeH2Q",
					"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
				]}
			/>
            </div>
        </div>
    )
}

export default Home