import { useEffect, useState } from "react";
import axios from 'axios';
import "./styles/MovieList.css";

export default function MovieList() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        axios.get('http://localhost:3312/api/movies')
        .then(response => setMovies(response.data))
        .catch(error => console.error("Erreur lors de la récupération des films", error))
    }
    return (
        <>
            <div className="movie-list-container">
                {
                    movies.map((movie, id) => (
                        <div key={id} className="movie-container">
                        <h2>{movie.title}</h2>
                        <p>Réalisateur: {movie.director}</p>
                        <p>Année de sortie:  {movie.release_year}</p>
                        <img
                            src={movie.image}
                            alt={movie.title}
                        />
                        <div className="buttons">
                            <button>Modifier</button>
                            <button>Supprimer</button>
                        </div>
                    </div>
                    ))
                }
            </div>
        </>
    );
}
