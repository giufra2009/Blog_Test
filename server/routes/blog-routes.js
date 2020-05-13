const express = require("express");

const blogControllers = require("../controllers/blog-controller");

const router = express.Router();

router.get("/", blogControllers.getListPost);

router.get("/:ID", blogControllers.getPostByID);

module.exports = router;
