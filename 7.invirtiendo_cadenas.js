/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena(frase){
    let cadenaInvertida = ""
    for(let i=frase.length - 1; i >= 0; i --){
        cadenaInvertida += frase[i]
    }
    return cadenaInvertida
}

let frase = "Hola mundo"
document.write(invertirCadena(frase))