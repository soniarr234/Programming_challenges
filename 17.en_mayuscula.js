/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */
function changeUpperCase(texto){
    let palabras = texto.split(' ');
    let palabrasModificadas = [];
    palabras.forEach(function (palabra){
        if(palabra.length > 0){
            let primeraLetra = palabra[0].toUpperCase()
            let container = primeraLetra + palabra.slice(1)
            palabrasModificadas.push(container)
        }else{
            palabrasModificadas.push(palabra)
        }        
    })
    let textoFinal = palabrasModificadas.join(" ")
    return textoFinal
}

let texto = "¿hola que tal?"
document.write(changeUpperCase(texto))