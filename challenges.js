let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");


import {Star} from "./star.js"

let stars = [];

let howManyStars = 100;

for(let i=0; i<howManyStars; i++){
    let newStar = new Star(pencil, canvas)
    stars.push(newStar)
}


function drawSpace(){
    pencil.fillStyle = 'black'
    pencil.fillRect(0, 0, canvas.width, canvas.height)
}


//erase canvas
function clearScreen(){
    pencil.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
}


function gameLoop(){
    clearScreen();
    drawSpace();
    //draw background

    //draw stars

    //move stars
    for(let i=0;i<stars.length;i++){
        stars[i].move();
        stars[i].draw();
    }
    //reset star path
}


setInterval(gameLoop, 50);


