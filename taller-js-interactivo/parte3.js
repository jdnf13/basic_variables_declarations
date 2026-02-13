const { preguntar, cerrar } = require("./consola");

async function iniciar() {
  let edad = Number(await preguntar("Edad: "));
  let mensaje = await preguntar("Mensaje: ");
  let activo = await preguntar("Activo (true/false): ") === "true";
  let valor;

  console.log("\n--- TIPOS ---");
  console.log(typeof edad);
  console.log(typeof mensaje);
  console.log(typeof activo);
  console.log(typeof valor);

  cerrar();
}

iniciar();