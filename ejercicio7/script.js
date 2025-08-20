const textoInput = document.getElementById('texto');
const charsInput = document.getElementById('charRecortar');
const recortarBtn = document.getElementById('recortar');
const resultadoSpan = document.getElementById('resultado');

let recortador = (txt,quantity) => {
    let txtEnd = "";
    for(let i = 0;i <= quantity-1;i++){
        txtEnd += txt[i];
    };
    return txtEnd;
};

recortarBtn.addEventListener('click',function(){
    let texto = textoInput.value;
    let chars = parseInt(charsInput.value);

    let txtSpan = recortador(texto,chars);
    
    resultadoSpan.textContent = txtSpan;
    resultadoSpan.style.color = 'blue';
})

