document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".project-form");
    const emailInput = document.querySelector("#correo");

    form.addEventListener("submit", (event) => {
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            event.preventDefault(); // Prevent form submission
            alert("Por favor, ingrese un correo electrónico válido.");
        }
    });
});