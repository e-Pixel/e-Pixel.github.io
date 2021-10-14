console.log("omg")
var x = 0; 

// setting up variables // 
var roblox = 'sounds/robloxOof.mp3';
let getVolume = document.querySelector("#volume-control");

function setVolume(audio) { 
    
    
    getVolume.addEventListener("change", function(e) {
        audio.volume = e.currentTarget.value / 100;
    })
    return audio.volume; 
}

function pog() {
    var audioNuevo = new Audio(roblox);
    audioNuevo.volume = setVolume(audioNuevo)

    audioNuevo.play();
}


async function presionar_tecla() { 
    tecla_esq = event.keyCode;


    if (tecla_esq == 81) { // it's q 
        x++;  
        console.log(x);
    }
    if (tecla_esq == 72) { // it's h 
        console.log("pog")
        setTimeout(() => { console.log("champ");}, 2000)
    }
    if (tecla_esq == 81) { // it's q 
        pog();

    } 
}


window.onkeydown = presionar_tecla;