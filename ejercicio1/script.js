// Obtener referencias a los elementos HTML
const precioProductoInput = document.getElementById('precioProducto');
const tasaIVAInput = document.getElementById('tasaIVA');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoSpan = document.getElementById('resultado');

// Añadir un "escuchador de eventos" al botón
calcularBtn.addEventListener('click', function() {
    // Obtener los valores de los inputs y convertirlos a números
    // No se realizan validaciones aquí
    let precioProducto = parseFloat(precioProductoInput.value);
    let iva = parseFloat(tasaIVAInput.value);

    // Calcular el precio total
    let tasaIvaDecimal = iva / 100;
    let montoIva = precioProducto * tasaIvaDecimal;
    let precioTotal = precioProducto + montoIva;

    // Mostrar el resultado en el span de HTML
    resultadoSpan.textContent = `$${precioTotal.toFixed(2)}`;
    resultadoSpan.style.color = 'blue';
});