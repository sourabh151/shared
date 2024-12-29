const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  res.send("getAllproducts");
};
const getAllProductsStatic = async (req, res) => {
  const result = await Product.find({});
  res.send(result);
};
module.exports = { getAllProducts, getAllProductsStatic };
