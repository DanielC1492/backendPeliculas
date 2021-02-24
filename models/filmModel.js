const mongoose = require("mongoose");

const filmSchema = {
    title: {
        type: String,
        required: true,
        default: "film"
    },
    releasingDate: {
        type: Date,
        default: new Date
    },
    year: {
        type: Number
    },
    country: {
        type: String
    },
    poster: {
        type: String
    },
    genre: {
        type: String,

    },
    synopsis: {
        type: String
    },
    adult: {
        type: Boolean,
        default: false
    }
};


const Film = mongoose.model("film", filmSchema);
module.exports = Film;