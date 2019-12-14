const reverseString = require('./reversestring');

test('test reversestring function si elle existe', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses avec majuscule', () => {
    expect(reverseString('HELlo')).toEqual('olleh');
});