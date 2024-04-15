const sum = require('./sum');

test(' sum of two number', () => {
    expect(sum(1, 2)).toBe(3);
})

test('sum of 4 + 4', () => {
    expect(4 + 4).toBe(8);
})

test('object test value', () => {
    const data = { name: 'Imran' };
    data['age'] = 24;
    data['address'] = 'bandra east'

    expect(data).toEqual({ name: 'Imran', age: 24, address: 'bandra east' });
})

test('null falsy test', () => {
    const n = null;

    expect(n).toBeFalsy();
})