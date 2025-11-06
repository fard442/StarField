export class Bird {
    x  = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;

    ySpeed = 1;
    maximumYSpeed = 20;


    constructor(pencil, canvas){
        this.canvas = canvas;
        this.pencil = pencil;
    }

    draw(){
        this.pencil.fillStyle = "yellow";
        this.pencil.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    flap(){
        // console.log("flap")
        this.ySpeed = -15;
        this.maximumYSpeed = 20;
    }

    gravity(){
        this.y += this.ySpeed
        this.ySpeed += 2;

        if(this.ySpeed > this.maximumYSpeed){
            this.ySpeed = this.maximumYSpeed;
        }

        //stops bird 
        if(this.y + 50 > this.canvas.height - 30){
            this.maximumYSpeed = 0;
        }
    }

    isHitByPipe(pipeObstacle){
        let isFarEnoughRight = this.x > pipeObstacle.topPipeTopLeft.x;
        let isLowEnough = this.y > pipeObstacle.topPipeTopLeft.y;
        let isFarEnoughLeft = this.x < pipeObstacle.topPipeBottomRight.x;
        let isHighEnough = this.y < pipeObstacle.topPipeBottomRight.y;
        if(this.x > pipeObstacle.topPipeTopLeft.x)
            return true;
        if(this.y > pipeObstacle.topPipeTopLeft.y)
            return true;
        if(this.x > pipeObstacle.topPipeBottomRight.x)
            return true;
        if(this.y > pipeObstacle.topPipeBottomRight.y)
            return true;
        return false
        
    }
}