const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const getData = require("./utils/data.js");

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log("User connected")
    socket.on("document", (index) => {
        let old;
        fs.readFile("data/data.json", "utf8", (err, jsonString) => {
          if (err) {
            console.log("File read failed:", err);
            return;
          }
          if (jsonString) {
            old = JSON.parse(jsonString);
            data = old[index]
            socket.emit(
                "sendData", data
            )
          } else {
            console.log("false");
          }
        });
    })
})

const PORT = 8080 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
