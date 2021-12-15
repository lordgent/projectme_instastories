const { posts } = require("../../models");

exports.addPosts = async (req, res) => {
  try {
    const data = await posts.create({
      imagepost: req.files.image[0].filename,
      iduser: req.userid.id,
      caption: req.body.caption,
    });
    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
    });
  }
};
