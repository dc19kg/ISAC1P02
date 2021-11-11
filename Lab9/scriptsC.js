function addValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number(document.getElementById("numTwo").value);
  console.log(numTwo);
  var add = numOne + numTwo;
  console.log(add);
  document.getElementById('sum').innerHTML= add;
}
