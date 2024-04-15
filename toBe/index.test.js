const data = {
    name: 'javascript test',
    version: '1.0.0',
}

describe('test object property', () => {
    test('object property', () => {
        expect(data.name).toBe('javascript test');
        expect(data.version).toBe('1.0.0');
    });
    test('object property', () => {
        expect(data.version).not.toBe('1.1.0');
    })

    test('rewrite as ', () => {
        expect(Object.keys(data)).toContain('name')
        expect(Object.is(data.name, 'javascript test')).toBe(true)
    })
})