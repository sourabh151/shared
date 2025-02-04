const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  let query = {};
  if (req.query.name) {       
    query.name = { $regex: req.query.name, $options: "i" };
  }
  if (req.query.company) {
    query.company = { $regex: req.query.company, $options: "i" };
  }
  if (req.query.featured) {
    query.featured = req.query.featured === "true" ? true : false;
  }
  if (req.query.rating) {
    let reg = /([<>=]+)(\d+\.*\d*)/g;
    console.log(req.query);

    let rating = req.query.rating.matchAll(reg);
    rating = rating.next();
    let operator = rating.value[1];
    let value = rating.value[2];    
    console.log(operator, value);
    if (operator === "<") {
      query.rating = { $lt: Number(value) };
    } else if (operator === ">") {
      query.rating = { $gt: Number(value) };
    } else if (operator === "=") {
      query.rating = { $eq: Number(value) };
    } else if (operator === "<=") {
      query.rating = { $lte: Number(value) };
    } else if (operator === ">=") {
      query.rating = { $gte: Number(value) };
    }
  }

  let result;
  if (req.query.page) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = await Product.find(query,null,{skip,limit});
  }
  console.log(query);
  res.send(result);
};
const getAllProductsStatic = async (req, res) => {
  const result = await Product.find({});
  res.send(result);
};
module.exports = { getAllProducts, getAllProductsStatic };
