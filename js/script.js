let canvas=document.getElementById('mycanvas');
/** @type {CanvasRenderingContext2D} */
const ctx= canvas.getContext("2d")
/** @type { HTMLCanvasElement} */


let canvasWidth=canvas.width;
let canvasHeight=canvas.height;
let figuras = [];
let delay= 100;
const CANT_FIGURAS = 24;
let objetoActual= null;
let  mouseDown = false;


function main (){
    pintarCanvas();
    crearFiguras();
}

function crearFiguras() {
    if (figuras.length < CANT_FIGURAS) {
        agregarFigura();
        figuras[figuras.length - 1].draw();
        delay = Math.max(10, delay - 10);
        setTimeout(() => {crearFiguras();}, delay);
    }
}

function agregarFigura() {
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomColor();
 
    if (figuras.length<(CANT_FIGURAS/3)) {
        let circulo = new Circulo(posX, posY, Math.round(Math.random() * 100 + 10), color, ctx, false);
        figuras.push(circulo);
    } else if(figuras.length<(CANT_FIGURAS/3*2)) {
        let rectangulo = new Rectangulo(posX, posY, Math.round(Math.random() * 100 + 10),
        Math.round(Math.random() * 200 + 5),  color, ctx, false);
        figuras.push(rectangulo); 
    }else{let cuadrado = new Cuadrado(posX, posY, Math.round(Math.random() * 100+ 10), color, ctx, false);
        figuras.push(cuadrado);
    }

}


function randomColor() {
    let r = Math.round( Math.random() * 255);
    let g = Math.round( Math.random() * 255);
    let b = Math.round( Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}


function actualizar(){
    pintarCanvas(); 
   
    for(let i = 0; i < figuras.length; i++){
        figuras[i].draw(); 
    }

}


canvas.addEventListener('mousedown', (e) => {
    mouseDown = true;
    let pos = getMousePos(e);

for (let i = figuras.length - 1; i >= 0; i--) {
    if (figuras[i].estaElPunto(pos.x, pos.y)) {
        objetoActual = figuras[i];
        objetoActual.setCursorOffset(pos.x, pos.y);

        for (let f of figuras) {
            f.seleccionada = false; // Deseleccionar todas
        }
        objetoActual.seleccionada = true; // Seleccionar la actua

        figuras.splice(i, 1);
        figuras.push(objetoActual);

            break;
        }
      
} 
if (!objetoActual.seleccionada) {
    for (let f of figuras) {
        f.seleccionada = false;
    }
}

actualizar();


})

canvas.addEventListener('mousemove', (e) => {
    let pos = getMousePos(e);
    if(mouseDown) {
        objetoActual.moveTo(pos.x - objetoActual.cursorOffsetX, pos.y - objetoActual.cursorOffsetY);
        actualizar(); 
        
    }
});

canvas.addEventListener('mouseup', (e) => {
    mouseDown = false;
    if (objetoActual) {
        objetoActual.seleccionada = false;
    }
})


document.addEventListener('keydown', (e) => {
    let pos = getMousePos(e);
  
    if (objetoActual!=null) {
      const step = 5; // El tamaño del movimiento con el teclado
      switch (e.key) {
        case 'ArrowUp':
          objetoActual.moveTo(objetoActual.posX, objetoActual.posY -step);
          break;
        case 'ArrowDown':
          objetoActual.moveTo(objetoActual.posX, objetoActual.posY + step);
          break;
        case 'ArrowLeft':
        objetoActual.moveTo(objetoActual.posX - step,objetoActual.posY );
          break;
        case 'ArrowRight':
         objetoActual.moveTo(objetoActual.posX + step, objetoActual.posY );
          break;
      }
  
        actualizar();
    }
  });
  
  

function getMousePos(e) {
    
    let x = e.offsetX;
    let y = e.offsetY;
    return { x, y };
}

function pintarCanvas() {
    let color='rgba(250,215,260,255)';
    let rectangulo= new Rectangulo(0, 0, canvasWidth-1, canvasHeight-1, color, ctx, true);
    rectangulo.draw();
}

canvas.addEventListener('click', (event) => {
    const pos = getMousePos(event); // Obtener la posición del mouse
    for (let figura of figuras) {
        if (figura.estaElPunto(pos.x, pos.y)) {
            alert('Hiciste clic en una figura');
            figura.seleccionada = false; // Deseleccionar la figura después del alert
            actualizar();
            break;
        }
    }});

