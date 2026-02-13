const { preguntar, cerrar } = require("./consola");

async function iniciar() {
  let nombre = await preguntar("Nombre del estudiante: ");
  let nota1 = Number(await preguntar("Nota 1: "));
  let nota2 = Number(await preguntar("Nota 2: "));
  let nota3 = Number(await preguntar("Nota 3: "));

  let promedio = (nota1 + nota2 + nota3) / 3;

  console.log(
    `\nEl estudiante ${nombre} tiene promedio ${promedio.toFixed(2)}`
  );

  cerrar();
}

iniciar();