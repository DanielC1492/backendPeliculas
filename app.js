const express = require('express');
//const router = require('./routers/filmRouter');
const mongoose = require("mongoose");

const app = express()
const port = 3000

app.use(express.json());
app.use(router);



app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})