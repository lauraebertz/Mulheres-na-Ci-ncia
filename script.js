const formulario = document.getElementById('meuFormulario');//puxa do html
const mensagemSucesso = document.getElementById('mensagemSucesso');

formulario.addEventListener('submit', function(event) { //a página não recarrega
    event.preventDefault();
    const nome = document.getElementById('nome').value; //recebe os valores
    const email = document.getElementById('email').value; //recebe os valores

   
    if (nome && email) {
        console.log("Formulário enviado por:", nome)//lógica 
        
        formulario.style.display = 'none';
        mensagemSucesso.style.display = 'block'; //mostra se deu certo e a mensagame foi "enviada"
    
        alert("Olá " + nome + "! Suas opiniões foram recebidas.");
    } //mostra se deu certo e a mensagame foi "enviada"
});
const menuToggle = document.getElementById("menuToggle");
const menuPrincipal = document.getElementById("menuPrincipal");

menuToggle.addEventListener("click", function () {

    menuPrincipal.classList.toggle("ativo");

    if (menuPrincipal.classList.contains("ativo")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown) {

    const link = dropdown.querySelector(":scope > a");

    link.addEventListener("click", function (event) {

        if (window.innerWidth <= 768) {

            const submenu = dropdown.querySelector(".submenu");

            if (submenu) {

                if (!dropdown.classList.contains("aberto")) {

                    event.preventDefault();

                    dropdowns.forEach(function (outroDropdown) {

                        if (outroDropdown !== dropdown) {
                            outroDropdown.classList.remove("aberto");
                        }

                    });

                    dropdown.classList.add("aberto");

                }

            }

        }

    });

});