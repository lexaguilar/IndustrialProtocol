const dataMemory = require('./data-memory');

/**
 * protocolo industrial 
 */
const industrialProtocol = {
    read: (start=0, length=0, callback) => {

        const bufferArray = [];

        for (let i = start; i < (start + length); i++) 
            bufferArray.push(dataMemory[i]); 
        
        //retornar el buffer
        return bufferArray;

        
    }
}

/**
 * Funcion para controlar las solicitudes de lectura de manera asincrona
 * @param  {Array<tupla>} tuplas 
 */
const accessMemory = (...tuplas) => {

    return tuplas.map(tupla => {

        const { start, length, callback } = tupla;

        //Llamar la funcion read por cada solicitud
        const bufferArray = industrialProtocol.read(start, length);

        //retornar la funcion callback con el patload de datos
        return callback(bufferArray);

    });

}

const callbackDefault = payload => payload;

accessMemory({ start: 10, length: 15, callback: callbackDefault });

module.exports = {
    callbackDefault,
    accessMemory,
    industrialProtocol,
};