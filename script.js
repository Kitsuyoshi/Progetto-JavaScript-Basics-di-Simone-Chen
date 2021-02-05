const conteggio = document.getElementById("counter");
const btnAdd = document.getElementById("Add");
const btnMinus = document.getElementById("Minus");
const btnReset = document.getElementById("Reset");
const btnSetUp = document.getElementById("Set");
const btnAddMore = document.getElementById("AddMore");


let number = 0;

function add(){
    number++;
    conteggio.textContent = number;
}

function minus(){
    number--;
    if(number < 0){
        number = 0;
        alert("Il conteggio non può andare sotto lo zero")
    }
    conteggio.textContent = number;
}

btnAdd.addEventListener("click", add);
btnMinus.addEventListener("click", minus);

function reset(){
    number = 0;
    conteggio.textContent = "0";
}

btnReset.addEventListener("click", reset);

function setUp(){
    let start = prompt("Imposta il numero da cui iniziare");
    number = Number(start);
    let check = Number.isNaN(number);
    if(check === true){
        number = 0;
        alert("Inserire un NUMERO")
    }

    conteggio.textContent = number;
}

btnSetUp.addEventListener("click", setUp);

function addMore(){
    let addNumber = prompt("Inserisci il numero da aggiungere al conto \nAggiungere \"-\" davanti al numero per sottrarre");
    addNumber2 = Number(addNumber)
    let check = Number.isNaN(addNumber2);
    if(check === true){
        alert("Inserire un NUMERO");
    }else{
        number = number + addNumber2;
        conteggio.textContent = number;
    }

    if(number < 0){
        number = 0;
        alert("Il conteggio non può andare sotto lo zero")
        conteggio.textContent = number;
    }
}

btnAddMore.addEventListener("click", addMore);