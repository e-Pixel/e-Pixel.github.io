console.log("This website works... sort of")

// setting up variables // 
var robloxMP3 = 'sounds/robloxOof.mp3';
var noteDo = 'sounds/do.mp3';
var noteRe = 'sounds/re.mp3';
let getVolume = document.querySelector("#volume-control");

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

function isPlaying(audiolem){
    return !audiolem.paused;
}

function playSound(sonido) {
    var audioNuevo = new Audio(sonido);
    
    audioNuevo.onloadedmetadata = function() {
        console.log(audioNuevo.duration);
        // set volume ?? 
    }
    audioNuevo.play();

}

var x = 0; 
function testingVariables() {
    if (x == 0){
        x++;
        console.log(x)
        document.body.style.backgroundColor = "blue";
    }
    else if (x == 1){
        x--;
        console.log(x)
        document.body.style.backgroundColor = "white";
    }
}

async function presionar_tecla() { // must be async or it wont work (too much lag w/ sync) 
    tecla_esq = event.keyCode;
    
    switch (String.fromCharCode(tecla_esq)) {
    case "Q":
        playSound(robloxMP3);
        testingVariables();
        break;
    case "F":
        playSound(noteDo);
        break;
    case "G":
        playSound(noteRe);
    }
}

window.onkeydown = presionar_tecla;
