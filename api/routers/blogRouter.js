const express = require("express");
const blogController = require("../controllers/blogController");
const { auth} =require("../auth/auth")
const router = express.Router();

router.route("/blogs").get(blogController.getBlogs);
router.route("/blog/:id").get(auth, blogController.getSingleBlog);
router.route("/newblog").post(auth, blogController.createBlog);
router.route("/blog/update/:id").patch(auth, blogController.updateBlog);

router.route("/blog/delete/:id").delete(auth, blogController.deleteBlog);


module.exports = router;