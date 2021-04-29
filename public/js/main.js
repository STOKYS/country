const socket = io();

let value = 0

const quickinfo = [
    {
      title: "Germanic Tribes",
       year: "750BC - 768 AD",
       text: "Sample Text",
       img: "media/img/quick_gertrb.png"
    },
    {
      title: "Francia",
      year: "768 - 843",
       text: "Sample Text",
       img: "media/img/quick_fran.png"
    },
    {
      title: "Kingdom of Germany",
      year: "843 - 962",
      text: "Sample Text",
      img: "media/img/quick_eafran.png"
    },
    {
      title: "Holy Roman Empire",
      year: "962 - 1806",
      text: "Sample Text",
      img: "media/img/quick_hre.png"
    },
    {
      title: "Kingdom of Prussia",
      year: "1701 - 1815",
      text: "Sample Text",
      img: "media/img/quick_prus.png"
    },
    {
      title: "German Confederation",
      year: "1815 - 1866",
      text: "Sample Text",
      img: "media/img/quick_gerconf.png"
    },
    {
      title: "North German Confederation",
      year: "1866 - 1871",
      text: "Sample Text",
      img: "media/img/quick_ngerconf.png"
    },
    {
      title: "German Empire",
      year: "1871 - 1918",
      text: "Sample Text",
      img: "media/img/quick_geremp.png"
    },
    {
      title: "Weimar Republic",
      year: "1918 - 1933",
      text: "Sample Text",
      img: "media/img/quick_weimr.png"
    },
    {
      title: "Nazi Germany",
      year: "1933 - 1945",
      text: "Sample Text",
      img: "media/img/quick_nazi.png"
    },
    {
      title: "Allied-occupied Germany",
      year: "1945 - 1949",
      text: "Sample Text",
      img: "media/img/quick_occup.png"
    },
    {
      title: "West/East Germany",
      year: "1949 - 1990",
      text: "Sample Text",
      img: "media/img/quick_weger.png"
    },
    {
      title: "Germany",
      year: `1990 - 2021`,
      text: "Sample Text",
      img: "media/img/quick_germany.png"
    },
];

$("#history_timeline_slider_slider").on("input", function () {
    $("#history_quick_box_info").fadeOut(200)
    value = this.value
    window.setTimeout(function(){
        $("#history_quick_box_info_title").text(quickinfo[value].title)
        $("#history_quick_box_info_year").text(quickinfo[value].year)
        $("#history_quick_box_info_text").text(quickinfo[value].text)
        $("#history_quick_box_info_image").attr("src",`${quickinfo[value].img}`);
        $("#history_quick_box_info").fadeIn(200)
    }, 200)
});


$("body>section:not(:first-child)").hide()

$("#intro_box_button").click(function(){
    $(this).parent().parent().hide(300)
    $("body>section:not(:first-child)").show()
    $("#main").hide()
})

$("#history_quick_box_info_button").click(function(){
    $("body>section:not(:last-child)").hide(300)
    $("#main").show()
    $("body").css({"height":"100%", "width":"100%"})
    socket.emit("document", (value))
})

$("#goBack").click(function(){
    $("body>section:not(:first-child)").show()
    $("#main").hide(300)
    $("body").css({"height":"100vh", "width":"100vw"})
})

function loadData(){
    $("main").html(recievedData.html)
    recievedData = ''
    $("#main_info").hover(function(){
        $(this).css({"width":"25%", "height":"max-content", "overflow-y":"scroll"})
        $("body").css({"overflow-y":"hidden"})
    }, function(){
        $(this).css({"width":"20%", "height":"calc(100vh - 70px)", "overflow-y":"hidden"})
        $("body").css({"overflow":"auto"})
    })
    
    $("#main_content>section>h3").click(function(){
        if ($(this).siblings().first().css("display") == "none"){
            $(this).siblings().show(500)
            $(this).css({"border-bottom":"1px solid"})
        } else {
            $(this).siblings().hide(500)
            $(this).css({"border-bottom":"0"})
        }
    })
    
    $( window ).resize(function() {
        $("main").css({"height":`${$('#main_content').outerHeight()}`})
    })
    
    $(".selection_menu>button").click(function(){    
        $(this).prop( "disabled", true )
        $(this).siblings().prop( "disabled", false )
        $(this).parent().siblings("div").hide(100)
        $(`#art${$(this).attr('id').slice(-2)}`).show(100)
    })
}

/*let x = document.getElementsByTagName("main")[0].innerHTML
let y = {html: x}
let z = JSON.stringify(y)
console.log(z)*/