import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import MovieList from "../components/MovieList";
import "./styles/Movies.css";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [movieUpdate, setMovieUpdate] = useState(null);
   

    const getMovies = () => {
        axios
            .get("http://localhost:3312/api/movies")
            .then((response) => setMovies(response.data))
            .catch((error) =>
                console.error("Erreur lors de la récupération des films", error)
            );
    };

    useEffect(() => {
        getMovies();
    }, []);

    const handleDelete = (id) => {
        console.log("coucou", id)
        axios
            .delete(`http://localhost:3312/api/movies/${id}`)
            .then(() => {
                getMovies();
            })
            .catch((error) =>
                console.error("Erreur lors de la suppression du film", error)
            );
    };

    return (
        <>
            <Form
                getMovies={getMovies}
                movieUpdate={movieUpdate}
                setMovieUpdate={setMovieUpdate}
               
                
            />
            <MovieList
                movies={movies}
                setMovieUpdate={setMovieUpdate}
                handleDelete={handleDelete}
            />
        </>
    );
}
