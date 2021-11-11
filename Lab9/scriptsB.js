var enterAge = prompt("What is your age?");
console.log(enterAge);

var todayDate = new Date();
var year = todayDate.getFullYear();
console.log(todayDate);

var birthYear = year - enterAge;

document.getElementById("writeYear").innerHTML = birthYear;
