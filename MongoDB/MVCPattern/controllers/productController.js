const Product = require("../models/productModel");

// business logic

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create product
const createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const newProduct = new Product({
      name,
      price,
      category,
      description,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category, description } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, category, description },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
