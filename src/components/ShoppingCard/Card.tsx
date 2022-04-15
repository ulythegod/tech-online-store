import React from 'react';
import styles from './card.module.scss';
import CardLists from './CardLists';
import CardSummaryForm from './CardSummaryForm';

import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectAllProductsIds } from 'features/product-card/productCardSlice';
import { selectProductsByIds } from 'features/products/productsSlice';

import { Product } from '../../CustomTypes';

function Card() {
    const productsIds = useSelector((state: RootState) => selectAllProductsIds(state));    

    let productsIdsWithoutDoubles: number[] = productsIds.filter((item, index) => {
        return productsIds.indexOf(item) === index
    });

    let idsCounts: number[] = productsIds.reduce(function(stack, value) {
        return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});

    const products = useSelector((state: RootState) => selectProductsByIds(state, productsIdsWithoutDoubles));

    const subtotalValues: number[] = products.map((product: Product, id: number) => {
        return Number(product.price) * idsCounts[product.id];
    });

    const subtotal: number = subtotalValues.reduce(
        (prevVal, currentVal) => prevVal + currentVal,
        0
    );

    return (
        <div className={styles["shopping-card-block"]}>
            <CardLists 
                products={products}
                idsCounts={idsCounts}
            />
            <CardSummaryForm 
                subtotal={subtotal}
            />
        </div>
    );    
}

export default Card;