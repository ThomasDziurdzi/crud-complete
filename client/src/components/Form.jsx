export default function Form() {
    return (
        <div className="movie-container">
        <form action="submit">
            <input type="text" placeholder="Titre" name="title" />
            <input type="text" placeholder="Réalisateur" name="director" />
            <input type="text" placeholder="Année" name="release_year" />
            <input type="file" placeholder="Image" name="image" />
            <button>Valider</button>
        </form>
    </div>
    )
}