        // Buscador en vivo
        document.getElementById("search").addEventListener("input", function() {
            let searchTerm = this.value.toLowerCase();
            document.querySelectorAll(".tarjeta").forEach(function(card) {
                let productName = card.getAttribute("data-name").toLowerCase();
                if (productName.includes(searchTerm)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });

        // Carrusel automático
        let slides = document.querySelectorAll(".carousel .slide");
        let currentSlide = 0;

        function changeSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }

        setInterval(changeSlide, 3000);

        // menu
        // Selección de elementos
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn"); // Botón que abre el menú
const closeMenuBtn = document.querySelector(".close-menu"); // Botón que cierra el menú

// Función para abrir el menú
menuBtn.addEventListener("click", () => {
    console.log("Abriendo menú...");
    menu.classList.add("open");
});

// Función para cerrar el menú con el botón de cerrar
closeMenuBtn.addEventListener("click", () => {
    console.log("Cerrando menú con botón...");
    menu.classList.remove("open");
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        console.log("Cerrando menú al hacer clic afuera...");
        menu.classList.remove("open");
    }
});

// Evitar que un clic dentro del menú lo cierre inmediatamente
menu.addEventListener("click", (event) => {
    event.stopPropagation();
});
