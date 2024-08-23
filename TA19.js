const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const email = document.getElementById("email");

function validarNombre() {
    const nombreError = document.getElementById("nombreError");
    if (nombre.value.trim() === "") {
        nombreError.textContent = "El nombre es obligatorio.";
        return false;
    } else {
        nombreError.textContent = "";
        return true;
    }
}

function validarPassword() {
    const passwordError = document.getElementById("passwordError");
    if (password.value.length < 8) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

function validarEmail() {
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Ingrese un correo electrónico válido.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

nombre.addEventListener("input", validarNombre);
password.addEventListener("input", validarPassword);
email.addEventListener("input", validarEmail);

formulario.addEventListener("submit", function(event) {
    if (!validarNombre() || !validarPassword() || !validarEmail()) {
        event.preventDefault();
        document.getElementById("resultado").textContent = "Corrige los errores antes de enviar el formulario.";
    } else {
        document.getElementById("resultado").textContent = "Formulario enviado correctamente.";
    }
});
