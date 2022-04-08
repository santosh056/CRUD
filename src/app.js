const { Router } = require("express");
const express = require("express");
require("./db/conn");
const router = require("./routers/router");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


//Register the Router
app.use(router);
/* --------------- GET Request For All Data -------------------*/


app.listen(port, () =>{
    console.log(`Running on port number ${port}`);
});