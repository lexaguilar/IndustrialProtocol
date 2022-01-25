/**
 * Funcion que retorna un generador de numeros en un rango dado 
 * @param {*} start 
 * @param {*} end 
 */
 function* arrayGenerator(start, end) {
    let i = start;
    while (i <= end)       
        yield i++;
        
}

/**
 * Generar un array de numeros en un rango dado
 */
const dataMemory = [...arrayGenerator(0, 4095)];

module.exports = dataMemory;