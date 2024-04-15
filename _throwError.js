function checkObject(arr) {
    if (arr == 'drink') {
        throw new Error('drink is not available');
    }
}

module.exports = checkObject;