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
    socket.on("document", ({index, type, idone, idtwo = "bro"}) => {
        let old;
        console.log("Getting new data")
        fs.readFile("data/data.json", "utf8", (err, jsonString) => {
          if (err) {
            console.log("File read failed:", err);
            return;
          }
          if (jsonString) {
            old = JSON.parse(jsonString);
            if (type)  {
                let data = {
                    content: old[index].content,
                    info: old[index].info,
                    sections_main: old[index].sections_main,
                    sections_opt: old[index].sections_opt[0]
                }
                socket.emit(
                    "sendData", data
                )
            } else {
                if (idtwo == "bro"){
                    let data = old[index].sections_opt[idone]
                    socket.emit(
                        "sendAddData", {data: data, idone: idone}
                    )
                } else {
                    let data = old[index].sections_opt[idone][idtwo]
                    socket.emit(
                        "sendAddData", {data: data, idone: idone, idtwo: idtwo}
                    )
                }
            }
          } else {
            console.log("false");
          }
        });
    })
})

const PORT = 8080 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
