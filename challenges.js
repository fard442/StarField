let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
import { Bird } from "./bird.js"
import { pipeObstacle } from "./pipeObstacle.js"


function gameLoop(){
    pencil.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    
    testerPipe.draw()
    testerPipe.move()
    testerBird.draw()
    testerBird.gravity()
    
}

setInterval(gameLoop, 50);

let score = 0;

//score up every second
function raiseScore(){
    score += 1;
    let scoreElement = document.getElementById("scoreDisplay");
    scoreElement.innerHTML = "Score: " +score;
   
    
}

setInterval(raiseScore, 1000);

function detectClicks(){
    console.log("click")
}
addEventListener("click",detectClicks);

let testerPipe = new pipeObstacle(canvas, pencil);
testerPipe.draw();

let testerBird = new Bird(pencil, canvas);
testerBird.draw()