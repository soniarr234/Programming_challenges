/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */

function common(array1, array2, bool){
    if(bool){
        let commonElements = []
        for(let i = 0; i < array1.length; i++){
            for(let j = 0; j < array2.length; j++){
                if(array1[i] == array2[j]){
                    commonElements.push(array1[i])
                }
            }
        }
        return commonElements
    }else{
        let nonCommonElements = []
        let isCommon = false;

        for(let i = 0; i < array1.length; i++){//"mochila", "coche", "boli"
            for(let j = 0; j < array2.length; j++){//"coche", "puerta", "ordenador", "silla", "mochila"
                if(array1[i] == array2[j]){
                    isCommon = true
                    break
                }
            }
            if(!isCommon){
                nonCommonElements.push(array1[i]);
            }
        }

        for(let i = 0; i < array2.length; i++){
            let isCommon = false;
            for(let j = 0; j < array1.length; j++){
                if(array2[i] == array1[j]){
                    isCommon = true;
                    break;
                }
            }
            if(!isCommon){
                nonCommonElements.push(array2[i]);
            }
        }

        return nonCommonElements
    }
}

let array1 = ["mochila", "coche", "boli"]
let array2 = ["coche", "puerta", "ordenador", "silla", "mochila"]
let bool = false

document.write(common(array1, array2, bool))