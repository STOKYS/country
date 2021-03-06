const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const fs = require("fs").promises;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

async function readJSON(path){
    const data = await fs.readFile(path)
    .catch(err => console.error("File read failed ", err))
    return JSON.parse(data)
}

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    socket.on("document", ({index, type, idone, idtwo = "bro"}) => {
        readJSON('data/data.json')
        .then(data => {
            if (type)  {
                let datas = {
                    content: data[index].content,
                    info: data[index].info,
                    sections_main: data[index].sections_main,
                    sections_opt: data[index].sections_opt[0]
                }
                socket.emit(
                    "sendData", datas
                )
            } else {
                if (idtwo == "bro"){
                    let datas = data[index].sections_opt[idone]
                    socket.emit(
                        "sendAddData", {data: datas, idone: idone}
                    )
                } else {
                    let datas = data[index].sections_opt[idone][idtwo]
                    socket.emit(
                        "sendAddData", {data: datas, idone: idone, idtwo: idtwo}
                    )
                }
            }
        })
        .catch(err => console.error("File read failed ", err))
    })
    socket.on("map", (id) => {
        readJSON('data/geodata.json')
        .then(data => {
            for (let i = 0; i < data.length; i++){
                if(data[i][0] == id){
                    socket.emit("returnData", {datanew: data[i], id: id})
                }
            }
        })
    })
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
