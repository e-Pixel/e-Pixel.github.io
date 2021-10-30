console.log("This website works... sort of")

// setting up variables // 
var robloxMP3 = 'sounds/robloxOof.mp3';
var noteDo = 'sounds/do.mp3';
var noteRe = 'sounds/re.mp3';
var noteMi = 'sounds/mi.mp3';
var noteFa = 'sounds/fa.mp3';

let getVolume = document.querySelector("#volume-control");
document.body.style.zoom = 0.7



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

function replaceImage(imgDirectory, identification) {
    document.getElementById(identification).src = imgDirectory;
}

async function presionar_tecla() { // must be async or it wont work (too much lag w/ sync) 
    tecla_esq = event.keyCode;
    
    switch (String.fromCharCode(tecla_esq)) {
    case "F":
        playSound(noteDo);
        replaceImage("media/wolf.png", "whoTalks");
        replaceImage("media/F.png", "tecla")
        break;
    case "G":
        playSound(noteRe);
        replaceImage("media/witch.png", "whoTalks");
        replaceImage("media/G.png", "tecla")
        break;
    case "H":
        playSound(noteMi);
        replaceImage("media/psycho.png", "whoTalks");
        replaceImage("media/H.png", "tecla")
        break;
    case "J":
        playSound(noteFa);
        replaceImage("media/devil.png", "whoTalks");
        replaceImage("media/J.png", "tecla")
        break;
    }
    
}

window.onkeydown = presionar_tecla;
