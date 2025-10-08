const hash  = require('../test/testindex');

test('Verificar hash SHA-256', () => {
    const message = 'contraseña123';
    const hashTest = hash(message);
    expect(hashTest).toEqual('8e7ab8d9fe3b324acdd1f76735eea350ea61ac24cbd17e5446946e5a4c71d999');
});