const socket = io();

let value = 0;

const quickinfo = [
  {
    title: "Germanic Tribes",
    year: "750BC - 768 AD",
    text: "Germania (/dʒɜːrˈmeɪniə/ jur-MAY-nee-ə, Latin: [ɡɛrˈmaːnia]), also called Magna Germania (English: Great Germania), Germania Libera (English: Free Germania) or Germanic Barbaricum to distinguish it from the Roman provinces of the same name, was a large historical region in north-central Europe during the Roman era, which was associated by Roman authors with the Germanic peoples. The region stretched roughly from the Middle and Lower Rhine in the west to the Vistula in the east. It also extended as far south as the Upper and Middle Danube and Pannonia, and to the known parts of Scandinavia in the north. Archaeologically, these peoples correspond roughly to the Roman Iron Age of those regions. While apparently dominated by Germanic peoples, Magna Germania was inhabited by non-Germanic peoples as well, including Celts and Early Slavs and their precursors.",
    img: "media/img/quick_gertrb.png",
  },
  {
    title: "Francia",
    year: "768 - 843",
    text: "Francia, also called the Kingdom of the Franks (Latin: Regnum Francorum), Frankland, or Frankish Empire, was the largest post-Roman barbarian kingdom in Western Europe. It was ruled by the Franks during Late Antiquity and the Early Middle Ages. After the Treaty of Verdun in 843, West Francia became the predecessor of France, and East Francia became that of Germany. Francia was among the last surviving Germanic kingdoms from the Migration Period era before its partition in 843",
    img: "media/img/quick_fran.png",
  },
  {
    title: "Kingdom of Germany",
    year: "843 - 962",
    text: 'The terms Kingdom of Germany or German Kingdom (Latin: regnum Teutonicorum "Kingdom of the Germans", regnum Teutonicum "German Kingdom", regnum Alamanie) denote the mostly Germanic-speaking Eastern Frankish kingdom, which was formed by the Treaty of Verdun in 843, especially after the kingship passed from Frankish kings to the Saxon Ottonian dynasty in 919. The king was elected, initially by the rulers of the stem duchies, who generally chose one of their own. After 962, when Otto I was crowned emperor, East Francia formed the bulk of the Holy Roman Empire, which also included the Kingdom of Italy and, after 1032, the Kingdom of Burgundy.',
    img: "media/img/quick_eafran.png",
  },
  {
    title: "Holy Roman Empire",
    year: "962 - 1806",
    text: "The Holy Roman Empire, historiographically denoted as the Holy Roman Empire of the German Nation, (Latin: Sacrum Imperium Romanum; German: Heiliges Römisches Reich Deutscher Nation) was a multi-ethnic complex of territories in Western and Central Europe that developed during the Early Middle Ages and continued until its dissolution in 1806 during the Napoleonic Wars. The largest territory of the empire after 962 was the Kingdom of Germany, though it also included the neighbouring Kingdom of Bohemia and Kingdom of Italy, plus numerous other territories, and soon after the Kingdom of Burgundy was added. However, while by the end of the 15th century the Empire was still in theory composed of three major blocks – Italy, Germany, and Burgundy – in practice only the Kingdom of Germany remained, with the Burgundian territories lost to France and the Italian territories, ignored in the Imperial Reform, although formally part of the Empire, splintered into numerous de facto independent territorial entities.",
    img: "media/img/quick_hre.png",
  },
  {
    title: "Kingdom of Prussia",
    year: "1701 - 1815",
    text: "The Kingdom of Prussia (German: Königreich Preußen) was a German kingdom that constituted the state of Prussia between 1701 and 1918. It was the driving force behind the unification of Germany in 1871 and was the leading state of the German Empire until its dissolution in 1918. Although it took its name from the region called Prussia, it was based in the Margraviate of Brandenburg. Its capital was Berlin.",
    img: "media/img/quick_prus.png",
  },
  {
    title: "German Confederation",
    year: "1815 - 1866",
    text: "The German Confederation (German: Deutscher Bund) was an association of 39 predominantly German-speaking sovereign states in Central Europe, created by the Congress of Vienna in 1815 as a replacement of the former Holy Roman Empire, which had been dissolved in 1806. The Confederation was weakened by rivalry between the Kingdom of Prussia and the Austrian Empire and the inability of its multiple members to compromise. The German revolutions of 1848–49, motivated by liberal, democratic, socialist and nationalist sentiments, attempted to transform the Confederation into a unified German federal state with a liberal constitution (usually called the Frankfurt Constitution in English). The ruling body of the Confederation, the Confederate Diet, was dissolved on 12 July 1848, but was re-established in 1850 after the revolution was crushed by Austria, Prussia and other states.",
    img: "media/img/quick_gerconf.png",
  },
  {
    title: "North German Confederation",
    year: "1866 - 1871",
    text: "The North German Confederation (German: Norddeutscher Bund) was the German federal state which existed from July 1867 to December 1870. The Confederation came into existence after the Austro-Prussian War of 1866 over the lordship of two small danish duchies (Schleswig-Holstein) claimed by Prussia in 1866. Although de jure a confederacy of equal states, the Confederation was de facto controlled and led by the largest and most powerful member, Prussia, which exercised its influence to bring about the formation of the German Empire. Some historians also use the name for the alliance of 22 German states formed on 18 August 1866 (Augustbündnis).",
    img: "media/img/quick_ngerconf.png",
  },
  {
    title: "German Empire",
    year: "1871 - 1918",
    text: "The German Empire or the Imperial State of Germany, also referred to as Imperial Germany, the Second Reich, the Kaiserreich, as well as simply Germany, was the period of the German Reich from the unification of Germany in 1871 until the November Revolution in 1918, when the German Reich changed its form of government from a monarchy to a republic.",
    img: "media/img/quick_geremp.png",
  },
  {
    title: "Weimar Republic",
    year: "1918 - 1933",
    text: 'The Weimar Republic (German: Weimarer Republik [ˈvaɪmaʁɐ ʁepuˈbliːk] (About this soundlisten)) was the German state from 1918 to 1933, as it existed as a federal constitutional republic. The state was officially the German Reich (Deutsches Reich), and was also referred to as the German Republic (Deutsche Republik). The term "Weimar Republic" refers to the city of Weimar, where the republic\'s constituent assembly first took place. In English the country was usually simply called "Germany"; the term "Weimar Republic" did not become common in English until the 1930s.',
    img: "media/img/quick_weimr.png",
  },
  {
    title: "Nazi Germany",
    year: "1933 - 1945",
    text: 'Nazi Germany, officially known as the German Reich until 1943 and Greater German Reich from 1943 to 1945, was the German state between 1933 and 1945, when Adolf Hitler and the Nazi Party controlled the country which they transformed into a dictatorship. Under Hitler\'s rule, Germany quickly became a totalitarian state where nearly all aspects of life were controlled by the government. The Third Reich,[i] meaning "Third Realm" or "Third Empire", alluded to the Nazis\' conceit that Nazi Germany was the successor to the earlier Holy Roman Empire (800–1806) and German Empire (1871–1918). The Third Reich, which Hitler and the Nazis referred to as the Thousand Year Reich,[4][j] ended in May 1945 after just 12 years, when the Allies defeated Germany, ending World War II in Europe.',
    img: "media/img/quick_nazi.png",
  },
  {
    title: "Allied-occupied Germany",
    year: "1945 - 1949",
    text: 'Allied-occupied Germany (German: Deutschland in der Besatzungszeit, literally "Germany in the occupation period") was the administration of Germany (German: Deutsches Reich) upon defeat of Nazi Germany in World War II, when the victorious Allies asserted joint authority and sovereignty over Germany as a whole, defined as all territories of the former German Reich west of the Oder–Neisse line, having declared the destruction of Nazi Germany at the death of Adolf Hitler (the 1945 Berlin Declaration). The four powers divided "Germany as a whole" into four occupation zones for administrative purposes under the three Western Allies (the United States, the United Kingdom, France) and the Soviet Union, respectively. This division was ratified at the August 1945 Potsdam Conference.[citation needed] The four zones were agreed by the United States, United Kingdom and Soviet Union at the February 1945 Yalta Conference, setting aside an earlier division into three zones (excluding France) proposed by the September 1944 London Protocol.',
    img: "media/img/quick_occup.png",
  },
  {
    title: "West/East Germany",
    year: "1949 - 1990",
    text: "After the defeat of Germany in World War II on 8 May 1945, the country was soon divided between the two global blocs in the East and West with the two very opposite ideologies (liberialism vs communism), one period known as the Division of Germany (1945-1990). Germany was stripped of its war gains. Germany was annexed some territories in East to Poland and the Soviet Union, and a territory in West (Saarland) to France until 1957. At the end of the war, there were some eight million foreign displaced persons in Germany;[1] mainly forced laborers and prisoners; including around 400,000 from the concentration camp system,[2] survivors from a much larger number who had died from starvation, harsh conditions, murder, or being worked to death. Over 10 million German-speaking refugees arrived in Germany from other countries in Central and Eastern Europe.[1] Some 9 million Germans were POWs,[3] many of whom were kept as forced laborers for several years to provide restitution to the countries Germany had devastated in the war, and some industrial equipment was removed as reparations.",
    img: "media/img/quick_weger.png",
  },
  {
    title: "Germany",
    year: `1990 - 2021`,
    text: "Germany (German: Deutschland, German pronunciation: [ˈdɔʏtʃlant]), officially the Federal Republic of Germany,[e] is a country in Central Europe. It is the second-most populous country in Europe after Russia, and the most populous member state of the European Union. Germany is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. The nation's capital and largest city is Berlin, and its financial centre is Frankfurt; the largest urban area is the Ruhr.",
    img: "media/img/quick_germany.png",
  },
];

/*const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
  $("#theme").attr("href", "css/dark.css");
} else {
  alert(
    "You are using White Theme, which might make your stay a little unpleasant. Please switch to Dark Theme in your device settings"
  );
  $("#theme").attr("href", "css/light.css");
}*/

if (navigator.platform != "Linux armv8l" || navigator.platform != "iPhone"){
    $("#intro_video").attr("src", "https://www.youtube.com/embed/SuXsVEjYKI4?autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&controls=0&disablekb=1&mute=1&playlist=SuXsVEjYKI4")
}

$("#intro_video").attr({"height":`${window.innerHeight}`, "width":`${window.innerWidth}`})

$("#history_timeline_slider_slider").on("input", function () {
  $("#history_quick_box_info").fadeOut(200);
  value = this.value;
  window.setTimeout(function () {
    $("#history_quick_box_info_title").text(quickinfo[value].title);
    $("#history_quick_box_info_year").text(quickinfo[value].year);
    $("#history_quick_box_info_text").text(quickinfo[value].text);
    $("#history_quick_box_info_image").attr("src", `${quickinfo[value].img}`);
    $("#history_quick_box_info").fadeIn(200);
  }, 200);
});

$("body>section:not(:first-child)").hide();

$("#intro_box_button").click(function () {
  $(this).parent().parent().hide(300);
  $("body>section:not(:first-child)").fadeIn(1000);
  $("#main").hide();
});

$("#history_quick_box_info_button").click(function () {
  $("body>section:not(:last-child)").hide(300);
  $("#main").show();
  $("body").css({ height: "100%", width: "100%" });
  if (data[value]) {
    recievedData = data[value];
    loadData();
  } else {
    socket.emit("document", { index: value, type: true });
  }
});

$("#goBack").click(function () {
  $("body>section:not(:first-child)").show();
  $("#main").hide(300);
  $("body").css({ height: "100vh", width: "100vw" });
});

let data = [];

function loadData() {
  $("main").html(
    `<div id="main_content"><h1 id="data_title"></h1><h2 id="data_year"></h2><hr></div><div id="main_info"></div>`
  );

  data[value] = recievedData;
  console.log(data[value]);
  $("#data_title").html(data[value].content[0]);
  $("#data_year").html(data[value].content[1]);
  console.log(data[value].info)
  if (data[value].info != null){
    $("#main_info").html(data[value].info);
  } else {
      $("#main_info").remove()
      $("#main_content").css({"margin-left":"17.5%"})
  }
  for (let i = 0; i < data[value].sections_main.length; i++) {
    $(
      `<section id=sec0${i}>${data[value].sections_main[i]}</section>`
    ).appendTo("#main_content");
    $(`#sec0${i}`).children(":not(:first)").hide(0);
    $(`#sec0${i}>h3`).css({ "border-bottom": "0" });
    $(`#sec0${i}`).css("min-height", "0");
  }
  $(`${data[value].sections_opt}`).appendTo("#sec00");
  reconfigure();
}

function reconfigure() {
  $("#main_info").hover(
    function () {
      if (window.innerWidth > 1080) {
        $(this).css({
          width: "25%",
          height: "max-content",
          "overflow-y": "scroll",
        });
        $("body").css({ "overflow-y": "hidden" });
      }
    },
    function () {
      if (window.innerWidth > 1080) {
        $(this).css({
          width: "20%",
          height: "calc(100vh - 70px)",
          "overflow-y": "hidden",
        });
        $("body").css({ overflow: "auto" });
      }
    }
  );

  $("#main_content>section>h3").click(function () {
    if (
      $(this).siblings().first().css("display") == "none" ||
      !$(this).siblings("p").length
    ) {
      if (!$(this).siblings("p").length) {
        if ($(this).siblings("div").length) {
          socket.emit("document", {
            index: value,
            type: false,
            idone: $(this).parent().attr("id").slice(-1),
            idtwo: 0,
          });
        } else {
          socket.emit("document", {
            index: value,
            type: false,
            idone: $(this).parent().attr("id").slice(-1),
          });
        }
      }
      let bro = $(this);
      window.setTimeout(function () {
        bro.parent().css({
          "min-height":
            bro.outerHeight() + bro.siblings("div").first().outerHeight() + 20,
        });
      }, 500);
      bro.siblings().show(200);
      $(this).css({ "border-bottom": "1px solid" });
    } else {
      $(this).siblings().hide(500);
      $(this).css({ "border-bottom": "0" });
      $(this).parent().css({ "min-height": 0 });
    }
  });

  $(window).resize(function () {
    $("main").css({ height: `${$("#main_content").outerHeight()}` });
  });
  
  $(".selection_menu>button").click(function () {
    $(this).prop("disabled", true);
    let i = $(this).parent().parent().attr("id").slice(-1);
    let j = $(this).attr("id").slice(-1) - 1;
    $(this).siblings().prop("disabled", false);
    $(this).parent().siblings(":not(h3)").remove();
    if (Array.isArray(data[value].sections_opt[i])) {
      if (data[value].sections_opt[i][j]) {
        $(
          `${data[value].sections_opt[i][$(this).attr("id").slice(-1) - 1]}`
        ).appendTo(`#sec0${i}`);
      } else {
        socket.emit("document", {
          index: value,
          type: false,
          idone: i,
          idtwo: j,
        });
      }
    } else {
      socket.emit("document", {
        index: value,
        type: false,
        idone: i,
        idtwo: j,
      });
    }
  });

  if (window.innerWidth <= 1080) {
    $("#main_info").hide(0);
    $("#main_info").css({ height: "max-content", "overflow-y": "scroll" });
  }

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0 && window.innerWidth <= 1080) {
        $("#main_info").show(0);
        $("#main_content").hide(0);
      } else if (xDiff < 0 && window.innerWidth <= 1080) {
        $("#main_info").hide(0);
        $("#main_content").show(0);
      }
    }
    xDown = null;
    yDown = null;
  }
}

function loadAddData(idone, idtwo) {
  let bck = "";
  if (idtwo == "heh") {
    if (!Array.isArray(data[value].sections_opt)) {
      bck = data[value].sections_opt;
      data[value].sections_opt = [];
      data[value].sections_opt.push(bck);
    }
    data[value].sections_opt[idone] = recievedData;
    $(`${recievedData}`).appendTo(`#sec0${idone}`);
  } else {
    if (!Array.isArray(data[value].sections_opt)) {
      bck = data[value].sections_opt;
      data[value].sections_opt = [];
      data[value].sections_opt.push(bck);
      data[value].sections_opt[idone] = recievedData;
    } else {
      if (!Array.isArray(data[value].sections_opt[idone])) {
        bck = data[value].sections_opt[idone];
        data[value].sections_opt[idone] = [];
        data[value].sections_opt[idone].push(bck);
      }
      data[value].sections_opt[idone][idtwo] = recievedData;
    }
    //$(`#sec0{idone}`).children(":not(div):not(h3)").remove()
    $(`${recievedData}`).appendTo(`#sec0${idone}`);
  }
}

/*
function getingsomedat() {
  let sections = $("#main_content>section").length;
  let sections_m = [];
  let sections_o = [];
  for (let i = 0; i < sections; i++) {
    if ($("#main_content>section").eq(i).children("h3").length) {
      sections_m[i] = `<h3>${$("#main_content>section")
        .eq(i)
        .children("h3")
        .html()}</h3>`;
      if ($("#main_content>section").eq(i).children("div").length) {
        sections_m[i] += `<div class="selection_menu">${$(
          "#main_content>section"
        )
          .eq(i)
          .children("div")
          .html()}</div>`;
      }
    } else {
      sections_m[i] = "";
    }
  }
  for (let i = 0; i < sections; i++) {
    if ($("#main_content>section").eq(i).children("div").length) {
      sections_o[i] = "";
      let bro = [];
      $("#main_content>section")
        .eq(i)
        .children("div:not(:first)")
        .each(function () {
          bro.push($(this).html());
        });
      sections_o[i] = bro;
    } else {
      for (
        let j = 0;
        j <
        $("#main_content>section").eq(i).children("p", "ul", "ol", "h5", "h4")
          .length;
        j++
      ) {
        sections_o[i] = "";
        $("#main_content>section")
          .eq(i)
          .children("p", "ul", "ol", "h5", "h4")
          .each(function () {
            sections_o[i] += $(this)[0].outerHTML;
          });
      }
    }
  }
  let objecti = {
    content: [$("#data_title").html(), $("#data_year").html()],
    info: $("#main_info").html(),
    sections_main: sections_m,
    sections_opt: sections_o,
  };

  let res = JSON.stringify(objecti);
}
*/
