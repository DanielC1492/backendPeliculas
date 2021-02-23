const mongoose = require("mongoose");


const userSchema = {
    name: {
        type: String
    },
    userID: {
        type: String
    },
    DNI: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    address: {
        type: String
    },
    payment: {
        type: String,
        required: true
    }

};

const User = mongoose.model("user", filmSchema);
module.exports = User;