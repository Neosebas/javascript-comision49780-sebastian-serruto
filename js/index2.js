/*** Condicional  ***/

/** const NUMERO_SECRETO = 8;
let intentos = 0;
let tuRespuesta ;

while (tuRespuesta !== NUMERO_SECRETO){
    tuRespuesta = parseInt(prompt("Ingresa un numero. Pista: es el sexto numero de fibonacci"));
    console.log(intentos++);

    if (tuRespuesta !== NUMERO_SECRETO){
    alert("Segui probando");
    }
}
alert("Felicitaciones, sos groso") **/



/*** Para el Proyecto Final  ***/

let newTask="";
let continuar;

function tarea () {
    do {
    const newTask = prompt("Ingresa una nueva tarea");
    newTask =="";
    continuar = prompt("quieres agregar una nueva tarea").toLowerCase();

}while (continuar === "si");
    alert("Bueno, cuando quieras puedes volver y agregar una nueva tarea");  

}

tarea ()

const DELETE = prompt("Deseas eliminar esta tarea, contesta si o no").toLowerCase();

if (DELETE === "si") {
    alert ("Tu tarea se elimino correctamente");
} else {
    alert ("Esta tarea todavia esta pendiente");
}


/*** Productos y cards para cumplir con la segunda pre-entrega ***/
/*** 

class CargarProductos {
    constructor(img, producto, marca, precio){
        this.img = img;
        this.producto = producto,
        this.marca = marca,
        this.precio = precio;
    }
}


const ANOTADOR = new CargarProductos("../assets/img/anotador_husares.webp","Anotardor", "Husares", 1500);
const LAPICERA = new CargarProductos("../assets/img/lapicera_paper_mate.webp", "Lapicera", "Paper Mate", 950);
const CORRECTOR = new CargarProductos("../assets/img/corrector_liquid_paper.webp", "Corrector","Liquid Paper", 1200);

const PRODUCTOS = [ANOTADOR, LAPICERA, CORRECTOR];

PRODUCTOS.forEach(CargarProductos => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
                    <img src="${CargarProductos.img}"  alt="...">
                    <div>
                        <h5>${CargarProductos.producto}</h5>
                        <p>${CargarProductos.marca}</p>
                        <p>${CargarProductos.precio}</p>
                    </div>
    `
    cards.appendChild(div)
}) ***/



/*** FOOTER ***/

const year = document.querySelector('#current_year');

year.innerHTML = new Date().getFullYear();