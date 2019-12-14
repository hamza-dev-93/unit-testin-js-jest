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

test('test return Undefined', () => {
    expect(functions.isUndefined()).toBeUndefined();
});

test('test return meme valeur d entree', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

test('test return meme valeur d entree', () => {
    expect(functions.checkValue(2)).toBeTruthy();
});

// toEqual
test('User doit etre Hamza BH object', () => {
    expect(functions.createUser()).toStrictEqual({
        firstName: 'Hamza',
        lastName: 'BH'
    });
});

// less than and graeter than
test('Test doit etre under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// Regex with i sensative lettre
test('il n ya pas la lettre P dans le mot France', () => {
    expect('france').not.toMatch(/P/i);
});

// array verification si nom exist dans array
test('Tester si  hamza exist dans array', () => {
    usernames = ['ahmed', 'amin', 'haroun'];
    expect(usernames).toContain('amin');
})

// tester avec async data (jsonplaceholder)
test('Fetch user name doit etre leanne graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
                    .then(data => {
                        expect(data.name).toEqual('Leanne Graham');
                    })
})