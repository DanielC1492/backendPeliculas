const User = require('../models/userModel');



class Customer {

    constructor() {}

    //GET users by name

    async findAllUsers(userArray) {
        return User.find(userArray);
    };

    //GET Users by ID

    async findById({ id: id }) {
        return User.findOne({ id: id });
    };

    //POST Insert a new user

    async addUser(newUser) {
        return User.create(newUser);
    };

    //PUT Update user

    async updateUser(customer) {
        return User.findByIdAndUpdate(customer);
    }

    //DELETE user by ID

    async deleteUser({ id: id }) {
        const idFound = User.findOneAndDelete({ id: id })
        return idFound.remove()
    };



}


let userController = new Customer();
module.exports = userController;