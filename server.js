const express = require("express");
const socket = require("socket.io");
const http = require("http");

const app = express();
const PORT = 3000 || process.env.PORT;
const server = http.createServer(app);

// Set static folder
app.use(express.static("public"));

// Socket setup
const io = socket(server);

// Players array
const users = [];

io.on("connection", (socket) => {
  console.log("Made socket connection", socket.id);

  socket.on("join", (data) => {
    if (data !== "") {
      users.push(data);
      console.log(data);
    }
    io.sockets.emit("join", { users: users });
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
