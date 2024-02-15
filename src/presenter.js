import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;

  div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";
});