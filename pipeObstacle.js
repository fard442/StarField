export class pipeObstacle {

    x = 600;
    y = 100;
    height = 500;
    width = 100;
    speed = 10;
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
            this.width, 
            this.height);

        //bottom pipe
        this.pencil.fillStyle="red";
        this.pencil.fillRect(
            this.x, 
            this.y + this.gap, 
            this.width, 
            this.height);
    }
    
    move(){
        this.x -= this.speed;

        if(this.x < -this.width){
            this.x = this.canvas.width
        }
    }
}