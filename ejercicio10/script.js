const numeroInput = document.getElementById('number');
const calcBtn = document.getElementById('calc');
const arraySpan = document.getElementById('array');
const addBtn = document.getElementById('add')
const resultBtn = document.getElementById('result')

let numeros = [];

const maxNumber = (array)=> {
    let value = "vacio";
    for(let i = 0; i < array.length;i++){
        if (value === "vacio"){value = array[i]}
        else if(array[i] > value){value = array[i]};

    };
    return value;
};
addBtn.addEventListener('click',() => {
    let numero = parseInt(numeroInput.value);
    if (!isNaN(numero)){
        numeros.push(numero);
        arraySpan.textContent = numeros;

    }else{
        arraySpan.textContent = "NO ES UN NUMERO";
    };
});

calcBtn.addEventListener('click',() => {
    let resultado = maxNumber(numeros);
    resultBtn.textContent = resultado;
});




