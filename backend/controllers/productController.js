import asyncHandler from "express-async-handler"; //handles exceptions instead of using a bunch of try-catch
import Product from "../Models/productModel.js";

// @desc Fetch all products
// @route /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc Fetch a product
// @route /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById };
