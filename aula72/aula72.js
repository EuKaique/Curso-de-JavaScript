var dv1 = document.getElementById("dv1")
var dv2 = document.getElementById("dv2")
var dv3 = document.getElementById("dv3")
var dv4 = document.getElementById("dv4")

dv1.addEventListener("mouseover",troca1)
dv1.addEventListener("mouseout",troca2)

dv2.addEventListener("mouseover",troca1)
dv2.addEventListener("mouseout",troca2)

dv3.addEventListener("mouseover",troca1)
dv3.addEventListener("mouseout",troca2)

dv4.addEventListener("mouseover",troca1)
dv4.addEventListener("mouseout",troca2)

function troca1(event){
    var obj = event.target
    obj.style.backgroundImage = "url('../images/c3.png')"
}

function troca2(event){
    var obj = event.target
    obj.style.backgroundImage = "url('../images/c2.png')"
}
