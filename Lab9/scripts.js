var start = new Date();
console.log(start);
function stopTime(){
  var stop = new Date();
  console.log(stop);

  var startTime = start.getTime();
  var stopTime = stop.getTime();

  timeBetween = (stop - start)/1000;
  var timeCheck = alert("You have been on the page for "+ timeBetween +" seconds");
  console.log(timeCheck);
}
