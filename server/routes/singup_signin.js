const express = require("express");
const router = express.Router();
const User = require("../models/User"); 

// Signup Route
router.post("/signup", async (req, res) => {
    res.send("Signup logic here");
});

// Signin Route
router.post("/signin", async (req, res) => {
    //res.send("Signin logic here");
    { }
});

module.exports = router; // Exporting the router
