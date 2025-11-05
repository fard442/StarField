let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
// import {createBird}


function gameLoop(){
    pencil.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    raiseScore()
}


let score = 0;

//score up every second
function raiseScore(){
    score += 1;
    let scoreElement = document.getElementById("scoreDisplay");
    scoreElement.innerHTML = score;
    console.log(score)
    createBird()
}

setInterval(gameLoop, 1000);

function detectClicks(){
    console.log("click")
}
addEventListener("click",detectClicks)