
export class Star {
    x = 50;
    y= 50;
    pencil;

    constructor(pencil){
        this.pencil=pencil;
    }

    draw(pencil){
        
        this.pencil.beginPath();
        this.pencil.arc(95, 50, 40, 0, 2*Math.Pi);
        this.pencil.fillStyles="red";
        this.pencil.fill();
        this.pencil.closePath();
    }


}