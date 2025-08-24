const imagenesDiv = document.getElementById('imagenes');
const imagenes = document.querySelectorAll('#imagenes img');
const imagenCurrent = document.getElementById('imagen_principal');

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        console.log("HOla")
        let addressImgCurrent = imagen.src
        imagenCurrent.src = addressImgCurrent;
    });
});