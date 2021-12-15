const { posts, users, likes } = require("../../../models");
const socketIo = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected" + socket.id);
    // ==============================
    socket.on("LoadAllPosts", async () => {
      try {
        const data = await posts.findAll({
          include: [
            {
              model: users,
              attributes: {
                exclude: ["createdAt", "updatedAt", "password", "email"],
              },
            },
          ],
          attributes: {
            exclude: ["updatedAt", "id"],
          },
          order: [["createdAt", "DESC"]],
        });
        io.emit("PostsUsers", data);
      } catch (error) {
        console.log(error);
      }
    });

    socket.on("LikePosts", async () => {
      try {
        const data = await likes.create({});
      } catch (error) {}
    });

    socket.on("disconnect", () => {
      console.log("user logout");
    });
  });
};

module.exports = socketIo;
