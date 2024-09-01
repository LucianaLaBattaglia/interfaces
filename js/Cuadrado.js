class Cuadrado extends Figura{

    constructor(posX, posY, lado, fill, context, estilo){
        super(posX, posY, fill, context, estilo)
       this.lado=lado;
       this.seleccionada=false;
    }
    
draw(){
    this.context.fillStyle=this.fill
    this.context.beginPath();
    this.context.rect(this.posX, this.posY, this.lado, this.lado);
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
 return (x>this.posX && x<this.posX+this.lado && y>this.posY && y<this.posY+this.lado);
}




}