const ProductController = require("../controllers/ProductController");
const router = require("express").Router();

// ADD PRODUCT
router.post("/", ProductController.addProduct);

// GET ALL PRODUCTS
router.get("/", ProductController.getAllProducts);

// GET A PRODUCT
router.get("/:id", ProductController.getAProduct);

// UPDATE PRODUCT
router.put("/:id", ProductController.updateProduct);

// DELETE PRODUCT
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
