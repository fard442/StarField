export class pipeObstacle {

    x = 300;
    y = 100;
    height = 500;
    speed = 0;
    gap = 150;
    canvas;
    pencil;

    //pipe parts
    topPipe;
    bottomPipe;

    constructor(canvas, pencil){
        this.pencil = pencil;
        this.canvas = canvas;
    }

    draw(){
        

        //top pipe
        this.pencil.fillStyle="blue";
        this.pencil.fillRect(
            this.x, 
            this.y - this.height,
            100, 
            this.height);

        //bottom pipe
        this.pencil.fillStyle="red";
        this.pencil.fillRect(
            this.x, 
            this.y + this.gap, 
            100, 
            this.height);
    }
    
    move(){
        this.x -= this.speed;
    }
}