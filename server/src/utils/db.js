import sqlite3 from "sqlite3";

sqlite3.verbose();

export const db = new sqlite3.Database("./src/utils/contact.sqlite");

export const initDB = () => {
  const sqlMovies = `
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY,
      title TEXT,
      director TEXT,
      release_year INTEGER
      )
  `;

  const sqlUsers = `
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
    )
  `;
  db.exec(sqlMovies, (err) => {
    if (err) {
      console.log(`Failed to load SQL query: ${err}`);
    } else {
      console.log(`SQL content loaded`);
    }
  });

  db.exec(sqlUsers, (err) => {
    if (err) {
      console.log(`Failed to load SQL query: ${err}`);
    } else {
      console.log(`SQL content loaded`);
    }
  });
};
