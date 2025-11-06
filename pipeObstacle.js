export class pipeObstacle {

    x = 600;
    y = 100;
    height;
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
        this.height = canvas.height
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

        //check to recycle pipes
        if(this.x < -this.width){
            this.x = this.canvas.width
            this.y = Math.random() * this.canvas.height
        }
    }
}