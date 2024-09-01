class Circulo extends Figura {
    
    constructor(posX, posY, radio, fill, context, estilo){
        super(posX, posY, fill, context, estilo);
        this.radio= radio;
        this.seleccionada=false;
    }

draw(){
    this.context.fillStyle= this.fill;
    this.context.beginPath();
    this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
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


estaElPunto(x, y) {
    let xx = this.posX-x ;
    let yy = this.posY-y ;
    return ((Math.sqrt(xx * xx + yy * yy) < this.radio));
}
}




