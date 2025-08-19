const horasInput = document.getElementById('horas');
const minutosInput = document.getElementById('minutos');

const calcularbtn = document.getElementById('calcular');
const resultadoSpan = document.getElementById('resultado');

calcularbtn.addEventListener('click',function(){
    let horas = parseFloat(horasInput.value) || 0;
    let minutos = parseFloat(minutosInput.value) || 0;

    let totalMinutos = (horas * 60) + minutos;
    let totalSegundos = totalMinutos * 60;
    resultadoSpan.textContent = `${totalSegundos} seg`;
    resultadoSpan.style.color = "blue";
})