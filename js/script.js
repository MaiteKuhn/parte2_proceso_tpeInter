const carruseles = document.querySelectorAll(".carrusel");

carruseles.forEach(carrusel => {

    const juegos = carrusel.querySelector(".juegos");
    const izquierda = carrusel.querySelector(".izquierda");
    const derecha = carrusel.querySelector(".derecha");

    derecha.addEventListener("click", () => {
        juegos.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    });

    izquierda.addEventListener("click", () => {
        juegos.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });

});