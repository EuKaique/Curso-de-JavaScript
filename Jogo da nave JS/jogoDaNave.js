var dirxJ, diryJ, jog, velJ, pjx, pjy
var tamTelaH, tamTelaW
var jogo = false
var frames

dirxJ = diryJ = 0
tamTelaH = window.innerHeight
tamTelaW = window.innerWidth
pjx = tamTelaW / 2
pjy = tamTelaH / 2
vel = 5
jog = document.getElementById("naveJog")
jog.style.top = pjy + "px"
jog.style.left = pjx + "px"

function teclaDw(){
    var tecla = event.keyCode

    if(tecla == 38){ // Cima
        diryJ = -1
    } else if(tecla == 40){ // Baixo
        diryJ = 1
    }
    if(tecla == 37){ // Esquerda
        dirxJ = -1
    } else if(tecla == 39){ // Direita
        dirxJ = 1
    }
    if(tecla == 32){ // Espaço / tiro
        //TIRO
    }
}

function teclaUp(){
    var tecla = event.keyCode

    if((tecla == 38) || (tecla == 40)){ 
        diryJ = 0
    }
    if((tecla == 37) || (tecla == 39)){ 
        dirxJ = 0
    }
}

document.addEventListener("keydown", teclaDw)
document.addEventListener("keyup", teclaUp)

function controlaJogador(){

}

function gameLoop(){
    if(jogo){

    }
    frames = requestAnimationFrame(gameLoop)
}

