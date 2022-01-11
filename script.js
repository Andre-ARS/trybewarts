let userEmail = document.querySelector('#email');
let userPassword = document.querySelector('#password');
let loginButton = document.querySelector('#login-button'); 

// Requisito 3
function loginCheck (event) {
    event.preventDefault()

    if (userEmail.value === "tryber@teste.com" && userPassword.value === "123456") {
        alert("Olá, Tryber!");
    } else {
        alert("Email ou senha inválidos.");
    }
}

loginButton.addEventListener('click', loginCheck);