import React from "react";
import styles from './addToCartPrices.module.scss';
import StoreButton from "../Buttons/StoreButton";
import { ReactComponent as PayPal } from '../../images/paypal.svg';

import { useSelector, useDispatch } from 'react-redux';
import { productAdded, decreaseAmount, changeAmount, selectAllProductsIds } from '../../features/product-card/productCardSlice';
import { RootState } from '../../store';

type Props = {
    productPrice: number,
    productId: number
}

function AddToCartPrices(props: Props) {
    const dispatch = useDispatch();

    const productsIds = useSelector((state: RootState) => selectAllProductsIds(state));

    let idsCounts: number[] = productsIds.reduce(function(stack, value) {
        return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});

    let productCount: number = idsCounts[props.productId] ? idsCounts[props.productId] : 0;
    const subtotalValue: number = Number(props.productPrice) * productCount;

    function handleAddToCard() {
        dispatch(productAdded(props.productId));
        window.location.assign('/shopping-card');
    }

    function handleAmountIncrease() {                
        dispatch(productAdded(props.productId));
    }

    function handleAmountDecrease() {
        dispatch(decreaseAmount({productId: props.productId, quantity: productCount}));      
    }

    function handleAmountChange(event: any) {
        dispatch(changeAmount({productId: props.productId, newQuantity: Number(event.target.value)}));    
    }

    return (
        <div className={styles["prices-block"]}>
            <span className={styles["on-sale"]}>
                On Sale from 
                <span>
                    {`$${
                        (subtotalValue === 0) ?
                        props.productPrice :
                        subtotalValue
                    }`}
                </span>
            </span>
            <div className={styles["number"]}>
                <button className={styles["add-number"]} onClick={handleAmountIncrease}></button>
                <input type="number" value={productCount} onChange={(event: any) => handleAmountChange(event)} />
                <button className={styles["decrease-number"]} onClick={handleAmountDecrease}></button>
            </div>                    
            <StoreButton 
                buttonStyle={"blue-button-narrow"}
                content={"Add to Cart"}
                buttonAction={handleAddToCard}

            />
            <StoreButton 
                buttonStyle={"yellow-button-narrow"}
                content={<PayPal />}
            />
        </div>
    )
}

export default AddToCartPrices;