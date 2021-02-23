const routerUser = require("express").Router();
const userController = require("../controllers/userController");
const movieSchema = require("../models/userModel");

//API use
routerUser.get("/allusers", async(req, res) => {
    try  {
        res.json(await userController.findAllUsers())
    } catch (err) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerUser.get("/user/:id", async(req, res) => {
    try  {
        res.json(await userController.findUserById())
    } catch (err) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerUser.post("/adduser", async(req, res) => {
    try  {
        const id = await userController.addUser(req.body)
        res.json(id);
    } catch (err) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerUser.put('/update-user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.updateUser(id, new userSchema(req.body.id)));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

routerUser.delete('/remove-user/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteUser(id);
        res.json({ status, id });
    } catch (error) {
        return res.Status(500).json({
            message: error.message
        });
    }
});

module.exports = routerUser;