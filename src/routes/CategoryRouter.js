const CategoryController = require("../controllers/CategoryController");
const router = require("express").Router();

// ADD CATEGORY
router.post("/", CategoryController.addCategory);

// GET ALL CATEGORIES
router.get("/", CategoryController.getAllCategories);

// GET A CATEGORY
router.get("/:id", CategoryController.getACategory);

// UPDATE CATEGORY
router.put("/:id", CategoryController.updateCategory);

// DELETE CATEGORY
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
