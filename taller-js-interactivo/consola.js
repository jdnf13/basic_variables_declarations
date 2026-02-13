const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(texto) {
  return new Promise(resolve => {
    rl.question(texto, respuesta => {
      resolve(respuesta);
    });
  });
}

function cerrar() {
  rl.close();
}

module.exports = { preguntar, cerrar };