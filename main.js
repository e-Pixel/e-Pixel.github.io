var testToday = new Date();
var tstDay = testToday.getDay();
console.log(tstDay);

function changeVisibilityById(currentDay) {
  var image = document.getElementById("anun");
  if (currentDay == 0 || currentDay == 6) {
    image.style.visibility = "visible";
  } else {
    image.style.visibility = "hidden";
  }
}

function messageOnlyWeekends() {
  var today = new Date();
  let day = today.getDay();
  if (day == 0 || day == 6) {
    console.log("¡Feliz fin de semana! :D");
    changeVisibilityById(day);
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
