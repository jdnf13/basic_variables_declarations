const { preguntar, cerrar } = require("./consola");

async function iniciar() {
  let precio = Number(await preguntar("Precio del producto: "));
  let cantidad = Number(await preguntar("Cantidad comprada: "));

  let total = precio * cantidad;

  console.log(`\nEl total a pagar es: $${total}`);

  cerrar();
}

iniciar();