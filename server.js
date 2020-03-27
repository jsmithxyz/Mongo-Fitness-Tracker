const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(MONGODB_URI, {
    useNewurlParser: true,
    userFindAndModify: false
})

const db = require("./models");

// require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
