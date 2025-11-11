export class pipeObstacle {

    x = 600;
    y = 50;
    height;
    width = 100;
    speed = 10;
    gap = 180;
    canvas;
    pencil;

    //pipe parts
    topPipeTopLeft;
    topPipeBottomRight;
    bottomPipeTopLeft;
    bottomPipeBottomRight;

    constructor(canvas, pencil){
        this.pencil = pencil;
        this.canvas = canvas;
        this.height = canvas.height
    }

    draw(){

        this.topPipeTopLeft = {
            x : this.x,
            y : this.y - this.height
        }

        this.topPipeBottomRight = {
            x : this.x + this.width,
            y : this.y - this.height + this.height
        }

        this.bottomPipeTopLeft = {
            x : this.x,
            y : this.y + this.gap
        }

        this.bottomPipeBottomRight = {
            x : this.x + this.width,
            y : this.y + this.gap + this.height
        }

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