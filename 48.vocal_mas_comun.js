/*
 * Crea un función que reciba un texto y retorne la vocal que
 * más veces se repita.
 * - Ten cuidado con algunos casos especiales.
 * - Si no hay vocales podrá devolver vacío.
 */

function vocalMasRepetida(texto){
    texto = texto.toLowerCase()
    let vocales = "aeiou"
    let contadorVocales = [0, 0, 0, 0, 0]; // a, e, i, o, u
    
    for(let i = 0; i < texto.length; i++){
        if(vocales.includes(texto[i])){
            let index = vocales.indexOf(texto[i])//Mira dentro de texto las vocales que tiene y me dice el indice dentro de la variable vocales (a = 0, e = 1...u = 4)
            contadorVocales[index]++ //contardorVocales[3]++ aumenta el valor del array contadorVocales [0, 0, 0, 1, 0]   
        }
    }
    let maxContador = 0
    let maxIndex = -1

    for(let i = 0; i < contadorVocales.length; i++){
        if(contadorVocales[i] > maxContador){
            maxContador = contadorVocales[i]
            maxIndex = i
        }
    }
    if(maxContador == 0){
        return ""
    }
    return vocales[0]
}

let texto = "Hole qooo"
document.write(vocalMasRepetida(texto))