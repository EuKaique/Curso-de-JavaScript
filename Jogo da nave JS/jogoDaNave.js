var dirxJ, diryJ, jog, velJ, velT, velB, pjx, pjy
var tamTelaH, tamTelaW
var jogo
var frames
var contBombas, bombasTotal,tmpCriaBomba
var vidaPlaneta

function teclaDw(event){

    if(event.keyCode == 38){ // Cima
        diryJ = -4
    }else if(event.keyCode == 40){ // Baixo
        diryJ = 4
    }
    if(event.keyCode == 37){ // Esquerda
        dirxJ = -4
    }else if(event.keyCode = 39){ // Direita
        dirxJ = 4
    }
    if(event.keyCode == 32){ // Espaço / tiro
        atirar(pjx+17,pjy)
    }
}

function teclaUp(event){

    if((event.keyCode == 38) || (event.keyCode == 40)){
        diryJ = 0
    }
    if((event.keyCode == 37) || (event.keyCode == 39)){
        dirxJ = 0
    }
    if(event.keyCode == 32){ // Espaço / tiro
        atirar(0,0)
    }
}

function criarBombas(){
    if(jogo){
        var y = 0
        var x = Math.random() * tamTelaW
        var bomba = document.createElement("div")
        var att1 = document.createAttribute("class")
        var att2 = document.createAttribute("style")
        att1.value = "bomba"
        att2.value = "top:"+y+"px;left:"+x+"px"
        bomba.setAttributeNode(att1)
        bomba.setAttributeNode(att2)
        document.body.appendChild(bomba)
        contBombas--
    }
}

function controlaBomba(){
    bombasTotal = document.getElementsByClassName("bomba")
    var tam = bombasTotal.length
    for(var i = 0; i < tam; i++){
        if(bombasTotal[i]){
            var pi = bombasTotal[i].offsetTop
            pi += velB
            bombasTotal[i].style.top = pi + "px"
            if(pi > tamTelaH){
                vidaPlaneta -= 10
                bombasTotal[i].remove()
            }
        }
    }
}
function atirar(x,y){
    var tiro = document.createElement("div")
    var att1 = document.createAttribute("class")
    var att2 = document.createAttribute("style")
    att1.value = "tiroJog"
    att2.value = "top:"+y+"px;left:"+x+"px"
    tiro.setAttributeNode(att1)
    tiro.setAttributeNode(att2)
    document.body.appendChild(tiro)
}

function controleTiro(){
    var tiros = document.getElementsByClassName("tiroJog")
    var tam = tiros.length

    for(var i = 0; i < tam; i++){
        if(tiros[i]){
            var pt = tiros[i].offsetTop
            pt -= velT
            tiros[i].style.top = pt + "px"
            colisaoTiroBomba(tiros[i])
            if(pt < 0){
                tiros[i].remove()
            }
        }
    }
}

function colisaoTiroBomba(tiro){
    var tam = bombasTotal.length
    for(var i = 0; i < tam; i++){
        if(bombasTotal[i]){
            if(
              (
                  (tiro.offsetTop <= (bombasTotal[i].offsetTop + 40)) && //cima tiro com parte de baixo bomba
                  ((tiro.offsetTop + 6) >= (bombasTotal[i].offsetTop)) //baixo tiro com cima bomba
              )
              &&
              (
                  (tiro.offsetLeft <= (bombasTotal[i].offsetLeft + 40)) && // esquerda tiro com parte direita da bomba
                  ((tiro.offsetLeft + 6) >= (bombasTotal[i].offsetLeft)) // parte direita tiro com parte esquerda da bomba  
              )  
            ){
                bombasTotal[i].remove()
                tiro.remove()
            }
        }
    }
}

function controlaJogador(){
    pjx += dirxJ + velJ
    pjy += diryJ + velJ
    jog.style.top = pjy + "px"
    jog.style.left = pjx + "px"
}

function gameLoop(){
    if(jogo){
        controlaJogador()
        controleTiro()
        controlaBomba()
    }
    frames = requestAnimationFrame(gameLoop)
}

function inicia(){
    jogo = true

    //Ini tela
    tamTelaH = window.innerHeight
    tamTelaW = window.innerWidth

    //Ini Jogador  
    dirxJ = diryJ = 0
    pjx = tamTelaW / 2
    pjy = tamTelaH / 2
    
    velJ = 0
    velT = 4
    velB = 2

    jog = document.getElementById("naveJog")
    jog.style.top = pjy + "px"
    jog.style.left = pjx + "px"

    clearInterval(tmpCriaBomba)
    contBombas = 150
    vidaPlaneta = 100
    tmpCriaBomba = setInterval(criarBombas,1700)

    gameLoop()
}

window.addEventListener("load", inicia)
document.addEventListener("keydown",teclaDw)
document.addEventListener("keyup",teclaUp)
