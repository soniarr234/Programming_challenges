/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorial(num){
    if(isNaN(num)){
        return "Tienes que escribir un número"
    }else{
        if(num < 0){
            return "Tiene que ser un número igual o mayor que 0"
        }else if(num == 0 || num == 1){
            return "1"
        }else{
            return factorial(num - 1) * num
        }
    }
}

let num = prompt("Introduce un número")
document.write(factorial(num))