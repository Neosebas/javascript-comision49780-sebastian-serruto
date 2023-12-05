/**** PROYECTO FINAL ****/


//  VARIABLES

const LAYOUT = document.querySelector ('.layout');
const BTN_SWITCH = document.querySelector('#switch');
const DATE = document.querySelector('#date');
const INPUT = document.querySelector('#input');
const BTN_ADD = document.querySelector('#btnEnter');
const LIST_CONT = document.querySelector('#list');
const EMPTY = document.querySelector ('#empty');
const YEAR = document.querySelector('#current_year');

let list = [];
let id = 0;


/** FUNCION MODO OSCURO **/

BTN_SWITCH.addEventListener('click', () =>{
    LAYOUT.classList.toggle('darkMode')
    BTN_SWITCH.classList.toggle('active')
});

/** FUNCION FECHA DEL DIA **/

const TODAY = new Date();
DATE.innerHTML = TODAY.toLocaleDateString ('es-AR', {weekday: 'long', day: "numeric", month:'long'});

/** ESCUCHA DE BOTON Y TECLA ENTER **/

BTN_ADD.addEventListener ("click", (e) => {
    e.preventDefault();

    const TEXT = INPUT.value;

    if (TEXT !== "") {
        const LI = document.createElement ('li');
        const P = document.createElement ('p');
        P.textContent = TEXT;

        LI.appendChild (P);
        LI.appendChild (addDeleteBtn());
        LIST_CONT.appendChild (LI);

        INPUT.value = "";        
}
    localStorage.setItem('taskList', JSON.stringify(list));
});

document.addEventListener ('keyup', function (e) {
    e.preventDefault();

    const TEXT = INPUT.value;

    if (e.key == 'Enter'){
        if (TEXT !== "") {
            const LI = document.createElement ('li');
            const P = document.createElement ('p');
            P.textContent = TEXT;
    
            LI.appendChild (P);
            LI.appendChild (addDeleteBtn());
            LIST_CONT.appendChild (LI);
    
            INPUT.value = "";   
        }
    }
    localStorage.setItem('taskList', JSON.stringify(list));
});


/** FUNCION BOTON DELETE **/

function addDeleteBtn(){
    const DELETE_BTN = document.createElement("button");

    DELETE_BTN.textContent ="Eliminar tarea";
    DELETE_BTN.className = "btnDelete";

DELETE_BTN.addEventListener('click', (e) => {
    const ITEM = e.target.parentElement;
    LIST_CONT.removeChild(ITEM);

    const ITEMS = document.querySelectorAll ('li');

    localStorage.setItem('taskList', JSON.stringify(list));
})
    return DELETE_BTN;   
}

/*** CARGA DEL LOCALSTORAGE ***/

document.addEventListener('DOMContentLoaded', () => {
    const SAVED_LIST = localStorage.getItem('taskList');
    if (SAVED_LIST) {
        list = JSON.parse(SAVED_LIST);

        LIST_CONT.innerHTML = '';

        list.forEach((task) => {
            const LI = document.createElement('li');
            const P = document.createElement('p');
            P.textContent = task.TEXT; 

            LI.appendChild(P);
            LI.appendChild(addDeleteBtn());
            LIST_CONT.appendChild(LI);
        });
    }
});


/*** FOOTER ***/

YEAR.innerHTML = new Date().getFullYear();