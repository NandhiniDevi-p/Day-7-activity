//-----------------------Question 03-------------------------------
//Print the following details name, capital, flag, using forEach function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);
  var details = result.forEach((ele) => {
    console.log("Contry : ", ele.name.common);
    console.log("Flag : ", ele.flag);
    console.log("Capital : ", ele.capital);
    console.log("");// for line spacing 
  });
};
