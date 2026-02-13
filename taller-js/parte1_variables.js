const prompt = require('prompt-sync')();

let nombre = prompt("Nombre: ");
let edad = parseFloat(prompt("Edad: "), 10);
const pais = prompt("Pais: ");

console.log("\n--- TUS DATOS ---");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("País:", pais);