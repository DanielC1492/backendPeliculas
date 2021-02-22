const mongoose = require("mongoose");
const film = require('../models/filmModel');



class Film {

    constructor() {}

    //GET Films by name

    async findAllFilms(filmArray) {
        return film.find(filmArray);
    };

    //GET Films by ID

    async findById({ id: id }) {
        return film.findOne({ id: id });
    };

    //POST Insert a new film

    async addFilm({ newMovie }) {
        return film.create({ newMovie });
    };

    //PUT Update film

    async updateFilm(movie) {
        return film.findByIdAndUpdate(movie);
    }

    //DELETE film by ID

    async deleteFilm({ id: id }) {
        const idFound = film.findOneAndDelete({ id: id })
        return idFound.remove()
    };



}


let filmController = new Film();
module.exports = filmController;