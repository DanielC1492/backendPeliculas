const Film = require('../models/filmModel');



class Movie {

    constructor() {}

    //GET Films by name

    async findAllFilms(filmArray) {
        return Film.find(filmArray);
    };

    //GET Films by ID

    async findById(id) {
        return Film.findById(id);
    };

    //POST Insert a new film

    async addFilm(newMovie) {
        return Film.create(newMovie);
    };

    //PUT Update film

    async updateFilm(movie) {
        return Film.findByIdAndUpdate(movie);
    };

    //DELETE film by ID

    async deleteFilm({ id: id }) {
        const idFound = Film.findOneAndDelete({ id: id })
        return idFound.remove()
    };
};


let filmController = new Movie();
module.exports = filmController;