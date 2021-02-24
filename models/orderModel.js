const mongoose = require("mongoose");

const orderSchema = {


    idUser: {
        type: ObjectId,
        required: true,
    },
    idFilm: {
        type: ObjectId,
        required: true,
    },
    dateOrderInitial: {
        type: Date,
        default: new Date,
    },
    dateOrderFinish: {
        type: Date,
        default: new Date(+new Date() + 2 * 24 * 60 * 60 * 1000)
    },
    price: {
        type: String,
        required: true,
        default: "2€"
    }


}
const Order = mongoose.model("order", orderSchema);
module.exports = Order;