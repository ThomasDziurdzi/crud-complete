import "./styles/MovieList.css";

export default function MovieList({ movies, setMovieUpdate, handleDelete }) {
    return (
        <div className="movie-list-container">
            {movies.map((movie, id) => (
                <div key={id} className="movie-container">
                    <h2>{movie.title}</h2>
                    <p>Réalisateur: {movie.director}</p>
                    <p>Année de sortie: {movie.release_year}</p>
                    <img
                        src={`http://localhost:3312/${movie.image}`}
                        alt={movie.title}
                    />
                    <div className="buttons">
                        <button onClick={() => setMovieUpdate(movie)}>
                            Modifier
                        </button>
                        <button onClick={() => handleDelete(movie.id)}>Supprimer</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
