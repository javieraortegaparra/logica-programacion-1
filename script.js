const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales:", num1, num2, num3);
} else {
    let numeros = [num1, num2, num3];
    numeros.sort(function(a, b) { return a - b; });

    let menor = numeros[0];
    let medio = numeros[1];
    let mayor = numeros[2];

    console.log("Números de menor a mayor:", menor, medio, mayor);
  }