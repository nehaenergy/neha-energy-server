const ProductUPS = require("../models/ProductUPS");

const getProductUPS = async (req, res) => {

    const allUps = await ProductUPS.find();
    return res.json(allUps);

}

const addNewProductUPS = async (req, res) => {

    const {
        name, 
        powerRating, 
        voltage,
        config,
        image,
        description,
        features,
        applications,
        pdf
    } = req.body;

    const newUps = new ProductUPS({ 
        name, 
        powerRating, 
        voltage,
        config,
        image,
        description,
        features,
        applications,
        pdf
    });

    await newUps.save();
    return res.json({ msg: "New Ups added successfully"});
}

module.exports = {
    getProductUPS,
    addNewProductUPS
}