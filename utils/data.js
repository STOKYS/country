const data = [
    {
      content: "Germanic Tribes",
       info: "750BC - 768 AD"
    },
    {
      content: "Francia",
      info: "768 - 843"
    },
    {
      content: "Kingdom of Germany",
      info: "843 - 962"
    },
    {
      content: "Holy Roman Empire",
      info: "962 - 1806"
    },
    {
      content: "Kingdom of Prussia",
      info: "1701 - 1815"
    },
    {
      content: "German Confederation",
      info: "1815 - 1866"
    },
    {
      content: "North German Confederation",
      info: "1866 - 1871"
    },
    {
      content: "German Empire",
      info: "1871 - 1918"
    },
    {
      content: "Weimar Republic",
      info: "1918 - 1933"
    },
    {
      content: "Nazi Germany",
      info: "1933 - 1945"
    },
    {
      content: "Allied-occupied Germany",
      info: "1945 - 1949"
    },
    {
      content: "West/East Germany",
      info: "1949 - 1990"
    },
    {
      content: "Germany",
      info: `1990 - 2021`
    },
];

function getData(index){
    return data[index]
}

module.exports = getData;