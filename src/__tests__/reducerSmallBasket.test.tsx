import reducer, { productAdded } from  '../features/product-card/productCardSlice';

test('add one product to basket', () => {
    let prevState: any[] = [];

    expect(reducer(prevState, productAdded(42))).toEqual([42]);
});