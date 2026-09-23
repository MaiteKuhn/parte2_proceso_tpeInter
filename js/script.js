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
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-abierto");
});
const btnCategorias = document.querySelector(".btn-categorias");
const submenu = document.querySelector(".submenu");

btnCategorias.addEventListener("click", () => {
    submenu.classList.toggle("submenu-abierto");
});


//API
const contenedores = document.querySelectorAll('.carrusel .juegos');

fetch('https://vj.interfaces.jima.com.ar/api/v2')
  .then(response => response.json())
  .then(games => {
    
    contenedores.forEach((contenedor,index) => {
        const inicio = index * 8;
        const fin = inicio + 8;
        
        const grupoJuego = games.slice(inicio, fin);

        grupoJuego.forEach(game => {
            const tarjeta = document.createElement('article');
            tarjeta.classList.add('juego');

          tarjeta.innerHTML = `
            <img src="${game.background_image_low_res}" alt="${game.name}">
            <div class="info-card">
                <div class="info-texto">
                <p>${game.name}</p>
                <span class="likes">🤍 ${game.rating}k</span>
                </div>
                <button class="btn-jugar">Jugar</button>
            </div>
            `;
            contenedor.appendChild(tarjeta);
        });
    });
  })
  .catch(error => {
    console.error('Error al obtener los jeugos:', error);
  });
