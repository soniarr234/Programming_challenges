/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

const leetDictionario = {
    'a': '4',
    'b': '8',
    'c': '(',
    'e': '3',
    'g': '6',
    'h': '#',
    'i': '1',
    'l': '1',
    'o': '0',
    's': '5',
    't': '7',
    'z': '2',
};

function transformarALeet(texto){
    let textoLeet = "";

    for(let i = 0; i < texto.length; i++){
        let caracter = texto[i].toLowerCase() //Sonia
        //console.log(leetDictionario[caracter]) //50n14 --> esto accede al valor que tiene caracter en el diccionario por ejemplo S = 5, o = 0...
        if (leetDictionario[caracter]) {//Mira que- este el valor(caracter) en el diccionario, si no esta devuelve false
            textoLeet = textoLeet + leetDictionario[caracter];
            //console.log(textoLeet) //5 50 50n 50n1 50n14 
        } else {
            textoLeet = textoLeet + caracter; // Esto agraga los caracteres que no estan en el diccionario
            console.log(caracter)
        }
    }
    return textoLeet;
}

let texto = "Hola, me llamo Sonia y tengo 103 años";
document.write(transformarALeet(texto));