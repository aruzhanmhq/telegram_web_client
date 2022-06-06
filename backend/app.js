const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("./modules/telegramBot")

const app = express();
app.use(cors());

const usersRouter = require("./routers/UsersRouter");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/users", usersRouter)

const CONNECTION_STRING = 'mongodb+srv://tooag:anjumongodb@cluster0.zd3j3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING, (err) => {
    if(err) return console.log("connection error");
    app.listen(8080)
})


