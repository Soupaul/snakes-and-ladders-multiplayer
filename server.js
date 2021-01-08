const express = require("express");
const socket = require("socket.io");

const app = express();
const PORT = 3000 || process.env.PORT;

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection",(socket)=>{

  console.log("Made socket connection: ",socket.id);

});
