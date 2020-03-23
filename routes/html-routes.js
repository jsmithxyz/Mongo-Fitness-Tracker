const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness', { useNewUrlParser: true });

router.get("/", (req, res) => {
    res.status(200).sendFile("../html/index.html");
})
module.exports = router;