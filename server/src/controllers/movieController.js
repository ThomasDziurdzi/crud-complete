import { Movie } from "../models/movieModel.js";

export const createMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).json({ err: "Failed to create contact" });
    }
};

export const readAllMovie = async (req, res) => {
    try {
        const movies = await Movie.readAll();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json(`Failed to load movies: ${err}`);
    }
};

export const updateMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await Movie.update(id, data);
        res.status(202).send(`Movie with ID ${id} was successfully updated`);
    } catch (err) {
        res.status(500).json(`Failed tu update movie: ${err.message}`);
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id
        await Movie.delete(id)
        res.status(202).send(`Movie with ID ${id} was successfully deleted`)
    } catch (err) {
        res.status(500).json(`Failed to delete contact: ${err}`);
    }
}