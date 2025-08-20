const numeroInput = document.getElementById('numero');
const verificarBtn = document.getElementById('verificar');
const resultadoSpan = document.getElementById('resultado');

verificarBtn.addEventListener('click',function(){
    let numero = parseInt(numeroInput.value);


    let resultado = ['PAR!!','IMPAR!!'];
    let colores = ['blue','darkred'];
    resultadoSpan.textContent = resultado[numero %2];
    resultadoSpan.style.color = colores[numero %2];
})