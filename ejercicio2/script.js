const kilometrosInput = document.getElementById("kilometros");
const litrosInput = document.getElementById("litros");
const calcularBtn = document.getElementById("calcular");
const resultadoSpan = document.getElementById("resultado");

calcularBtn.addEventListener('click',function(){
    let kilometros = parseFloat(kilometrosInput.value);
    let litros = parseFloat(litrosInput.value);
    let consumo = (litros / kilometros);
    resultadoSpan.textContent = `${consumo.toFixed(2)} L/km`;
    resultadoSpan.style.color = 'blue';
});