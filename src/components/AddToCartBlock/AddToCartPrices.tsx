import React, { useState } from "react";
import styles from './addToCartPrices.module.scss';
import StoreButton from "components/Buttons/StoreButton";
import { ReactComponent as PayPal } from '../../images/paypal.svg';

import { useSelector, useDispatch } from 'react-redux';
import { productAdded, decreaseAmount, changeAmount, selectAllProductsIds } from 'features/product-card/productCardSlice';
import { RootState } from 'store';
import { selectProductsByIds } from "features/products/productsSlice";
import { Product } from "CustomTypes";


type Props = {
    productPrice: number,
    productId: number
}

function AddToCartPrices(props: Props) {
    const dispatch = useDispatch();

    const products = useSelector((state: RootState) => selectProductsByIds(state, [props.productId]));

    const productsIds = useSelector((state: RootState) => selectAllProductsIds(state));

    let idsCounts: number[] = productsIds.reduce(function(stack, value) {
        return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});

    const subtotalValues: number[] = products.map((product: Product, id: number) => {
        return Number(product.price) * idsCounts[product.id];
    });

    function handleAmountIncrease() {        
        dispatch(productAdded(props.productId))
    }

    function handleAmountDecrease() {
        dispatch(decreaseAmount({productId: props.productId, quantity: quantity}))        
    }

    function handleAmountChange(event: any) {
        event.preventDefault();

        dispatch(changeAmount({productId: props.productId, quantity: Number(event.target.value)}))        
    }

    return (
        <div className={`${styles["prices-block"]}`}>
            <span className={`${styles["on-sale"]}`}>On Sale from <span>{`$${props.productPrice * amount}`}</span></span>
            <div className={`${styles["number"]}`}>
                <button className={`${styles["add-number"]}`} onClick={handleAmountIncrease}></button>
                <input type="number" value={amount} onChange={(event: any) => handleAmountChange(event)} />
                <button className={`${styles["decrease-number"]}`} onClick={handleAmountDecrease}></button>
            </div>                    
            <StoreButton 
                style='blue-button-narrow'
                content={"Add to Cart"}
            />
            <StoreButton 
                style='yellow-button-narrow'
                content={<PayPal />}
            />
        </div>
    )
}

export default AddToCartPrices;