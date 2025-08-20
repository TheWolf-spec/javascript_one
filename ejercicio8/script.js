const textoInput = document.getElementById('text');
const charInput = document.getElementById('char');
const separarBtn = document.getElementById('separar');
const resultadoSpan = document.getElementById('resultado');

separador = (cadena,caracter) => {
    cadena += caracter;
    if (cadena.includes(caracter)){
        let a = "";
        let resultado = [];
        
        for (const c of cadena){
            if(c != caracter){
                a+= c;
            }
            else{
                resultado.push(a);
                a = "";
            };
        };
        return resultado;
    }
    else{
        resultadoSpan.textContent = "Ausente";
    };

};

separarBtn.addEventListener('click',function(){
    let resultado = separador(textoInput.value,charInput.value);
    resultadoSpan.textContent = `Array: {${resultado}}`;
})