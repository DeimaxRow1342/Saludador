import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

const nombre_label = document.querySelector("#nombre-label");
const edad_label = document.querySelector("#edad-label");
const genero_label = document.querySelector("#genero-label");
const idioma_label = document.querySelector("#idioma-label");
const saludar_boton = document.querySelector("#saludar-boton");

const espanol_radio = document.querySelector("#espanol-radio");
const ingles_radio = document.querySelector("#ingles-radio");

espanol_radio.addEventListener("change", () => {
  nombre_label.textContent = "¿Cuál es tu nombre?:";
  edad_label.textContent = "¿Cuál es tu edad?:";
  genero_label.textContent = "¿Cuál es tu género? (M/F)?:";
  idioma_label.textContent = "Idioma: ";
  saludar_boton.value = "Saludar";
  div.innerHTML = "";
});

ingles_radio.addEventListener("change", () => {
  nombre_label.textContent = "What's your name?:";
  edad_label.textContent = "What's your age?:";
  genero_label.textContent = "What's your gender? (M/F)?:";
  idioma_label.textContent = "Language: ";
  saludar_boton.value = "Salute";
  div.innerHTML = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value;
  const genero = genero_input.value;

  let idioma = "";
  if (espanol_radio.checked) {
    idioma = "espanol";
  } else if (ingles_radio.checked) {
    idioma = "ingles";
  } else {
    idioma = "espanol";
  }

  if (genero === "M" || genero === "F") {
    const saludo = saludar(nombre, edad, genero, idioma);
    div.innerHTML = "<p>" + saludo + "</p>";
  } else {
    alert("Ingresa un género válido");
    nombre_input.value = "";
    edad_input.value = "";
    genero_input.value = "";
    div.innerHTML = "";
  }
});