const mongoose = require("mongoose");

const orderSchema = {

    order_date: {
        type: Date
    },
    return_date: {
        type: Date,
        default: new Date(+new Date() + 4 * 24 * 60 * 60 * 1000)
    },
    price: {
        type: String,
        default: "2€",
    },
    customerId: {

    },
    filmId: {

    }

};
const Order = mongoose.model("order", orderSchema);
module.exports = Order;