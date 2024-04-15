const sum = require('./sum');

test(' sum of two number', () => {
    expect(sum(1, 2)).toBe(3);
})

test('sum of 4 + 4', () => {
    expect(4 + 4).toBe(8);
})

