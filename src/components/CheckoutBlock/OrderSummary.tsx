import React, { ReactElement } from 'react';
import styles from './orderSummary.module.scss';
import SummaryItem from 'components/CheckoutBlock/SummaryItem';
import image1 from '../../images/summary1.png';
import image2 from '../../images/summary2.png';

import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectAllProductsIds } from 'features/product-card/productCardSlice';
import { selectProductsByIds } from 'features/products/productsSlice';

import { Product } from '../../CustomTypes';

function OrderSummary() {
    const productsIds = useSelector((state: RootState) => selectAllProductsIds(state));    

    let productsIdsWithoutDoubles: number[] = productsIds.filter((item, index) => {
        return productsIds.indexOf(item) === index
    });

    let idsCounts: number[] = productsIds.reduce(function(stack, value) {
        return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});

    const products = useSelector((state: RootState) => selectProductsByIds(state, productsIdsWithoutDoubles));

    let subtotalValues: number[] = [];
    products.forEach((product: Product, id: number) => {
        subtotalValues[product.id] = Number(product.price) * idsCounts[product.id];
    });

    const summaryItems: ReactElement<any, any>[] = products.map((product: Product, id: number) => {
        return (
            <SummaryItem
                key={product.id}
                id={product.id}
                amount={idsCounts[product.id]}
                price={subtotalValues[product.id]}
                name={product.name}
                image={product.photo[0].url}
            />
        )
    });

    return (
        <div className={`${styles["order-summary"]}`}>
            <span className={`${styles["summary-title"]}`}>Order Summary</span>
            <a className={`${styles["summary-link"]}`} href="#">{products.length} Items in Cart</a>
            <div className={`${styles["summary-items"]}`}>
                {summaryItems}
            </div>
        </div>
    );
}

export default OrderSummary;