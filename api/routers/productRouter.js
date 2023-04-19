const express = require("express");
const productController = require("../controllers/ProductController");
const { auth} =require("../auth/auth")
const router = express.Router();

router.route("/products").get(productController.getProducts);
router.route("/product/:id").get(auth, productController.getSingleProduct);
router.route("/newproduct").post(auth, productController.createProduct);
router.route("/product/update/:id").patch(auth, productController.updateProduct);

router.route("/product/delete/:id").delete(auth, productController.deleteProduct);


module.exports = router;