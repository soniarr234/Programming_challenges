/*
 * Crea una función que sea capaz de detectar y retornar todos los
 * handles de un texto usando solamente Expresiones Regulares.
 * Debes crear una expresión regular para cada caso:
 * - Handle usuario: Los que comienzan por "@"
 * - Handle hashtag: Los que comienzan por "#"
 * - Handle web: Los que comienzan por "www.", "http://", "https://"
 *   y finalizan con un dominio (.com, .es...)
 */

function searchHandles(){
    
    let texto1 = "@sonia";
    let regex1 = /^@/;

    if(regex1.test(texto1)){
        console.log("El usuario tiene @ al principio del nombre");
    }
    
    let texto2 = "#hola";
    let regex2 = /^#/;

    if(regex2.test(texto2)){
        console.log("Hay un # al principio");
    }

    let texto3 = "https://google.es";
    let regex3 = /^(www\.|http:\/\/|https:\/\/)[a-zA-Z0-9.-]+\.(com|es)$/;

    if(regex3.test(texto3)){
        console.log("La URL esta bien")
    }
}

searchHandles()