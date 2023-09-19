const express = require("express");
const route = express.Router();

const {
    getProductUPS,
} = require('../controllers/productUPSController');

route.get("/", (req, res) => getProductUPS(req, res));

module.exports = {
    getProductUPS,
}