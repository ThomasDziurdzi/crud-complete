import axios from "axios";
import { useEffect, useState } from "react";

export default function Form({ getMovies, movieUpdate, setMovieUpdate }) {
    const [newMovie, setNewMovie] = useState({
        title: "",
        director: "",
        release_year: "",
        image: "",
    });
    const [isEditing, setIsEditing] = useState(false);

 
    useEffect(() => {
        if (movieUpdate) {
            setNewMovie({
                title: movieUpdate.title,
                director: movieUpdate.director,
                release_year: movieUpdate.release_year,
                image: movieUpdate.image,
            });
            setIsEditing(true)
        }
    }, [movieUpdate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("title", newMovie.title);
        formData.append("director", newMovie.director);
        formData.append("release_year", newMovie.release_year);
    
        if (newMovie.image) {
            formData.append("image", newMovie.image);
        }
    
       
    
        try {
            if (isEditing) {
                await axios.put(
                    `http://localhost:3312/api/movies/${movieUpdate.id}`,
                    formData
                );
                console.info("Movie updated successfully.");
            } else {
                await axios.post("http://localhost:3312/api/movies/", formData);
                console.info("Movie added successfully.");
            }
    
            // Reset the form
            setNewMovie({
                title: "",
                director: "",
                release_year: "",
                image: null,
            });
            getMovies();
            setMovieUpdate(null); // Resetting the movieUpdate state
            setIsEditing(false);
        } catch (err) {
            console.error("Error during submission:", err);
        }
    };
    

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setNewMovie({ ...newMovie, image: files[0] });
        } else {
            setNewMovie({ ...newMovie, [name]: value });
        }
    };
   
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titre"
                    name="title"
                    value={newMovie.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Réalisateur"
                    name="director"
                    value={newMovie.director}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Année"
                    name="release_year"
                    value={newMovie.release_year}
                    onChange={handleChange}
                />
                <input
                    type="file"
                    placeholder="Image"
                    name="image"
                    onChange={handleChange}
                />
                <button>{movieUpdate ? "Modifier le film" : "Valider"}</button>
            </form>
        </div>
    );
}
