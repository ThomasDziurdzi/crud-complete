import { db } from "../utils/db.js";

export const MovieModel = {
    create: (movie) => {
        const query =
            "INSERT INTO movies (title, director, release_year, image) VALUES (?, ?, ?, ?)";
        const params = [
            movie.title,
            movie.director,
            movie.release_year,
            movie.image,
        ];

        return new Promise((resolve, reject) => {
            db.run(query, params, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(movie);
                }
            });
        });
    },

    readAll: () => {
        const query = "SELECT * FROM movies";
        return new Promise((resolve, reject) => {
            db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },

    update: (id, movie) => {
        const query =
            "UPDATE movies SET title = ?, director = ?, release_year = ?, image = ? WHERE id = ?";
        const params = [
            movie.title,
            movie.director,
            movie.release_year,
            movie.image,
            id,
        ];

        return new Promise((resolve, reject) => {
            db.run(query, params, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(movie);
                }
            });
        });
    },

    delete: (id) => {
        const query = "DELETE FROM movies WHERE id = ?";
        const params = [id];
        return new Promise((resolve, reject) => {
            db.run(query, params, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },
};

