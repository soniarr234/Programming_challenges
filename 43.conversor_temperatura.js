/*
 * Crea una función que transforme grados Celsius en Fahrenheit y viceversa.
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°"
 *   y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 */

function convertirGrados(entrada) {
    // Verificar si el formato es correcto
    const formatoValido = /^-?\d+(\.\d+)?°[CF]$/;
    
    if (!formatoValido.test(entrada)) {
        return "Error: Formato inválido";
    }
    


    let valor = parseFloat(entrada.slice(0, -2))
    let unidad = entrada.slice(-1, entrada.length)
    
    if(unidad == "C"){
        let fahrenheit = (valor* 9/5) + 32
        return fahrenheit.toFixed(2) + "ºF"
    }else if(unidad == "F"){
        let celsius = (valor - 32) * 5/9
        return celsius.toFixed(2) + "ºC"
    }else{
        return "Error: Unidad desconconida, prueba con C o F"
    }
    
}

// Ejemplos de uso
console.log(convertirGrados("-25°C"));
console.log(convertirGrados("77°s"));
console.log(convertirGrados("100°F"));
console.log(convertirGrados("30°C"));
console.log(convertirGrados("30C"));
console.log(convertirGrados("30°K"));
console.log(convertirGrados("30°X"));
