/*** Condicional  ***/

const NUMERO_SECRETO = 8;
let intentos = 0;
let tuRespuesta ;

while (tuRespuesta !== NUMERO_SECRETO){
    tuRespuesta = parseInt(prompt("Ingresa un numero. Pista: es el sexto numero de fibonacci"));
    console.log(intentos++);

    if (tuRespuesta !== NUMERO_SECRETO){
    alert("Segui probando");
    }
}
alert("Felicitaciones, sos groso")



/*** Para el Proyecto Final  ***/

let NEW_TASK="";
let continuar;
const DELETE = prompt("Deseas eliminar esta tarea, contesta si o no").toLowerCase();

function tarea () {
    do {
    const NEW_TASK = prompt("Ingresa una nueva tarea");
    NEW_TASK =="";
    continuar = prompt("quieres agregar una nueva tarea").toLowerCase();

}while (continuar === "si");
    alert("Bueno, cuando quieras puedes volver y agregar una nueva tarea");  

}

tarea ()

if (DELETE === "si") {
    alert ("Tu tarea se elimino correctamente");
} else {
    alert ("Esta tarea todavia esta pendiente");
}
