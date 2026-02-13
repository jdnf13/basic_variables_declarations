const { preguntar, cerrar } = require("./consola");

async function iniciar() {
  let numero = await preguntar("Escriba un número decimal: ");
  let mensaje = await preguntar("Escriba un mensaje: ");
  let activo = await preguntar("Escriba true o false: ");

  let valor;
  let vacio = null;

  console.log("\n--- VALORES ---");
  console.log(Number(numero));
  console.log(mensaje);
  console.log(activo === "true");
  console.log(valor);
  console.log(vacio);

  cerrar();
}

iniciar();