const express = require("express");
const router = express.Router();
const hotelsController = require("../controllers/hotelsController")

router.route("/").get(hotelsController.getHotels);
router.route("/newhotel").post(hotelsController.addHotel);


module.exports = router;