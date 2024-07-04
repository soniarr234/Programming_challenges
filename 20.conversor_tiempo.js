/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function changeMilliseconds(days, hours, minutes, seconds){
    let milliseconds = days * 24 * 60 * 60 * 1000 + hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000
    return milliseconds
}

let days = 1
let hours = 2
let minutes = 30
let seconds = 45

document.write(changeMilliseconds(days, hours, minutes, seconds))