var testToday = new Date();
var tstDay = testToday.getDay();

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

const courseId = 70356;

// asume que existe una variable llamada
// courseId con la ID del curso que se quiere
const url = `https://cursos.tecmilenio.mx/api/v1/calendar_events?context_codes[]=course_${courseId}`;

var xhr = new XMLHttpRequest();
xhr.open("GET", url);


const token = "14121~3TX55L1q034g2VM5Y2rqunwVqTQdYTaQscAWXW2xhLfqew6783K6XHGVO9YAI3j0"; 
// Put it as private DO NOT SHARE 
xhr.setRequestHeader("Authorization", `Bearer ${token}`);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
      const calendarEvent = JSON.parse(xhr.responseText);
      // esto de arriba es asumiendo que no falla.
      // no se bien como manejar errores aun
      // puedes acceder al codigo de respuesta con xhr.status

      // si todo va bien, tienes que sacar la propiedad description
      // del objeto calendarEvent. ahí va a estar el link de zoom.
      // tienes que ingeniar alguna manera de aislarlo
      console.log(calendarEvent.description)
   }};

xhr.send();
// console.log(xhr.status)

messageOnlyWeekends();
// console.log(testToday.getMonth());
/*
    0 - Sunday
    1 - Monday
    2 - Tuesday
    3 - Wednesday
*/
