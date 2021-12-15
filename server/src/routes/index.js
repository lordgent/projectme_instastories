const express = require("express");
const router = express.Router();
const { authuser } = require("../middlewares/Auth");
const { SignUp, signIn } = require("../controllers/auth");
const { uploadData } = require("../middlewares/fileupload");

router.post("/signup", SignUp);
router.post("/signin", signIn);

const { addPosts } = require("../controllers/posts");

router.post("/posts", authuser, uploadData("image"), addPosts);

module.exports = router;
