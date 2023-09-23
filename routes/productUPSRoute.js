const express = require("express");
const router = express.Router();

const {
    getProductUPS,
    addNewProductUPS
} = require('../controllers/productUPSController');

router.get("/", (req, res) => getProductUPS(req, res));

router.post("/new", (req, res) => addNewProductUPS(req, res));

module.exports = router;