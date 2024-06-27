/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function eliminarCaracteres(cadena1, cadena2){
    let salida1 = ""
    let salida2 = ""
    cadena1 = cadena1.toLowerCase()
    cadena2 = cadena2.toLowerCase()
    for(char of cadena1){
        if (!cadena2.includes(char)) {
            salida1 += char
        }
    }
    for(char of cadena2){
        if(!cadena1.includes(char)){
            salida2 += char
        }   
    }
    document.write("Salida 1: " + salida1 + "<br>")
    document.write("Salida 2: " + salida2)
}
let cadena1 = "Hola"
let cadena2 = "Adios"
eliminarCaracteres(cadena1, cadena2)