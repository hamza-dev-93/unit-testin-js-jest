const functions = require('./functions');

test('Adds 2 + 2 equale: ', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 3 to NOT equal', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull
// toBeUnDefined
// toBeDefined
// toBeTruthy
// to beFalsy

test('test return Null', () => {
    expect(functions.isNull()).toBeNull();
});