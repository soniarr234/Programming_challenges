/*
 * Crea una función que retorne el número total de bumeranes de
 * un array de números enteros e imprima cada uno de ellos.
 * - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números
 *   seguidos, en el que el primero y el último son iguales, y el segundo
 *   es diferente. Por ejemplo [2, 1, 2].
 * - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2]
 *   y [4, 2, 4]).
 */

function encontrarBoomerangs(numeros){
    let boomerangs = []
    if(numeros.length < 3){
        return "Error: no hay suficientes números en el array"
    }
    for(let i = 0; i < numeros.length -2; i++){
        if(numeros[i] == numeros[i + 2] && numeros[i] != numeros[i + 1]){
            boomerangs.push(numeros[i], numeros[i + 1], numeros[i + 2])
        }        
    }

    if(boomerangs.length == 0){
        return "No hay boomerangs en el array [" + numeros + "]"
    }else{
        return "Los boomerans encontrados en el array [" + numeros + "] son: " + boomerangs
    }
    
    
}

let numeros = [2, 1, 2, 5, 6, 7, 5, 7]
document.write(encontrarBoomerangs(numeros))