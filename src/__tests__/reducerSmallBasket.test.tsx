import reducer, { 
    productAdded, 
    productRemoved, 
    clearCard, 
    decreaseAmount, 
    changeAmount 
} from  '../features/product-card/productCardSlice';

test('add one product to basket', () => {
    let prevState: any[] = [];

    expect(reducer(prevState, productAdded(42))).toEqual([42]);
});

test('add simular product to full basket', () => {
    let prevState: any[] = [42];

    expect(reducer(prevState, productAdded(42))).toEqual([42, 42]);
});

test('add different product to full basket', () => {
    let prevState: any[] = [42];

    expect(reducer(prevState, productAdded(47))).toEqual([42, 47]);
});

test('remove product from basket', () => {
    let prevState: any[] = [42, 42, 47];

    expect(reducer(prevState, productRemoved(42))).toEqual([47]);
});

test('clear basket', () => {
    let prevState: any[] = [42, 42, 47];

    expect(reducer(prevState, clearCard)).toEqual([]);
});

test('decrease amount of product in basket', () => {
    let prevState: any[] = [42, 42, 47, 47, 30, 47];

    expect(reducer(prevState, decreaseAmount({"productId": 47, "quantity": 3}))).toEqual([42, 42, 30, 47, 47]);
});

test('change amount of product in basket', () => {
    let prevState: any[] = [42, 42, 47, 47, 30, 47];

    expect(reducer(
        prevState, 
        changeAmount({"productId": 47, "newQuantity": 4})
    )).toEqual([42, 42, 30, 47, 47, 47, 47]);
});