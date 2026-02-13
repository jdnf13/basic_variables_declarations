const { preguntar, cerrar } = require("./consola");

async function iniciar() {
  let nombre = await preguntar("Nombre: ");
  let edad = Number(await preguntar("Edad: "));
  let ciudad = await preguntar("Ciudad: ");

  let persona = {
    nombre,
    edad,
    ciudad
  };

  console.log("\n--- PERSONA ---");
  console.log(persona.nombre);
  console.log(persona.edad);
  console.log(persona.ciudad);

  cerrar();
}

iniciar();