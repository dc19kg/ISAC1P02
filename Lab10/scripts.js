function addValues(){
  var addOne = Number(document.getElementById("numOne").value);
  console.log(addOne);
  var addTwo = Number(document.getElementById("numTwo").value);
  console.log(addTwo);
  var add = addOne + addTwo;
  console.log(add);
  document.getElementById('results').innerHTML= add;
}
function subValues(){
  var subOne = Number(document.getElementById("numOne").value);
  console.log(subOne);
  var subTwo = Number(document.getElementById("numTwo").value);
  console.log(subTwo);
  var sub = subOne - subTwo;
  console.log(sub);
  document.getElementById('results').innerHTML= sub;
}
function mulValues(){
  var mulOne = Number(document.getElementById("numOne").value);
  console.log(mulOne);
  var mulTwo = Number(document.getElementById("numTwo").value);
  console.log(mulTwo);
  var mul = mulOne * mulTwo;
  console.log(mul);
  document.getElementById('results').innerHTML= mul;
}
function divValues(){
  var divOne = Number(document.getElementById("numOne").value);
  console.log(divOne);
  var divTwo = Number(document.getElementById("numTwo").value);
  console.log(divTwo);
  var div = divOne / divTwo;
  console.log(div);
  document.getElementById('results').innerHTML= div;
}
