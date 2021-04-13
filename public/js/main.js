const socket = io();

$(document).ready(function () {
  $("body").fadeIn(300);
});

$("#mainpage").hide();

document
  .getElementById("titlescreen_section_east_btn")
  .addEventListener("click", function () {
    fnc_showMainPage("east");
  });

document
  .getElementById("titlescreen_section_west_btn")
  .addEventListener("click", function () {
    fnc_showMainPage("west");
  });

function fnc_showMainPage(which) {
  $("#mainpage").show();
  $("#westGermany>main").css({ height: `${$("#westGermany").height()}` });
  $("#eastGermany>main").css({ height: `${$("#eastGermany").height()}` });
  if (window.innerWidth <= 1080){
    $("#westGermany>main>.info").css({"display":"none"})
    $("east#Germany>main>.info").css({"display":"none"})
  }
  if (which == "west") {
    $("#westGermany").show();
    $("#eastGermany").hide();
  } else {
    $("#westGermany").hide();
    $("#eastGermany").show();
  }
  $("body").css({ overflow: "auto", "overflow-x": "hidden" });
  $("#titlescreen").hide(500);
}

document.getElementById("toEast").addEventListener("click", function () {
  $("#westGermany").hide(0);
  $("#eastGermany").show();
});

document.getElementById("toWest").addEventListener("click", function () {
  $("#eastGermany").hide(0);
  $("#westGermany").show();
});

let darktheme = true

$(".themechanger").click(function(){
    let arr = ["dark", "white"]
    darktheme = !darktheme
    document.getElementById("themecss").href=`css/${arr[(darktheme ? 0 : 1)]}.css`
})

$(".info").hover(
  function () {
    if (window.innerWidth > 1080){
        $(this).css({
            width: "30%",
            height: "max-content",
            "max-height": `calc(${window.innerHeight}px - 60px)`,
            "overflow-y": "scroll",
          });
          $(this).siblings().css({ filter: "blur(1px)" });
          $("body").css({ "overflow-y": "hidden" });
    }
  },
  function () {
    if (window.innerWidth > 1080){
        $(this).css({
            width: "20%",
            height: `calc(${window.innerHeight}px - 60px)`,
            "max-height": `calc(${window.innerHeight}px - 60px)`,
            "overflow-y": "hidden",
          });
          $(this).siblings().css({ filter: "blur(0px)" });
          $("body").css({ "overflow-y": "auto" });
    }
  }
);

$("p").hover(
  function () {
      if (darktheme){
        $(this).css({
            "background-color": "rgb(45,45,45)",
            border: "1px solid grey",
          });
      }
  },
  function () {
    $(this).css({
      "background-color": "rgba(0,0,0,0)",
      border: "1px solid rgba(0,0,0,0)",
    });
  }
);

$("#titlescreen_section_west").hover(function () {
  console.log("hey");
  $("#titlescreen").css({
    "background-image": "url('../img/westgermanyback.png')",
  });
});

$("#titlescreen_section_east").hover(function () {
  console.log("hey");
  $("#titlescreen").css({
    "background-image": "url('../img/eastgermanyback.png')",
  });
});

$(".showmenu").click(function () {
  if ($(this).parent().parent().parent().attr("id") == "westGermany") {
    $("#westGermany>main>.info").css({
      display: `${
        $("#westGermany>main>.info").css("display") == "none"
          ? $("#westGermany>main>.info").css({ display: "inline" })
          : $("#westGermany>main>.info").css({ display: "none" })
      }`,
    });
  } else {
    $("#eastGermany>main>.info").css({
        display: `${
          $("#eastGermany>main>.info").css("display") == "none"
            ? $("#eastGermany>main>.info").css({ display: "inline" })
            : $("#eastGermany>main>.info").css({ display: "none" })
        }`,
      });
  }
});
