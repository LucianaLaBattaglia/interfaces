
class Figura{

constructor(posX, posY, fill, context, estilo){
    this.posX= posX;
    this.posY= posY;
    this.fill= fill;
    this.context=context;
    this.estilo=estilo;
    this.seleccionada=false;
    this.cursorOffsetX = 0;
    this.cursorOffsetY = 0;
    
}


draw(){

}



moveTo(posX, posY){
    this.posX=posX;
    this.posY=posY;
}


setCursorOffset(mouseX, mouseY) {
    this.cursorOffsetX = mouseX - this.posX;
    this.cursorOffsetY = mouseY - this.posY;
}

seleted(estilo){
    this.estilo=estilo;
}

estaElPunto(x,y){
return null;
}

}