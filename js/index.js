/** PROYECTO FIANL **/

// VARIABLES 

const DATE = document.querySelector('#date');
const LIST_CONT = document.querySelector('#list');
const ELEMENT = document.querySelector('#element');
const INPUT = document.querySelector('#input');
const BTN_ENTER = document.querySelector('#btnEnter');

let list = [];

let id= 0; 

/** FUNCION FECHA DEL DIA **/

const TODAY = new Date();
DATE.innerHTML = TODAY.toLocaleDateString ('es-AR', {weekday: 'long', day: "numeric", month:'long'});


/** FUNCION AGREGAR TAREA **/

function newTask (task, id, deleted) {
    if(deleted) {return};    // delete es palabra reservada, me volvi chango hasta saber por que no me funcionaba

    const ELEMENT = `
                <li id="element">
                <p>${task}</p>
                <img src="../assets/ico/trash_ico.svg" alt="trash_ico" class="trash" id="${id} data-="deleted"" ></img> 
                </li>
            `
            LIST_CONT.insertAdjacentHTML("beforeend", ELEMENT);
};


/** FUNCION ELIMINAR TAREA **/

function taskDelete (element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    list[element.id].deleted = true;
}

/** ESCUCHA DEL BOTON Y EL ENTER **/

BTN_ENTER.addEventListener ('click',(e) =>{
    //e.preventDefault();
    
    const TASK = INPUT.value
    if (TASK){
        newTask (TASK, id, false)
        list.push({
            TASK : TASK,
            id : id,
            deleted : false
        });
    localStorage.setItem('List',JSON.stringify(LIST_CONT));
    INPUT.value = "";
    id ++;
    };
});

document.addEventListener ('keydown', function(e) {
    //e.preventDefault();
    if (e.key == 'Enter'){
    const TASK = INPUT.value
    if (TASK){
        newTask (TASK, id, false)
        list.push({
            TASK : TASK,
            id : id,
            deleted : false
    });
    localStorage.setItem('List',JSON.stringify(list));
    INPUT.value ="";
    id ++;
    };
    } 
})

/** ESCUCHA DEL BOTON ELIMINAR **/

document.addEventListener ("click", function(e){
    const ELEMENT2 = e.target;
    const ELEMENT_DATA = ELEMENT2.getAttribute ("data");
    
    if(ELEMENT_DATA == 'deleted'){
        taskDelete(ELEMENT2)
    }
    localStorage.setItem('List',JSON.stringify(list));
});

let data = localStorage.getItem('List');
if(data){
    list = JSON.parse(data)
    id = list.length;
    loadList('List');
}else{
    list = [];
    id = 0;
}


/** FUNCION PARA CARGAR LISTA **/

function loadList(array){
    array.forEach(function(item){
        newTask(item.task, item.id, item.deleted)
    });
}