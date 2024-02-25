const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    nameCat: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    namePro: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    priceNew: {
      type: String,
      required: true,
    },
    priceOld: {
      type: String,
    },
    sale: {
      type: String,
    },
    SKU: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    dimension: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

let Category = mongoose.model("Category", categorySchema);
let Product = mongoose.model("Product", productSchema);

module.exports = { Category, Product };
