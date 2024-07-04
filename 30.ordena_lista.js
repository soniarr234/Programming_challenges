/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" para indicar si debe ordenarse de menor a mayor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */
function sortNumbers(numbers, direction) {
    let sortedArray = [];
    let arrayCopy = numbers.slice(); // Copia del array original para no modificarlo directamente

    if (direction === "Asc") {
        while (arrayCopy.length > 0) {
            let min = arrayCopy[0]; // 2 5 7
            
            let minIndex = 0;
            
            // Encontrar el mínimo en el array restante
            for (let i = 1; i < arrayCopy.length; i++) {
                if (arrayCopy[i] < min) {
                    min = arrayCopy[i];//1
                    minIndex = i;// 2
                    console.log(min)
                }
            }

            // Agregar el mínimo encontrado al array ordenado y eliminarlo del array copia
            sortedArray.push(min);
            arrayCopy.splice(minIndex, 1);
        }
    } else if (direction === "Desc") {
        while (arrayCopy.length > 0) {
            let max = arrayCopy[0];
            let maxIndex = 0;

            // Encontrar el máximo en el array restante
            for (let i = 1; i < arrayCopy.length; i++) {
                if (arrayCopy[i] > max) {
                    max = arrayCopy[i];
                    maxIndex = i;
                }
            }

            // Agregar el máximo encontrado al array ordenado y eliminarlo del array copia
            sortedArray.push(max);
            arrayCopy.splice(maxIndex, 1);
        }
    }

    return sortedArray;
}


let numbers = [2, 5, 1, 7];
let direction = "Asc";

let sortedNumbers = sortNumbers(numbers, direction);
document.write(sortedNumbers); // Resultado esperado: [1, 2, 5, 7]

direction = "Desc";
sortedNumbers = sortNumbers(numbers, direction);
document.write(sortedNumbers); // Resultado esperado: [7, 5, 2, 1]
