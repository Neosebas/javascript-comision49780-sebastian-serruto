/** PROYECTO FIANL **/

// VARIABLES 

const DATE = document.querySelector('#date');
const LIST_CONT = document.querySelector('#list');
const ELEMENT = document.querySelector('#element');
const INPUT = document.querySelector('#input');
const BTN_ENTER = document.querySelector('#btnEnter');

let list = [];

let id; 

/** FUNCION FECHA DEL DIA **/

const TODAY = new Date();
DATE.innerHTML = TODAY.toLocaleDateString ('es-AR', {weekday: 'long', day: "numeric", month:'long'});


/** FUNCION AGREGAR TAREA **/

function newTask (task, id, delet) {
    if(delet){return};    // delete es palabra reservada, me volvi chango hasta saber por que no me funcionaba

    const ELEMENT = `
                <li id="element">
                <p>${task}</p>
                <i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
                </li>
            `
            LIST_CONT.insertAdjacentHTML("beforeend", ELEMENT);
};


/** FUNCION ELIMINAR TAREA **/


/** ESCUCHA DEL BOTON Y EL ENTER **/

BTN_ENTER.addEventListener ('click',(e) =>{
    e.preventDefault();
    
    const TASK = INPUT.value
    if (TASK){
        newTask (TASK, id, false)
        list.push({
            TASK : TASK,
            id : id,
            delet : false
        });
    };
    id ++;
    INPUT.reset();
});

document.addEventListener ('keydown', function(e) {
    e.preventDefault();
   if (e.key == 'Enter'){
    const TASK = INPUT.value
    if (TASK){
        newTask (TASK, id, false)
        list.push({
            TASK : TASK,
            id : id,
            delet : false
        });
    };
    id ++;
    INPUT.value ="";  
} 
})