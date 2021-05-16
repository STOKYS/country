socket.on("sendData", (data) => {
    recievedData = data
    loadData()
})

socket.on("sendAddData", ({data, idone, idtwo = "heh"}) => {
    recievedData = data
    loadAddData(idone, idtwo)
})

let recievedData