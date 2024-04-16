async function getUserData(userId) {
    return await fetch(`https://freetestapi.com/api/v1/laptops?limit=1`).then(response => response.json());
}

describe('get Laptop Data', () => {
    it('should be called three times for each user ID', async () => {
        const userIds = ['Dell', 'HP', 'Apple', 'Lenovo', 'Acer', 'Microsoft', 'ASUS', 'Lenovo', 'HP', 'Acer'];

    });
});