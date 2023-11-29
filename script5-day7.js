//-------------------------Question 05-----------------
//Print the country that uses US dollars as currency.

var request = new XMLHttpRequest(); 
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
var result = JSON.parse(request.response);
var contry = result.filter((ele)=>ele.currencies && ele.currencies.USD).map((ele)=>ele.name.common);
console.log(contry);
}