const Order = require('../models/orderModel');



class Rental {

    constructor() {}

    //GET order by name

    async findAllOrders(orderArray) {
        return Order.find(orderArray);
    };

    //GET Order by ID

    async findById(id) {
        return Order.findById(id);
    };

    //POST Insert a new order

    async addOrder(newOrder) {
        return Order.create(newOrder);
    };

    //PUT Update order

    async updateOrder(order) {
        return Order.findByIdAndUpdate(order);
    };

    //DELETE order by ID

    async deleteOrder({ id: id }) {
        const idFound = Order.findOneAndDelete({ id: id })
        return idFound.remove()
    };
};


let orderController = new Rental();
module.exports = orderController;