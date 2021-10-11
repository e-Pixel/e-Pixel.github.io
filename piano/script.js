console.log("omg")
var x = 0; 

// setting up variables // 
var roblox = new Audio('sounds/robloxOof.mp3');

function playSoundAsync(url){
    new Audio(url).play();
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
        playSoundAsync('sounds/robloxOof.mp3');
    } 
}


window.onkeydown = presionar_tecla;