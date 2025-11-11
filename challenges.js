let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
import { Bird } from "./bird.js"
import { pipeObstacle } from "./pipeObstacle.js"


function gameLoop(){
    pencil.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    let wasHit = testerBird.isHitByPipe(testerPipe);

    testerPipe.draw()
    testerPipe.move()
    testerBird.draw()
    testerBird.gravity()
    
    // make the game harder, doesnt work properly with current code
    // testerPipe.speed += 0.02


    this.maximumYSpeed = 20;

    
    
    if (wasHit == true){
        console.log("hit")
        testerBird.maximumYSpeed = 5000
        testerPipe.speed = 0
        
        
        //Reset
        score = 0
        console.log("boowomp")
        testerBird.y = 50
        testerBird.ySpeed = 1
        testerPipe.x = canvas.clientWidth

    } else {
        testerPipe.speed = 10
    }

    
    
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
    // console.log("click")
    testerBird.flap()
}

function detectKey(){
    // console.log("o")
}

addEventListener("click",detectClicks);
document.addEventListener("keypress", detectKey);

let testerPipe = new pipeObstacle(canvas, pencil);
testerPipe.draw();

let testerBird = new Bird(pencil, canvas);
testerBird.draw()

