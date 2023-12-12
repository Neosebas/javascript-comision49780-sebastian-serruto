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
    const IS_DARK_MODE = LAYOUT.classList.contains('darkMode');

    LAYOUT.classList.toggle('darkMode');
    BTN_SWITCH.classList.toggle('active');

    localStorage.setItem('isDarkModeEnabled', IS_DARK_MODE ? false : true);
});

/** FUNCION FECHA DEL DIA **/

const TODAY = new Date();
DATE.innerHTML = TODAY.toLocaleDateString ('es-AR', {weekday: 'long', day: "numeric", month:'long'});

/**  FUNCION PARA FORMATEAR FECHAS **/
function formatDateToString (date) {
    return date.toLocaleDateString('es-AR', {day: "numeric", month: "numeric"});
}


/** ESCUCHA DE BOTON Y TECLA ENTER **/

BTN_ADD.addEventListener ("click", (e) => {
    e.preventDefault();

    const TEXT = INPUT.value;

    if (TEXT !== "") {
        const LI = document.createElement ('li');
        const P = document.createElement ('p');
        const CURRENT_DATE = new Date();
        const FORMATTED_DATE = formatDateToString(CURRENT_DATE);
        
        const DATE_WITH_TEXT = FORMATTED_DATE +" "+ TEXT;

        P.textContent = DATE_WITH_TEXT;

        LI.appendChild (P);
        LI.appendChild (addDeleteBtn(LI));
        LIST_CONT.appendChild (LI);

        list.push ({date: FORMATTED_DATE,TEXT: TEXT});

        saveListToLocalStorage(); 

        INPUT.value = "";        
    }
});

document.addEventListener ('keyup', function (e) {
    e.preventDefault();

    const TEXT = INPUT.value;

    if (e.key == 'Enter'){
        if (TEXT !== "") {
            const LI = document.createElement ('li');
            const P = document.createElement ('p');
            const CURRENT_DATE = new Date();
            const FORMATTED_DATE = formatDateToString(CURRENT_DATE);
            
            const DATE_WITH_TEXT = FORMATTED_DATE +" "+ TEXT;
    
            P.textContent = DATE_WITH_TEXT;

    
            LI.appendChild (P);
            LI.appendChild (addDeleteBtn(LI));
            LIST_CONT.appendChild (LI);

            list.push ({TEXT: TEXT});

            saveListToLocalStorage(); 
    
            INPUT.value = "";   
        }
    }

});


/** FUNCION BOTON DELETE **/

function addDeleteBtn() {
    const DELETE_BTN = document.createElement("button");

    DELETE_BTN.textContent = " "; 
    DELETE_BTN.className = "btnDelete";

    DELETE_BTN.addEventListener('click', (e) => {
        const ITEM = e.target.parentElement;
        const INDEX = Array.from(LIST_CONT.children).indexOf(ITEM);

        Swal.fire({
            title: "Atencion",
            text: "¿Estas seguro de que quieres eliminar esta tarea?",
            icon: "warning",
            iconColor: "red",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si !"
        }).then((result) => {
            if (result.isConfirmed) {
                LIST_CONT.removeChild(ITEM);
                list.splice(INDEX, 1);
                saveListToLocalStorage();

                Swal.fire({
                    title: "Listo",
                    text: "Tu tarea se elimino correctamente.",
                    icon: "success"
                });
            }
        });
    });

    return DELETE_BTN;
}


/*** FUNCION DE GUARDADO ***/

function saveListToLocalStorage (){
    localStorage.setItem('taskList', JSON.stringify(list));
};

/*** CARGA DEL LOCALSTORAGE ***/

document.addEventListener('DOMContentLoaded', () => {
    const SAVED_LIST = localStorage.getItem('taskList');
    if (SAVED_LIST) {
        list = JSON.parse(SAVED_LIST);

        LIST_CONT.innerHTML = '';

        list.forEach((task) => {
            const LI = document.createElement('li');
            const P = document.createElement('p');
            const DATE_WITH_TEXT = task.date +" "+ task.TEXT;

            P.textContent = DATE_WITH_TEXT;

            LI.appendChild(P);
            LI.appendChild(addDeleteBtn());
            LIST_CONT.appendChild(LI);
        });
    }
});

document.addEventListener('DOMContentLoaded',() => {
    const IS_DARK_MODE_SAVED = localStorage.getItem('isDarkModeEnabled');

    if (IS_DARK_MODE_SAVED !== null) {
        const IS_DARK_MODE = IS_DARK_MODE_SAVED === 'true';
        LAYOUT.classList.toggle ('darkMode', IS_DARK_MODE);
        BTN_SWITCH.classList.toggle ('active', IS_DARK_MODE);
    }
});


/*** FOOTER ***/

YEAR.innerHTML = new Date().getFullYear();