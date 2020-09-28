var testToday = new Date();
var tstDay = testToday.getDay();
console.log(tstDay);

function messageOnlyWeekends() {
  var today = new Date();
  let day = today.getDay();
  var image = document.getElementById("anun");
  if (day == 0 || day == 6 || day == 5) {
    console.log("¡Feliz fin de semana! :D");
    image.style.visibility = "visible";
  } else {
    image.style.visibility = "hidden";
  }
}

messageOnlyWeekends();
console.log(testToday.getMonth());
/*
    0 - Sunday
    1 - Monday
    2 - Tuesday
    3 - Wednesday
*/
