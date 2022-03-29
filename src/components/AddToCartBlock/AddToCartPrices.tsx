import React from "react";
import styles from './addToCartPrices.module.scss';
import StoreButton from "components/Buttons/StoreButton";
import { ReactComponent as PayPal } from '../../images/paypal.svg';

function AddToCartPrices(props: any): any {
    return (
        <div className={`${styles["prices-block"]}`}>
            <span className={`${styles["on-sale"]}`}>On Sale from <span>$3,299.00</span></span>
            <div className={`${styles["number"]}`}>
                <button className={`${styles["add-number"]}`}></button>
                <input type="number" defaultValue={1} />
                <button className={`${styles["decrease-number"]}`}></button>
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