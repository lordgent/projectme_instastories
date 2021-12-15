require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 4005;
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const router = require("./src/routes/index");
const cors = require("cors");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

require("./src/controllers/socket")(io);
app.use(express.json());
app.use(cors());
app.use("/socialnetwork/v1", router);
app.use("/uploads", express.static("uploads"));

server.listen(port, () => {
  console.log(`Server started on port`);
});
