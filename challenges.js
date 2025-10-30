let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");


import {Star} from "./star.js"
let testStar=new Star(pencil);
testStar.draw();

let stars = [testStar];


function gameLoop(){

    //erase canvas
    pencil.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
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


