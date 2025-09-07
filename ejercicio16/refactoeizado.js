// --- Lógica de la Interfaz (DOM) ---

const textInput = document.getElementById('text');
const calcBtn = document.getElementById('calc');
const resultSpan = document.getElementById('result');

calcBtn.addEventListener('click', () => {
    const inputText = textInput.value;
    
    // 1. Llama a la función pura que contiene la lógica del algoritmo
    const maxLength = findLongestSubstringLength(inputText);

    // 2. Actualiza la interfaz con el resultado
    resultSpan.textContent = maxLength;
    resultSpan.style.color = 'blue';
});


// --- Lógica del Algoritmo (Pura y Reutilizable) ---

/**
 * Encuentra la longitud de la subcadena más larga sin caracteres repetidos.
 * Utiliza la técnica de la ventana deslizante para una eficiencia O(n).
 * @param {string} str La cadena de texto de entrada.
 * @returns {number} La longitud de la subcadena más larga.
 */
function findLongestSubstringLength(str) {
    // Validación de la entrada: si no es un string o está vacío, retorna 0.
    if (typeof str !== 'string' || str.length === 0) {
        return 0;
    }

    let maxLength = 0;
    let start = 0; // Puntero de inicio de la ventana
    
    // Usamos un Map para almacenar el último índice visto de cada carácter.
    // Esto es más eficiente que un Set si necesitamos saber dónde empezar de nuevo.
    const charIndexMap = new Map();

    // El puntero 'end' representa el final de la ventana
    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];

        // Si el carácter actual ya está en nuestro mapa Y su índice es >= al inicio de nuestra ventana,
        // significa que hemos encontrado un duplicado DENTRO de la ventana actual.
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            // Movemos el inicio de la ventana a la posición siguiente al duplicado anterior.
            start = charIndexMap.get(currentChar) + 1;
        }

        // Actualizamos (o añadimos) el índice del carácter actual en el mapa.
        charIndexMap.set(currentChar, end);

        // Calculamos la longitud de la ventana actual y la comparamos con la máxima encontrada hasta ahora.
        const currentLength = end - start + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}