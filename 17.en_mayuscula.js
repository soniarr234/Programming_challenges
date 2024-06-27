/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */
function changeUpperCase(texto){
    let firstCharacter = ""
    let charUpperCase = ""
    let container = ""
    for(let i = 0; i < texto.length; i++){ //hola que tal
        firstCharacter = texto[0].toUpperCase()
        if(texto[i] == " "){
            charUpperCase = texto[i + 1].toUpperCase()
        }
        
        console.log(charUpperCase)
        
    }
    
}

let texto = "hola que tal"
document.write(changeUpperCase(texto))