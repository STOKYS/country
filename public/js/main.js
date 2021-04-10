const socket = io();

$(document).ready(function(){
    $("body").fadeIn(300)
})

$("#mainpage").hide()

document.getElementById("titlescreen_section_east_btn").addEventListener("click", function(){
    fnc_showMainPage("east")
})

document.getElementById("titlescreen_section_west_btn").addEventListener("click", function(){
    fnc_showMainPage("west")
})

function fnc_showMainPage(which){
    $("#mainpage").show()
    if (which=="west"){
        $("#westGermany").show()
        $("#eastGermany").hide()
    } else {
        $("#westGermany").hide()
        $("#eastGermany").show()
    }
    $("body").css({"overflow": "auto", "overflow-x":"hidden"})
    $("#titlescreen").hide(500)
}

document.getElementById("toEast").addEventListener("click", function(){
    $("#westGermany").hide(500)
    $("#eastGermany").show()
})

document.getElementById("toWest").addEventListener("click", function(){
    $("#eastGermany").hide()
    $("#westGermany").show()
})


$(".info").hover(function(){
    console.log($(this.height))
    $(this).css({"width":"30%", "height":"max-content", "max-height":`calc(${window.innerHeight}px - 70px)`, "overflow-y":"scroll"});
    $(this).siblings().css({"filter":"blur(1px)"})
    $("body").css({"overflow-y":"hidden"})
}, function(){
    $(this).css({"width":"20%", "height":`calc(${window.innerHeight}px - 70px)`, "max-height":`calc(${window.innerHeight}px - 70px)`, "overflow-y":"hidden"});
    $(this).siblings().css({"filter":"blur(0px)"})
    $("body").css({"overflow-y":"auto"})
})

$("p").hover(function(){
    $(this).css({"background-color":"rgb(45,45,45)", "border":"1px solid grey"})
}, function(){
    $(this).css({"background-color":"rgba(0,0,0,0)", "border":"1px solid rgba(0,0,0,0)"})
})