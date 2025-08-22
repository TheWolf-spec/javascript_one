const textInput = document.getElementById('text');
const numberInput = document.getElementById('number');
const repetirBtn = document.getElementById('repeat');
const resultSpan = document.getElementById('result');

const repetidor = (cadena, cantidad) => {
    let resultadoEnd = "";
    for(let i = 0; i < cantidad;i++){
        resultadoEnd += cadena + " ";
    };
    return resultadoEnd;
};
repetirBtn.addEventListener('click',() => {
    if(isNaN(numberInput.value) ){
        resultSpan.textContent = "INGRESA UN NUMERO VALIDO";
    }
    else if(numberInput.value < 0){
        resultSpan.textContent = "INGRESA UN NUMERO >= 0";
    }
    else{
        let texto = textInput.value;
        let number = parseInt(numberInput.value);
        let resultado = repetidor(texto,number);
        resultSpan.textContent = resultado;

    };
    
});