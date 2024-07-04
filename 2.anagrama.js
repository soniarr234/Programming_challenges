/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(texto1, texto2){
    texto1 = texto1.replace(" ", "").toLowerCase();
    texto2 = texto2.replace(" ", "").toLowerCase();
    //Si no tienen la misma longitud no son anagramas
    if(texto1.length != texto2.length){
        return "No son anagramas";
    }
    //Tengo que ordenarlos y saldría algo asi eilnst en las dos palabras
    texto1 = texto1.split("").sort().join("");
    texto2 = texto2.split("").sort().join("");

    if(texto1 == texto2){
        return "Es un anagrama"
    }else{
        return "No es un anagrama"
    }

}

let texto1 = "silent";
let texto2 = "listen";

console.log(anagrama(texto1, texto2));//true