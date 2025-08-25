const usernameInput = document.getElementById('username');
const errorUsername = usernameInput.nextElementSibling;
const emailInput = document.getElementById('email');
const errorEmail = emailInput.nextElementSibling;
const passwordInput = document.getElementById('password');
const errorPassword = passwordInput.nextElementSibling;

const confirmPasswordInput = document.getElementById('confirmPassword');
const errorConfirmPassword = confirmPasswordInput.nextElementSibling;

const registrarseBtn = document.getElementById('registrarse');


usernameInput.addEventListener('input', () =>{
    let cadena = usernameInput.value
    const regexWhitelist = /^[a-zA-Z0-9 ]+$/;
    if((regexWhitelist.test(cadena))){
        usernameInput.classList.add('success');
        usernameInput.classList.remove('error');
        // Oculta el mensaje de error y limpia su contenido
        errorUsername.textContent = '';
        errorUsername.style.display = 'none';
    }else{
        usernameInput.classList.remove('error');
        usernameInput.classList.add('success');
        // Asigna el texto al mensaje de error y lo hace visible
        errorUsername.textContent = 'Contenido del campo no permitido';
        errorUsername.style.display = 'block';
    };
});

emailInput.addEventListener('input', () => {
    let cadena = emailInput.value;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(regexEmail.test(cadena)){
        emailInput.classList.add('success');
        emailInput.classList.remove('error');

        errorEmail.textContent = '';
        errorEmail.style.display = 'none';
    }else{
        emailInput.classList.add('success');
        emailInput.classList.remove('error');
        
        errorEmail.textContent = 'Contenido del campo no permitido';
        errorEmail.style.display = 'block';
    };
});

passwordInput.addEventListener('input',() => {
    let cadena = passwordInput.value;
    if (cadena.length >= 5){
        errorPassword.textContent= '';
        errorPassword.style.display = 'none';
    }else{
        errorPassword.textContent = 'La contraseña debe tener al menos 5 caracteres';
        errorPassword.style.display = 'block';
    };
});

confirmPasswordInput.addEventListener('input', () => {
    console.log(passwordInput.value);
    console.log(confirmPasswordInput.value);
    console.log('----------------------------------------------');
    if (passwordInput.value == confirmPasswordInput.value){
        errorConfirmPassword.textContent = "";
        errorConfirmPassword.style.display = 'none';
    }else{
        errorConfirmPassword.textContent = "Las contrasenas no coinciden";
        errorConfirmPassword.style.display = 'block';
    };
});
