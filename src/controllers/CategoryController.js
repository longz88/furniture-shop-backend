const { Category, Product } = require("../models/model");

const CategoryController = {
  addCategory: async (req, res) => {
    try {
      const newCategory = await Category(req.body);
      const savedCategory = await newCategory.save();

      res.status(200).json(savedCategory);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const Categories = await Category.find().sort({ createdAt: -1 });

      res.status(200).json(Categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getACategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id).populate(
        "products"
      );

      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateCategory: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id, { $set: req.body });

      res.status(200).json("Updated category successfully !!!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await Product.updateMany({ category: req.params.id }, { category: null });

      await Category.findByIdAndDelete(req.params.id);

      res.status(200).json("Deleted category successfully !!!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = CategoryController;
