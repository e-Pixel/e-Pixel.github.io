console.log("omg")
var x = 0; 

// setting up variables // 
var robloxMP3 = 'sounds/robloxOof.mp3';
let getVolume = document.querySelector("#volume-control");

function playSound(sonido) {
    var audioNuevo = new Audio(sonido);
    audioNuevo.volume = setVolume(audioNuevo)
    audioNuevo.play();
}


async function presionar_tecla() { 
    tecla_esq = event.keyCode;
    if (tecla_esq == 72) { // it's h 
        console.log("pog")
        setTimeout(() => { console.log("champ");}, 2000)
    }
    if (tecla_esq == 81) { // it's q 
        playSound(robloxMP3);
    } 
}


window.onkeydown = presionar_tecla;