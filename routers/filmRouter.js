const routerFilms = require("express").Router();
const filmController = require("../controllers/filmController");
const movieSchema = require("../models/filmModel");

//API use
routerFilms.get("/allfilms", async(req, res) => {
    try  {
        res.json(await filmController.findAllFilms())
    } catch (err) {
        return res.sendStatus(500).json({
            message: "Internal Server Error"
        });
    }
});

routerFilms.get("/film/:id", async(req, res) => {
    try  {
        res.json(await filmController.findById())
    } catch (err) {
        return res.sendStatus(500).json({
            message: "Internal Server Error"
        });
    }
});

routerFilms.post("/addfilm", async(req, res) => {
    try  {
        const id = await filmController.addFilm(req.body)
        res.json(id);
    } catch (err) {
        return res.sendStatus(500).json({
            message: "Internal Server Error"
        });
    }
});

routerFilms.put('/update-film/:id', async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await filmController.updateFilm(id, new movieSchema(req.body.id)));
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerFilms.delete('/remove-film/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'deleted'
        await filmController.deleteFilm(id);
        res.json({ status, id });
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

module.exports = routerFilms;