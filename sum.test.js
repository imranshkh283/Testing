const sum = require('./sum');
const data = require('./object');
const falsy = require('./falsy');
const _undefined = require('./_undefined');
const checkObject = require('./_throwError');

test(' sum of two number', () => {
    expect(sum(1, 2)).toBe(3);
})

test('sum of 4 + 4', () => {
    expect(4 + 4).toBe(8);
})

test('object test value', () => {
    expect(data).toEqual({ name: 'Jest testing', version: '29.7.0', description: 'Jest testing', file: 'object' });
})

test('null falsy test', () => {
    expect(falsy).toBeNull();
})

test('undefined test', () => {
    expect(_undefined).toBeUndefined();
})

test('Throw new err', () => {
    expect(() => {
        checkObject('drink')
    }).toThrow()
})

