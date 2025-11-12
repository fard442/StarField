export class Bird {
    // let birdImage = document.getElementById
    x  = 50;
    y = 50;
    width = 50;
    height = 50;
    canvas;
    pencil;
    // sprite : 

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
        if(this.y + 50 > this.canvas.height - 25){
            this.maximumYSpeed = 0;
        } else {
            this.maximumYSpeed = 20;
        }
    }

    isHitByPipe(pipeObstacle){
        //Top pipe check
        let isFarEnoughTopRight = this.x > pipeObstacle.topPipeTopLeft.x;
        let isLowEnoughTop = this.y > pipeObstacle.topPipeTopLeft.y;
        let isFarEnoughTopLeft = this.x < pipeObstacle.topPipeBottomRight.x;
        let isHighEnoughTop = this.y < pipeObstacle.topPipeBottomRight.y;
        
        
        
        
        //Bottom pipe check
        let isFarEnoughBottomRight = this.x > pipeObstacle.bottomPipeTopLeft.x;
        let isLowEnoughBottom = this.y > pipeObstacle.bottomPipeTopLeft.y;
        let isFarEnoughBottomLeft = this.x < pipeObstacle.bottomPipeBottomRight.x;
        let isHighEnoughBottom = this.y < pipeObstacle.bottomPipeBottomRight.y;
        
        
        if(isFarEnoughBottomRight && isLowEnoughBottom && isFarEnoughBottomLeft && isHighEnoughBottom || isFarEnoughTopRight && isLowEnoughTop && isFarEnoughTopLeft && isHighEnoughTop)
            return true;
        return false;
        
    }
}