const buscador = document.querySelector('input[type="search"]');
const tarjetas = document.querySelectorAll("li");

// Quita mayúsculas y tildes para que "juanito" encuentre "Juanito"
const limpiar = texto =>
  texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

buscador.addEventListener("input", () => {
  const busqueda = limpiar(buscador.value);

  tarjetas.forEach(tarjeta => {
    const nombre = limpiar(tarjeta.querySelector("h2").textContent);
    // Si hay texto escrito y el nombre lo contiene, se resalta
    tarjeta.classList.toggle("resaltado", busqueda !== "" && nombre.includes(busqueda));
  });
});

// Evita que la página se recargue al presionar Enter o la lupa
document.querySelector("form").addEventListener("submit", e => e.preventDefault());