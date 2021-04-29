socket.on("sendData", (data) => {
    recievedData = data
    loadData()
})