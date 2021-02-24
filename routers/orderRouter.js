const routerOrder = require("express").Router();
const orderController = require("../controllers/orderController");
const movieSchema = require("../models/orderModel");

//API use
routerOrder.get("/allorders", async(req, res) => {
    try  {
        res.json(await orderController.findAllOrders())
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

routerOrder.get("/order/:id", async(req, res) => {
    try  {
        const id = req.params.id;
        res.json(await orderController.findById(id))
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

routerOrder.post("/addorder", async(req, res) => {
    try {
        const id = await orderController.addOrder(req.body);
        res.json(id);
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

routerOrder.put('/update-order/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await orderController.updateOrder(id, new movieSchema(req.body.id)));
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerOrder.delete('/remove-order/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await orderController.deleteOrder(id);
        res.json({ status, id });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

module.exports = routerOrder;