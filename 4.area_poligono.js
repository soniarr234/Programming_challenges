/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligono(tipoPoligono){
    if(tipoPoligono.toLowerCase() == "triangulo"){
        let alturaTriangulo = parseFloat(prompt("Escribe la medida de la altura"))
        let baseTriangulo = parseFloat(prompt("Escribe la medida de la base"))
        if(!isNaN(alturaTriangulo) && !isNaN(baseTriangulo)){
            let resultado = (baseTriangulo * alturaTriangulo)/2
            return resultado
        }
        return "Tienes que introducir un número válido."
        
    }else if(tipoPoligono.toLowerCase() == "cuadrado"){
        let ladoCuadrado = parseFloat(prompt("Escribe la medida de un lado"))
        if(!isNaN(ladoCuadrado)){
            let resultado = ladoCuadrado*ladoCuadrado
            return resultado
        }
        return "Tienes que introducir un número válido."
    }else if(tipoPoligono.toLowerCase() == "rectangulo" || tipoPoligono.toLowerCase() == "rectángulo"){
        let alturaRectangulo = parseFloat(prompt("Escribe la medida de la altura"))
        let baseRectangulo = parseFloat(prompt("Escribe la medida de la base"))
        if(!isNaN(alturaRectangulo) && !isNaN(baseRectangulo)){
            let resultado = (baseRectangulo * alturaRectangulo)
            return resultado
        }
        return "Tienes que introducir un número válido."
    }else{
        return "Polígono no soportado. Por favor elige entre 'triangulo', 'cuadrado' o 'rectángulo'."
    }
}

let tipoPoligono = prompt("¿Quieres un triangulo, cuadrado o rectángulo?")

document.write(areaPoligono(tipoPoligono))