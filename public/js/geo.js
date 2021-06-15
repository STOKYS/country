const socket = io();

let data = [];

function getData(id){
    let done = false
    data.forEach(element => {
        if(element[0] == id){
            done = true
            loadData(id)
        }
    })
    if (!done){
        socket.emit("map", id)
    }      
}

socket.on("returnData", ({datanew, id}) => {
    data[id] = datanew
    loadData(id)
})

function loadData(id) {
    $("#info_div>div").css("width",`${$("#info_div").width()}`)
    $("#info_div").animate({width:'toggle'},200, function(){
        $("#info_h").text(data[id][1])
        $("#info_p").html(data[id][2])
        $("#info_img").attr("src", `media/flags/${data[id][3]}`)
        $("#info_s").text(data[id][4])
    });
    $("#info_div").slideDown(300, function(){
        $("#info_div").children().css("width", "100%")
    })
}

$("svg > *").click(function(){
    getData(this.id)
})

$("#threeD").click(function(){
    $(this).attr("disabled", "disabled")
    $("#twoD").attr("disabled", false)
    $("svg").hide(0)
    $("canvas").show(0)
})

$("#twoD").click(function(){
    $(this).attr("disabled", "disabled")
    $("#threeD").attr("disabled", false)
    $("svg").show(0)
    $("canvas").hide(0)
})

$("#svgMap").attr("viewBox",`-300 -100 ${(window.innerWidth / 3 * 2)} ${window.innerHeight}`)