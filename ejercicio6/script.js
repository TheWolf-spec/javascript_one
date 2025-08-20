const cadenaInput = document.getElementById('cadena');
const contarBtn = document.getElementById('contar');
const resultadoSpan = document.getElementById('resultado');

let contador = cadena => {
    let i = 0;
    for(const char of cadena){
        i++;
    };
    return i;
};

contarBtn.addEventListener('click',function(){
    let texto = cadenaInput.value;
    let caracteres = contador(texto);
    resultadoSpan.textContent = caracteres + " Caracteres";
    resultadoSpan.style.color = 'blue';
})
