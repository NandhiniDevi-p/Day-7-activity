//----------------------------Question 02---------------------------
//Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest(); 
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
var result = JSON.parse(request.response);
var contry =result.filter((ele)=>ele.population< 200000).map((ele)=>ele.name.common);
console.log(contry);
}