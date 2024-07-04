/*
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

function bisiesto(ano){
    for(let i = 0; i < 30; ano++){
        if(ano%4 == 0 && ano%100 != 0 || ano%400 == 0){
            console.log(ano)
            i++
        }
    }
}
let ano = 2023
bisiesto(ano)