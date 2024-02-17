const express = require('express');
const router = express.Router();


//import controller here
const {registration} = require("../controllers/registration");

//define API routes
router.post("/registration", registration);
module.exports = router;