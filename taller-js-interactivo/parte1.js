const { preguntar, cerrar } = require("./consola");

async function iniciar() {
  let nombre = await preguntar("Ingrese su nombre: ");
  let edad = await preguntar("Ingrese su edad: ");
  let pais = await preguntar("Ingrese su país: ");

  console.log("\n--- DATOS ---");
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
  console.log("País:", pais);

  cerrar();
}

iniciar();