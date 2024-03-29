/**
 * Makes a GET request with the specified URL.
 *
 * @param {string} apiKey The API key to be put in the header.
 * @param {string} url The full path to the API resource.
 * @param {string} method The HTTP verb that will be used to make the request.
 * @returns {Promise<Response>} The Response object.
 * 
 */
function get(url) {
  return fetch(url, {
    method: 'GET',
  });
}
// HTML Direct Functions

function openInNewTab(url) {
  console.log("Opening new tab...")
  window.open(url, '_blank').focus();
 }

function closeButton() { 
  let buttonStructure = document.getElementsByClassName("rcorners1");
  let button = document.getElementById("button");
  buttonStructure.style.opacity = "0";
  button.style.opacity = "0";

  document.getElementById("rcorners1").style.opacity = "0";
  console.log("pog")
}

/**
 * Lists Zoom links for today for a given course.
 *
 * @param {string} group The group to be used in the request.
 * @param {string} courseId The ID of the desired course.
 * @returns {Promise<any>} Canvas' JSON response.
 */
async function zoomlinkForToday(group, courseId) {
  const baseUrl = 'https://mzamorano.me:99'
  const url = new URL(baseUrl + `/api/${group}/cevents`);
  const params = {'course': courseId};
  url.search = new URLSearchParams(params).toString();

  const response = await get(url);

  let zlresp;
  try {
    zlresp = await response.json();
  }
  catch(e) {
    throw new Error(`Unable to parse JSON in response for calendar events retrieval for course ${courseId} and group ${group}: ${zlresp}`);
  }
  if (Array.isArray(zlresp)) {
    if (zlresp.length > 0) {
      return zlresp[0];
    }
    else {
      throw new Error(`No calendar events for course ${courseId} in group ${group}`);
    }
  }
  else {
    throw new Error(`Invalid response for calendar events retrieval for course ${courseId} and group ${group}: ${JSON.stringify(zlresp)}`);
  }
}

/**
 * Gives the full title of a course given its code.
 * 
 * @param {string} courseCode The course's shorthand code. 
 * @returns {string} The course's full title.
 */
function expandCourseCode(courseCode) {
  switch (courseCode) {
	case 'sem6_art_and_culture':
	  return 'Art and culture';
	case 'sem6_calculus':
		return 'Cálculo integral';
	case 'sem6_habilidades':
		return 'Habilidades y valores VI';
	case 'sem6_mexico':
		return 'México en el siglo XXI';
	case 'sem6_philosophy':
		return 'Pensamiento filosófico';
	case 'sem6_science':
		return 'Scientific thought';
	default:
		throw new Error(`Invalid course code for expansion to title: ${courseCode}`);
	}
}


const emergencyLinks = { // This dict is used in case there is no event (zoom link) found in canvas calendar 
  'Art and culture': "https://tecmilenio.zoom.us/j/89913605756",
  'Cálculo integral':alternativeLinks("calculo"), // Testing alternativeLinks() for later usage
  'Habilidades y valores VI':alternativeLinks("habilidades"),
  'México en el siglo XXI':'https://tecmilenio.zoom.us/j/81851303071',
  'Pensamiento filosófico':'https://us02web.zoom.us/j/89245565159',
  'Scientific thought':'https://itesm.zoom.us/j/87168417185'
}

function alternativeLinks(subject) {
  baseLink = "https://tecmilenio.zoom.us/j/";
  today = new Date().getDay(); 

  switch (subject) {
    case "calculo":
        if (today == 2) { // tuesday
          return (baseLink + "85729129549")
        }
        return (baseLink + "83093002223")

    case "habilidades" :
        if (today == 3) { // wednesday
          return (baseLink + "83383020209")
        }
        return (baseLink + "86867178711")
    case "scientific":
        if (today == 3) {
          return (baseLink + "81032993327")
        }
        return (baseLink + "89838452310") 
      }
}

// This could be further optimized... 

function testColor() {
  document.getElementById("textoPrueba").style.color = "#ffffff" 
}

function setColorButtonsSchedule() {
  /*
  const art = document.getDocumentById("sem6_art");
  const calculo = document.getDocumentById("sem6_calculus");
  const habilidades = document.getDocumentById("sem6_habilidades");
  const mexico = document.getDocumentById("sem6_mexico");
  const pensamiento = document.getDocumentById("sem6_philosophy");
  const scientific = document.getDocumentById("sem6_scientific"); */

  document.getElementById("sem6_art_and_culture").style.backgroundColor = "#FF99FF"
  document.getElementById("sem6_calculus").style.backgroundColor = "#FFFF66"
  document.getElementById("sem6_habilidades").style.backgroundColor = "#99FFCD"
  document.getElementById("sem6_mexico").style.backgroundColor = "#FD6699"
  document.getElementById("sem6_philosophy").style.backgroundColor = "#CC99FE"
  document.getElementById("sem6_scientific").style.backgroundColor = "#70AC46"
  document.getElementById("sem6_calculus_extra").style.backgroundColor = "#FFFF66"
}

/**
 * Procedure to initialize the event listener on the Zoom link buttons.
 * 
 * @param {string} className The name of the class for the Zoom link buttons. 
 */

function initializeClassButtons(className) {
  const list = document.querySelectorAll(`.${className}`);

  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", async function (e) {
      const loading = document.getElementById("loading");
      loading.style.display = 'none'; // later change to 'content'
      e.preventDefault();
      try {
        const resp = await zoomlinkForToday('604', this.id);
        window.open(resp);
        loading.style.display = 'none';
      } catch (e) {
        const courseTitle = expandCourseCode(this.id);
        switch(true) {
          case e.message.startsWith('Unable to parse JSON in response'):
            alert(`La comunicación con el servidor de Canvas ha tenido un error.\n\nMateria pedida: ${courseTitle}.`);
            break;
          case e.message.startsWith('No calendar events for course'): 
            alert(`Ningún enlace de Zoom fue encontrado para ${courseTitle} hoy. \n\n Se intentará con el link de emergencia: \n\n ${emergencyLinks[courseTitle]}`);
            console.log("Emergency link deployed " + emergencyLinks[courseTitle] )
            const loading = document.getElementById("loading");
            window.open(emergencyLinks[courseTitle])
            break;
          case e.message.startsWith('Invalid response for calendar events retrieval'):
            alert(`Ha ocurrido un error interno.\n\nMateria pedida: ${courseTitle}.`);
            break;
          case e.message.startsWith('Failed to fetch'):
            alert(`No se ha podido establecer comunicación con el servidor.\n\nMateria pedida: ${courseTitle}.`);
            break;
          default:
            alert(`Ha ocurrido un error inesperado.\n\nMateria pedida: ${courseTitle}.`);
        }
        console.error(e);
        loading.style.display = 'none';
      }
    });
  }
}

/**
 * Sets the visibility of the weekend message based on the weekday passed to it.
 *
 * @param {number} weekday The Date.getDay() integer of the desired date.
 */
 function messageInWeekends(weekday) {
  const image = document.getElementById('anun');
  if (weekday == 0 || weekday == 5 || weekday == 6) {
    console.log('¡Feliz fin de semana! :D');
    image.style.display = 'contents';
  }
}
window.onload = function() {
  initializeClassButtons('classButton');
  messageInWeekends(new Date().getDay());
};
