const { accessMemory, industrialProtocol, callbackDefault: callback } = require(".");

test('Memoria posicion 10 y logitud 15', () => {

    const arr = accessMemory({ start: 10, length: 15, callback });
    expect(arr[0]).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

});

test('Memoria posicion 150 y logitud 654', () => {

    const arr = accessMemory({ start: 150, length: 654, callback });
    expect(arr[0].length).toEqual(654);

});

test('Prueba de buffer posicion 1024 y logitud 230', () => {

    const arr = industrialProtocol.read(1024, 230);
    expect(arr.length).toEqual(230);

});