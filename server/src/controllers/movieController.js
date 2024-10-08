import { MovieModel } from "../models/movieModel.js";

export const createMovie = async (req, res) => {
    const movie = req.body
    const fileUpload = req.file ? `assets/images/${req.file.filename}` : null
    try {
        const newMovie = await MovieModel.create({...movie, image : fileUpload});
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).json({ err: "Failed to create contact" });
    }
};

export const readAllMovie = async (req, res) => {
    try {
        const movies = await MovieModel.readAll();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json(`Failed to load movies: ${err}`);
    }
};

export const updateMovie = async (req, res) => {
    const {id} = req.params;
    const updatedMovie = req.body;
    const fileUpload = req.file ? `assets/images/${req.file.filename}` : null
    try {

       const dataToUpdate = fileUpload ? {...updatedMovie, image : fileUpload} : updatedMovie;
        await MovieModel.update(id, dataToUpdate);
        res.status(202).send(`Movie with ID ${id} was successfully updated`);
        
    } catch (err) {
        res.status(500).json(`Failed tu update movie: ${err.message}`);
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id
      
        await MovieModel.delete(id)
        res.status(202).send(`Movie with ID ${id} was successfully deleted`)
    } catch (err) {
        res.status(500).json(`Failed to delete contact: ${err}`);
    }
}