/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

let num = parseFloat(prompt("Introduce un número decimal"));

if(isNaN(num)){
    document.write("Tienes que introducir un número")
}
if(num < 0 || num == 0){
    document.write(num)
}

let resultadoBinario = "";

while(num > 0){
    let residuo = num % 2;
    resultadoBinario = residuo + resultadoBinario
    num = Math.floor(num/2)
}
document.write(resultadoBinario)