const mongoose = require("mongoose");

const ProductUPSSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    powerRating: {
        type: String,
        required: true,
    },
    voltage: {
        type: String,
        required: true,
    },
    config: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    features: {
        type: [String],
        required: true,
        default: []
    },
    applications: {
        type: [String],
        required: true,
        default: []
    }

});

const ProductUPS = mongoose.model("products-ups", ProductUPSSchema);

module.exports = ProductUPS;