
//----------------------------------Question 01-----------------------------
//Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest(); 
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);
  var contry = result.filter((ele)=>ele.continents=="Asia").map((ele)=>ele.name.common);

  console.log(contry);
}