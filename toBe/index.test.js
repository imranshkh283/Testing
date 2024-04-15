const data = {
    name: 'javascript test',
    version: '1.0.0',
}

describe('test object property', () => {
    test('object property', () => {
        expect(data.name).toBe('javascript test');
        expect(data.version).not.toBe('1.1.0');
    });
})