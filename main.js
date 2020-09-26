var testToday = new Date();
var tstDay = testToday.getDay();
console.log(tstDay);

function messageOnlyWeekends() {
  var today = new Date();
  let day = today.getDay();
  var image = document.getElementById("anun");
  if (day == 0 || day == 6) {
    console.log("¡Feliz fin de semana! :D");
    image.style.visibility = "visible";
  } else {
    image.style.visibility = "hidden";
  }
}

/*

visitor = 0; 
function countVisits() {

} 

*/

function manualMultiplication(x,y) { 
  let counter = 0; 
  for (x < y; x++) { // uhhh 
    counter += x; 
  }
  return counter;
}

console.log(manualMultiplication(4,5));


function moveEverythingElse(text) {
  for (var i = 0; i < text.lenght; i++) {
    console.log(text[i]);
  }
  // will loop through each element of the list
}
messageOnlyWeekends();
console.log(testToday.getMonth());
/*
    0 - Sunday
    1 - Monday
    2 - Tuesday
    3 - Wednesday
*/
