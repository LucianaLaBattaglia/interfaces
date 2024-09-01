class Rectangulo extends Figura{

    constructor(posX, posY, width, height, fill, context, estilo, seleccionada){
        super(posX, posY, fill, context, estilo);
        this.widht=width;
        this.heigth=height;
        this.seleccionada=false;
    }
    
draw(){
    this.context.fillStyle=this.fill
    this.context.beginPath();
    this.context.rect(this.posX, this.posY, this.widht, this.heigth);
    this.context.fill();
    if(this.estilo){
        this.context.stroke();
    }
    if (this.seleccionada) {
        this.context.strokeStyle = 'grey'; // Color del contorno
        this.context.lineWidth = 5; // Grosor del contorno
        this.context.stroke();
    }

}

estaElPunto(x,y){
 return (x>this.posX && x<this.posX+this.widht && y>this.posY && y<this.posY+this.heigth);
}




}