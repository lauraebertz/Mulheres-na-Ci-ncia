const menuToggle = document.getElementById("menuToggle");
const menuPrincipal = document.getElementById("menuPrincipal");

if (menuToggle && menuPrincipal) {

    menuToggle.addEventListener("click", function () {

        menuPrincipal.classList.toggle("ativo");

        if (menuPrincipal.classList.contains("ativo")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function (dropdown) {

    const link = dropdown.querySelector(":scope > a");
    const submenu = dropdown.querySelector(".submenu");

    if (!link || !submenu) {
        return;
    }

    link.addEventListener("click", function (event) {

        if (window.innerWidth <= 768) {

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

    });

});
