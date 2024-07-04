/*
 * Dado un listado de números, encuentra el SEGUNDO más grande
 */

let numeros = [4, 2, 8, 6, 23];
let max = 0;
let segundoMax = 0;

for (let i = 0; i < numeros.length; i++) {
    if(max < numeros[i]){//
        segundoMax = max
        max = numeros[i]
        
    }
}

console.log("El segundo número más grande es: " + segundoMax)