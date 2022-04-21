import reducer from '../features/prices/pricesSlice';

test('should return the initial state', () => {
    expect(reducer(undefined, {type: undefined})).toEqual({
        "code": 0,
        "message": "",
        "prices": [
            {id: 0, name: `$0.00 - $1,000.00`, segmentValues: [0, 1000]},
            {id: 1, name: `$1,000.00 - $2,000.00`, segmentValues: [1000, 2000]},
            {id: 3, name: `$2,000.00 - $3,000.00`, segmentValues: [2000, 3000]},
            {id: 4, name: `$3,000.00 - $4,000.00`, segmentValues: [3000, 4000]},
            {id: 5, name: `$4,000.00 - $5,000.00`, segmentValues: [4000, 5000]},
            {id: 6, name: `$5,000.00 - $6,000.00`, segmentValues: [5000, 6000]},
            {id: 7, name: `$6,000.00 - $7,000.00`, segmentValues: [6000, 7000]},
            {id: 8, name: `$7,000.00 And Above`, segmentValues: [7000, 1000000]},
        ],
        "status": ""
    })
})