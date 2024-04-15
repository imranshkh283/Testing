const _sum = require('.')

test(' the sum of the two numbers not correct', () => {
    expect(_sum(2, 3)).not.toBe(4);
})

test(' the sum of the two numbers correct', () => {
    expect(_sum(2, 3)).toBe(5);
})