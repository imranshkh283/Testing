const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white',
        'nice.oven': true,
    },
    livingroom: {
        amenities: [
            {
                couch: [
                    ['large', { dimensions: [20, 20] }],
                    ['small', { dimensions: [10, 10] }],
                ],
            },
        ],
    },
    'ceiling.height': 2,
};

describe('House for sale', () => {
    test('Test for Bath', () => {
        expect(houseForSale).toHaveProperty('bath');
    });
    test('Test for Lift', () => {
        expect(houseForSale).toHaveProperty('bath');
    });
    test('Test for Amenities', () => {
        expect(houseForSale.kitchen).toHaveProperty('amenities');

    });
    test('Test for Amenities length', () => {
        expect(houseForSale.kitchen.amenities).toHaveLength(3);
    });
    test('Test for facilities ', () => {
        expect(houseForSale).toHaveProperty(
            ['kitchen', 'amenities']
        )
    })
    test('Test for facilities for ove', () => {
        expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
    })
})