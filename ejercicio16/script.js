const textInput = document.getElementById('text');
const calcBtn = document.getElementById('calc');
const resultSpan = document.getElementById('result');

calcBtn.addEventListener('click',() => {
    let input =textInput.value;
    let max = 0;
    let substring = "";
    if(input == ""){ return resultSpan.textContent = 0;};
    for(let i = 0;i<input.length;i++){
        let char= input[i];
        if(i == 0){
            substring = char;
            max = substring.length;
            continue;
        };
        if(!substring.includes(char)){
            substring += char;
            let nuevo_max = substring.length;
            if(nuevo_max > max){max = nuevo_max};
            continue;
        };
        let nuevo_max = substring.length;
        if(nuevo_max > max){max = nuevo_max};
        substring = past_function(substring,char);
    };
    resultSpan.textContent = max;
    resultSpan.style.color = 'blue';
});
function past_function(A, char){
    if(A[0] == char){
        // 1er  case: si A = wk y char = w, >> retorna kw   
        A = A.slice(1);
        A += char;
        return A;
        
    }else if ( A[A.length-1] == char){
        // 2do  case: si A = pw y char = w, >> retorna w   
        A = char;
        return A;
    };
    // 3er  case: si A = pwe y char = w, >> retorna ew   
    A += char;
    i = A.indexOf(char);
    A = A.slice(i+1);
    return A;
};




