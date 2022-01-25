const dataMemory = require('./data-memory');

const tupla = {
    start:0,
    end:0,
    callback: () => {}
}


/**
 * protocolo industrial 
 */
const industrialProtocol = {
    read: async (start, end, callback) => {

        try {
            const array = [...dataMemory.slice(start, end)];        
            return () => callback(null, array);
        } catch (error) {
            return () => callback(error);
        }
        
    }
}

/**
 * Funcion para controlar las solicitudes de lectura de manera asincrona
 * @param  {Array<tupla>} tuplas 
 */
const accessMemory = (...tuplas) => {

    tuplas.forEach(async tupla => {

        const { start, end, callback } = tupla;
        const result = await industrialProtocol.read(start, end, callback);

        result();

    });

}

accessMemory(
     { start: 10, end: 20, callback: (err, payload) => console.log(`Payload: ${payload}`) }
);
