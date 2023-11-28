//---------------------Question 04---------------------------
//Print the total population of countries using reduce function
var request = new XMLHttpRequest(); 
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
var result = JSON.parse(request.response);
var contry =result.map((ele)=>ele.population).reduce((acc,ele)=>acc+ele);
console.log(contry);
}