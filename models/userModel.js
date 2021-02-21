class User {
    constructor(name, surname, userID, dni, email, password, phone, address, payment) {
        this.name = name,
            this.surname = surname,
            this.userID = userID,
            this.dni = dni,
            this.email = email,
            this.password = password,
            this.phone = phone,
            this.address = address,
            this.payment = payment
    };
};

module.exports = User;