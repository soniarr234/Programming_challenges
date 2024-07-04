function encriptacion(password){
    let regexNum = /^[a-zA-Z]+$/; //comprueba que haya al menos una letra en la cadena de texto
    if(password == "" || password == " "){
        console.log("Tienes que escribir una contraseña")
    }

    if(regexNum.test(password)){//La contraseña tiene solo letras
        let cadenaInvertida = password.split("").reverse().join("");
        //A una variable nueva le hago el replace(regex, funcion), la funcion tiene un switch para sustituir las vocales por números
        let cadenaReemplazada = cadenaInvertida.replace(/[aeiou]/g, function(vocal){
            switch(vocal){
                case "a": return "0";
                case "e": return "1";
                case "i": return "2";
                case "o": return "3";
                case "u": return "4";
            }
        });
        return cadenaReemplazada + "aca";
    }
}

function desencriptacion(password){
    let cadenaSinSufijo = password.substring(0, password.length - 3);
    let cadenaReemplazada = cadenaSinSufijo.replace(/[01234]/g, function(vocal){
        switch(vocal){
            case '0': return 'a';
            case '1': return 'e';
            case '2': return 'i';
            case '3': return 'o';
            case '4': return 'u';
        }
    });

    let cadenaInvertida = cadenaReemplazada.split("").reverse().join("");
    return cadenaInvertida;
    
}

let password = "Sonia";
let textoEncriptado = encriptacion(password);
let textoDesencriptado = desencriptacion(textoEncriptado);
document.write(textoEncriptado + "<br>")
document.write(textoDesencriptado)