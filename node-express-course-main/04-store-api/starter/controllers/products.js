const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const result = await Product.find({});
  res.send(result);
};
const getAllProductsStatic = (req, res) => {
  res.send("getAllproductsStatic");
};
module.exports = { getAllProducts, getAllProductsStatic };
