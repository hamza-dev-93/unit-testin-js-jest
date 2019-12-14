const chunkArray = require('./chunk');

test('la function chunkArray exist', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunkan array of 10 values witrh length of 2 ', () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const len = 2;
    const chunkedArr = chunkArray(numbers, len);

    expect(chunkedArr).toEqual([[1, 2],[3, 4],[5, 6],[7, 8],[9, 10]]);
});