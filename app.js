//Constants
const express = require('express');
const app = express();
const db = require("./storage/db");
const port = 3000;
const routerFilms = require("./routers/filmRouter");

//Middleware

app.use(express.json());

app.use(routerFilms);

//Server Runner
db
    .then(() => {
        app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
    })
    .catch((err) => console.log(err.message))