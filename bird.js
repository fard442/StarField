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

    gravity(){
        this.y += this.ySpeed
        this.ySpeed *= 1.2;

        if(this.ySpeed > this.maximumYSpeed){
            this.ySpeed = this.maximumYSpeed;
        }
        // if(this.y + 50 == 200){
        //     this.ySpeed = 0;
        // }
    }
}