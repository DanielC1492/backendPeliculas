const express = require('express');
const router = require("./Cutreflix/routers");

const app = express();

const port = 3000;

app.use(router);

app.listen(port, () => console.log(`Listening at ${port}`));