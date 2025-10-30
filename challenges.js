let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");


import {Star} from "./star.js"
let testStar=new Star(pencil);
testStar.draw();

let stars = [
    testStar
];


function gameLoop(){

    //draw background

    //draw stars

    //move stars

    //reset star path
}

setInterval(gameLoop, 50);


