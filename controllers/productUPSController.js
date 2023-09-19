const { ProductUPS } = require("../models/ProductUPS");

export const getProductUPS = async (req, res) => {

    const allUps = await ProductUPS.find();
    return res.json(allUps);

}

export const addNewProductUPS = async (req, res) => {

    const {
        name, 
        powerRating, 
        voltage,
        config,
        image,
        features,
        applications
    } = req.body;

    const newUps = new ProductUPS({ 
        name, 
        powerRating, 
        voltage,
        config,
        image,
        features,
        applications
    });

    await newUps.save();
    return res.json({ msg: "New Ups added successfully"});
}