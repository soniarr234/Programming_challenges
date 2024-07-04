/*
 * ¿Conoces el calendario de adviento de la comunidad (https://adviento.dev)?
 * 24 días, 24 regalos sorpresa relacionados con desarrollo de software,
 * ciencia y tecnología desde el 1 de diciembre.
 *
 * Enunciado: Crea una función que reciba un objeto de tipo "Date" y retorne
 * lo siguiente:
 * - Si la fecha coincide con el calendario de adviento 2022: Retornará el regalo
 *   de ese día (a tu elección) y cuánto queda para que finalice el sorteo de ese día.
 * - Si la fecha es anterior: Cuánto queda para que comience el calendario.
 * - Si la fecha es posterior: Cuánto tiempo ha pasado desde que ha finalizado.
 *
 * Notas:
 * - Tenemos en cuenta que cada día del calendario comienza a medianoche 00:00:00
 *   y finaliza a las 23:59:59.
 * - Debemos trabajar con fechas que tengan año, mes, día, horas, minutos
 *   y segundos.
 */

function fechaAdviento(fecha){
    const fechaInicioAdviento = new Date('2022-12-01T00:00:00');
    const fechaFinAdviento = new Date('2022-12-24T23:59:59');
    const regalos = [
        "Regalo 1", "Regalo 2", "Regalo 3", "Regalo 4", "Regalo 5",
        "Regalo 6", "Regalo 7", "Regalo 8", "Regalo 9", "Regalo 10",
        "Regalo 11", "Regalo 12", "Regalo 13", "Regalo 14", "Regalo 15",
        "Regalo 16", "Regalo 17", "Regalo 18", "Regalo 19", "Regalo 20",
        "Regalo 21", "Regalo 22", "Regalo 23", "Regalo 24"
    ];
    
    if(fecha < fechaInicioAdviento){
        let difMilisegundos = fechaInicioAdviento - fecha;
        let difDias = Math.floor(difMilisegundos / (1000 * 60 * 60 * 24));
        document.write("Quedan " + difDias + " dias para que empiece el calendario de adviento")
    }else if(fecha > fechaFinAdviento){
        let difMilisegundos = fecha - fechaFinAdviento;
        let difDias = Math.floor(difMilisegundos / (1000 * 60 * 60 * 24));
        document.write("Ya han pasado " + difDias + " dias desde que terminó el calendario de adviento")
    }else{
        let diaIndex = fecha.getDate() - 1;
        let finDiaActual = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate(), 23, 59, 59); //Para saber lo que queda para que finalice el dia actual
        let difMilisegundos = finDiaActual - fecha;
        let horas = Math.floor(difMilisegundos / (1000 * 60 * 60));
        let minutos = Math.floor((difMilisegundos % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((difMilisegundos % (1000 * 60)) / 1000);
        document.write("Hoy es el día " + (diaIndex + 1) + " del calendario de adviento. <br> El regalo es: " + regalos[diaIndex] + ".<br>Quedan " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos para que finalice el sorteo de este día. ")
    }
}

let fecha = new Date('2022-12-25T10:00:00');
fechaAdviento(fecha)