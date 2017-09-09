var isRed = true

function changeColor(){
    var sphere = document.getElementById("sphere")
    if(isRed){
        sphere.setAttribute("color","blue")
        sphere.setAttribute("position", "5 1 -5")
        isRed = false
    }
    else{
        sphere.setAttribute("color","tomato")
        sphere.setAttribute("position", "1 1 -5")
        isRed = true
    }
}

function addTorus20x(){
    for(var i = 0; i < 20; i++){
        addTorus()
    }
}

function addTorus(){
    var newKnot = document.createElement("a-torus-knot")
    let x= Math.floor(Math.random() * 20);
    let y= Math.floor(Math.random() * 20);
    let z= Math.floor(Math.random() * -20);
    newKnot.setAttribute("position", `${x} ${y} ${z}`)
    var ascene = document.getElementById("scene")
    ascene.appendChild(newKnot)
}