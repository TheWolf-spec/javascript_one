const longitudInput = document.getElementById("longitud");
const areaSpan = document.getElementById("areaResultado");
const perimetroSpan = document.getElementById("perimetroResultado");
const calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click',function(){
    let longitud = parseFloat(longitudInput.value);
    let area = longitud * longitud;
    let perimetro = longitud * 4;
    areaSpan.textContent = area.toFixed(2);
    areaSpan.style.color = 'darkred';
    perimetroSpan.textContent = perimetro.toFixed(2);
    perimetroSpan.style.color = 'darkred';
    
});
