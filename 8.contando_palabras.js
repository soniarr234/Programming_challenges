/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */
let frase = "Hola- que?... TAL__ hola. hoLa que holA tal";

//Quitar los signos de puntiación
let signos = [".", ":", ",", ";", "-", "_", "?", "!", "¿", "¡"];
for(let i= 0; i < signos.length; i++){
    while(frase.includes(signos[i])){
        frase = frase.replace(signos[i], "");
    }
}

//Ponerlo en minusculas todo
frase = frase.toLowerCase();

//Convierto el string en un array
frase = frase.split(" ")

//Creo un objeto para guardar las veces que se repite la palabra
let contadorPalabras = {};

for(let i = 0; i < frase.length; i++){ //hola que tal hola hola que hola tal
    if(contadorPalabras[frase[i]]){
        console.log(contadorPalabras)
        /*
        {hola: 1, que: 1, tal: 1}
        {hola: 2, que: 1, tal: 1}
        {hola: 3, que: 2, tal: 1}l
        {hola: 4, que: 2, tal: 1}
        */
        contadorPalabras[frase[i]]++
    }else{
        contadorPalabras[frase[i]] = 1
    }
}

//console.log(contadorPalabras)