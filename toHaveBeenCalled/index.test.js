function drinkAll(callback, flavour) {
    if (flavour !== 'other') {
        callback(flavour);
    }
}

function checkSwitch() {
    const obj = {
        one: 1,
        two: 2,
        three: 3,
        default: 0
    }
    return obj[this.value] || obj.default;
}

describe('drinkAll', () => {

    test('drinks something lemon-flavoured', () => {
        const drink = jest.fn();
        drinkAll(drink, 'lemon');
        expect(drink).toHaveBeenCalled();
    })

    test('does not drink something other-flavoured', () => {
        const drink = jest.fn();
        drinkAll(drink, 'other');
        expect(drink).not.toHaveBeenCalled();
    })

    test('check switch', () => {
        const obj = { value: 'one' };
        expect(checkSwitch.call(obj)).toBe(1);
        expect(checkSwitch.call({ value: '5' })).not.toBe(5);
    })
})