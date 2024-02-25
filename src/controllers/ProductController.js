const { Category, Product } = require("../models/model");

const ProductController = {
  addProduct: async (req, res) => {
    try {
      const newProduct = await Product(req.body);
      const savedProduct = await newProduct.save();

      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });

      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate(
        "category"
      );

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateProduct: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id, { $set: req.body });

      res.status(200).json("Updated successfully !!!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Category.updateMany(
        { products: req.params.id },
        { $pull: { products: req.params.id } }
      );

      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully !!!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ProductController;
