/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
function primo(num){
    if(num <= 1){return "No es primo"}
    if(num == 2){return "Es primo"}
    if(num%2 == 0){return "No es primo"}

    let raiz = Math.sqrt(num)
    for(let i = 3; i < raiz; i+=2){// 3
        if(num%i == 0){
            return "No es primo"
        }
        return "Es primo"
    }   
}

//Imprimir los números primos entre 1 y 100
function printPrimos(){
    for(let i = 1; i <= 100; i++){
        if(primo(i) == "Es primo"){
            console.log(i)
        }
    }
}

let num = 29;
document.write(primo(num))
printPrimos()
